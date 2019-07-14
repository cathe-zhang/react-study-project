// 巧妙的表单校验实现 同antd的getFieldDecorator 可以同步到项目代码中

import React, { Component, Children } from 'react'


// hoc 负责包装用户表单 增加数据管理能力、表单校验能力等
function KFormCreate(Comp) {

	return class extends Component {
		constructor(props){
			super(props)
			this.options = {
	
			}
			this.state = {
				
			}
		}

		// 还可以通过onFocus事件来监听输入框是否被用户点击过
	
		// 值改变
		handleChange = (e) => {
			const { name, value } = e.target  // 从InputComp中解构出name和value属性
			this.setState({
				[name]: value
			},()=>{
				this.validateForm(name)
			})
		}
	
		/**
		 * @field 字段field
		 * @options 选项
		 * @InputComp 传入的组件
		 */
		getFieldDecorator = (field, options, InputComp) => {
			// 将传入的选项赋值给this中对应的唯一属性
			this.options[field] = options
			return (
				<FormItem
					errorMsg={this.state[`${field}ErrorMsg`]}
				>
					{
						// React.cloneElement 将已经存在的属性克隆一份 然后修改它的属性，这么做的原因是无法直接修改一个原生的组件的属性
						// 扩充name value onChange属性
						React.cloneElement(InputComp, {
							name: field,  // 控件名称
							value: this.state[field],  // 控件值
							onChange: this.handleChange  // change事件处理
						})
					}
				</FormItem>
			)
		}

		// 单个字段表单校验
		validateField = field => {
			const rules = this.options[field].rules
			const validateRst = rules.some((rule)=>{
				// 验证必填规则
				if ( rule.required ) {
					if ( !this.state[field] ) {
						this.setState({
							[`${field}ErrorMsg`]: rule.message
						})
						// 若有校验失败则返回true 跳出some方法
						return true
					}
				}
			})
			// 如果校验成功 返回false 则设置错误信息展示为空
			if ( !validateRst ) {
				this.setState({
					[`${field}ErrorMsg`]: ''
				})
			}
			return validateRst
		}

		// 所有字段表单校验
		validateForm = () => {
			// 校验所有字段
			const result = Object.keys(this.options).every(field => {return !this.validateField(field)})
			console.log('result',result);
			return result
		}
	
		render() {
			return (
				<Comp {...this.props} 
					getFieldDecorator={this.getFieldDecorator} 
					validateForm={this.validateForm} 
					value={this.state} 
				/>
			)
		}
	}
}

class FormItem extends Component {

	render() {
		const { children, errorMsg } = this.props
		return (
			<div>
				{children}
				{
					errorMsg &&
					<div style={{
						color: 'red'
					}}>
						{errorMsg}
					</div>
				}
			</div>
		)
	}
}

class Input extends Component {
	render() {
		console.log('----------this.props', this.props);
		
		return (
			<div>
				{
					this.props.prefix
				}
				{/* 将传入的props全部展开给input */}
				<input {...this.props} /> 
			</div>
		)
	}
}

@KFormCreate
class KFormSample extends Component {
	
	onSubmit = () => {
		// 没搞懂这里为什么可以拿到两个输入框的值
		const { validateForm, value } = this.props
		if ( validateForm() ) {
			console.log('验证通过了');
			console.log('value', value);
		}
		else {
			console.log('验证不通过');
		}
	}
	
	render() {
		// 经过KFormCreate的包装 KFormSample拥有了getFieldDecorator属性
		const { getFieldDecorator } = this.props
		return (
			<div>
				{
					getFieldDecorator('username', {
						rules: [{required: true, message: '请填写用户名'}]
					}, <Input type="text" prefix="图标" />)
				}
				{
					getFieldDecorator('password', {
						rules: [{required: true, message: '请填写密码'}]
					}, <Input type="password" prefix='图标2' />)
				}
				
				<button onClick={()=>this.onSubmit()}>登录</button>
			</div>
		)
	}
}

export default KFormSample

