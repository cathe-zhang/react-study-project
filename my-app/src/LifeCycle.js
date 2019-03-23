import React, { Component } from 'react'

export default class LifeCycle extends Component {

  constructor(props){
    super(props)
    // 构造函数
    console.log('1. 构造函数')
  }

  componentWillMount(){
    // 组件即将挂载，可以请求api，但不能做dom操作
    console.log('2. 组件即将挂载')
  }

  componentDidMount(){
    // 组件已经挂载
    console.log('3. 组件已经挂载')
  }

  componentWillReceiveProps(nextprops) {
    // 父组件传递的属性有变化，做相应的响应
    console.log('4. 父组件传递的属性改变')
  }

  shouldComponentUpdate(){
    // 组件是否需要更新，返回布尔值，是重要的优化点
    console.log('5. 组件是否需要更新')
    return true
  }

  componentWillUpdate(){
    console.log('6. 组件即将更新')
  }

  componentDidUpdate(){
    console.log('7. 组件已经更新')
  }
  
  render() {
    // 渲染
    console.log('8. 组件渲染')
    return (
      <div>
        
      </div>
    )
  }
}
