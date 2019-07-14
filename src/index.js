import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import LifeCycle from './LifeCycle'
import State from './State'
import CommentList from './components/commentList';
import Composition from './components/Composition';
import Hoc from './components/HOC'
import Context from './components/context';
// import KFormSample from './components/KFormTest';
import WrappedNormalLoginForm from './components/AntdTest'
import KFormSample from './components/KFormSample'
// import ReduxTest from './components/ReduxTest'
import ReduxTest from './components/ReduxTest.1'
import Children from './components/Children'
import ChildrenFilter from './components/ChildrenFilter'

import store from './store/index'
import RouterSample from './components/RouterSample'

import { Provider } from 'react-redux'

import './../node_modules/antd/dist/antd.css';

// ReactDOM.render(
//   // <App/>,
//   // <CommentList />,
//   // <Composition />,
//   // <Hoc level="react" />,
//   // <Context />,
//   // <KFormSample />,
//   // <State/>,
//   // <KFormSample />,
//   <ReduxTest/>,
//   document.getElementById('root')
// )

// let someProp = 'somevalue'

// 动态渲染
// function tick() {
//   ReactDOM.render(<h2>{new Date().toLocaleTimeString()}</h2>,
//     document.getElementById('root'))
// }

// // 每隔一秒执行一次tick函数，调用一次render
// setInterval(() => {
//   tick()
// }, 1000);

// // subscribe只有state改变才会触发 所以初始化的时候需要执行一次渲染
// ReactDOM.render(
//   <ReduxTest/>,
//   document.getElementById('root')
// )
// // 原生redux实现
// // store订阅 绑定store和组件 否则action无法起效
// // 每次store变化时执行传入的函数
// store.subscribe(()=>{
//   ReactDOM.render(
//     <ReduxTest/>,
//     document.getElementById('root')
//   )
// })

// react-redux实现 可支持原生的组件和store写法
ReactDOM.render(
  // <Provider store={store}>
    <RouterSample/>,
  // </Provider>,
  document.getElementById('root')
)