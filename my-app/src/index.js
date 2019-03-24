import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import LifeCycle from './LifeCycle'
import State from './State'

ReactDOM.render(
  // <App/>,
  <State/>,
  document.getElementById('root')
)

let someProp = 'somevalue'

// 动态渲染
function tick() {
  ReactDOM.render(<h2>{new Date().toLocaleTimeString()}</h2>,
    document.getElementById('root'))
}

// // 每隔一秒执行一次tick函数，调用一次render
// setInterval(() => {
//   tick()
// }, 1000);