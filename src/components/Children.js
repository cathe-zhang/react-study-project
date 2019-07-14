import React, { Component } from 'react'

// 模拟接口 类
const api = {
  // 获取用户信息
  getUser: () => ({
    name: 'jerry',
    age: 30
  })
} 

export default class Children extends Component {
  render() {

    const Fetcher = props => {
      const user = api[props.name]()
      return props.children(user)
    }
    
    return (
      <div>
        <div className="placeholder">
          其他内容
        </div>
        <Fetcher name="getUser">
          {
            // 这样相当于是访问到了父组件中的数据
            ({name, age}) => (
              <p>
                {name} - {age}
              </p>
            )
          }
        </Fetcher>
        <div className="placeholder">
          其他内容
        </div>

        
      </div>
    )
  }
}
