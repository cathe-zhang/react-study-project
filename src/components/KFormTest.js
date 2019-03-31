import React, { Component } from 'react';

// 这是一个Hoc: 负责包装用户表单，增加数据管理能力、校验等
function kFormCreate (Comp) {

  // 应该返回一个组件

  return class extends React.Component {

    constructor(props){
      super(props)
      this.options = {  // 字段选项设置
  
      }
      this.state = {}  // 各字段的值
    }
  
    // handleChange
    handleChange = (e) => {
      console.log(e)
      console.log(e.target)
      const { name, value } = e.target
      this.setState({
        [name]: value
      })
    }
  
    /**
     * field 字段
     * option 字段选项设置
     * InputComp 接收的Input组件
     */
    getFieldDecorator = ( field, option, InputComp ) => {
      this.options[field] = option
      return (
        <div>
          {
            // React.component 克隆已经存在的jsx，修改它的属性(已经存在的元素属性是不允许修改的)
            React.cloneElement(InputComp, {
              name: field,  // 控件名称
              value: this.state[field] || '',  // 控件值
              onChange: this.handleChange   // change事件处理
            })
          }
        </div>
      )
    }
  
    render() {
      return (
        <Comp 
          {...this.props}   // 保持组件的原有属性
          getFieldDecorator={this.getFieldDecorator}  // 给传入组件提供getFieldDecorator能力
        >
        </Comp>
      )
    }
  }
  
}

@kFormCreate  // export default不能与装饰器连用
class KFormSample extends Component {
  render() {
    const { getFieldDecorator } = this.props
    return (
      <div>
        {
          getFieldDecorator('username', {
            rules: [{
              required: true,
              message: '请填写用户名'
            }]
          }, <input type="text" />)
        }
        {
          getFieldDecorator('password', {
            rules: [{
              required: true,
              message: '请填写密码'
            }]
          }, <input type="texpasswordt" />)
        }
        <button>登录</button>
      </div>
    );
  }
}

export default KFormSample;
