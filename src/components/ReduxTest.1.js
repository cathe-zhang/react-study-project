// 原生redux实现

import React, { Component } from 'react'
import { connect } from 'react-redux'
// import store from './../store'
import {
	add,
	minus,
	asyncAdd
} from '../store/couter.redux'


// connect接收参数 返回一个高阶组件 赋予组件管理数据的能力
@connect(
	(state)=>({couter: state.couter}),  // 状态映射
	{    // 可以直接写成对象形式 本身应该是一个函数，返回一个对象，同上面的mapStateToProps
		add,
		minus,
		asyncAdd
	}
)
class ReduxTest extends Component {

	state = {}

	render() {
		const { couter } = this.props
		console.log(this.props);
		
		return (
			<div>
				{couter.num}
				<button 
					onClick={this.props.minus}
				>
					-
				</button>
				<button
					onClick={this.props.add}
				>
					+
				</button>
				<button
					onClick={this.props.asyncAdd}
				>
					异步操作+
				</button>
			</div>
		)
	}
}

// const mapStateToProps = state => ({
// 	num: state
// })
// const mapDispatchToProps = dispatch => ({
// 	add: ()=>dispatch({type: 'add'}),
// 	minus: ()=>dispatch({type: 'minus'}),
// })

// 传入mapStateToProps和mapDispatchToProps 返回一个高阶组件 然后传入当前组件 赠钱
// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(ReduxTest)
export default ReduxTest