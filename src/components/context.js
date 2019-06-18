import React, { Component } from 'react'

// 1. 创建上下文
const context = React.createContext();
const store = {
  name: '开课吧111',
  sayHi() {
    console.log(this.name)
  }
}

export default class ContextSample extends Component {
  render() {
    return (
      <div>
        {/* 最外层使用Provider包围 */}
        {/* 传入的值必须是value，是固定写法 */}
        <context.Provider value={store}>
          <div>
            {/* 跨层级 */}
            {/* 获取数据 */}
            {/* 在内嵌的某一个层级中需要用到值的时候定义一个Consumer传进来 */}
            <context.Consumer>
              {/* 必须内嵌一个函数 */}
              {
                // 这里是形参 名称随便写 值就是provider传进来的值
                cast => <div onClick={()=>cast.sayHi()}>{cast.name}</div>
              }
            </context.Consumer>
          </div>
        </context.Provider>
      </div>
    )
  }
}
