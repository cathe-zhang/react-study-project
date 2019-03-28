import React, { Component } from 'react'
import { Button } from 'antd-mobile'  // 具名导入

// 函数型组件
const Welcome = ( props ) => (
  <div>
  Hello, {props.text}
</div>
)

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      count: 1,
    }
  }

  componentDidMount(){
    // 不要直接使用this.state.count+1
    this.setState((prevState, prevProps)=>{
      return {
        count: prevState.count + 1
      }
    })
  }
  
  render() {
    const name = 'jerry'
    return (
      <div>
        app组件
        <h1>{name}</h1>
        <Button type="primary">添加购物车</Button>
        {/* 组件属性传值 */}
        <Welcome text="cellerchan" />
      </div>
    )
  }
}