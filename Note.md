# react

- 了解createElement的工作方式
- 有状态组件(需要用到state, 需要用到生命周期)用class型，无状态组件(只关心展示)用function型
- 需要状态时，需要构造函数
- 不要直接修改state
```js
// bad
this.setState({
  count: this.state.count + 1
})
// good
this.setState((prevState, prevProps)=>{
  return {   // 注意这是一个方法，需要返回值
    count: prevState.count + 1
  }
})
```
- 定时器会占据内存，组件卸载时要清除
- 数组push数据更优雅的写法
```js
this.setState(prevState=>{
  // 这里可以对prevState做数据处理
  return {
    goodsList: [...prevState, {
      id: 1,
      price: '123'
    }]
  }
})
```
- 为什么展示一定要用map方法而不用其他的
- 优雅的寻找购物车item方法
```js
const goodsList =[...this.state.goodsList]
const index = goodsList.findIndex(item=>item.id===id)
const item = goodsList[index]
```
- diff算法




### 第二节

```
npm install react-app-rewired@2.0.2-next.0 babel-plugin-import --save
```
react-app-rewired可以扩展webpack的配置，类似vue.config.js
babel-plugin-import  实现import导入

在根目录创建文件 config-overrides.js  // 固定名称，不要写错（否则启动命令会无法执行）  react-app在启动时会先读取此文件，与webpack的配置进行整合。

injectBabelPlugin插件 config.overrides.js

使用react-app-rewired启动项目：在package.json中添加命令： "start": "react-app-rewired " 使用此命令的前提是存在config.overrides.js文件

具名导入 import { Button } from 'antd-mobile'


#### 容器组件 VS 展示组件  (智能组件，木偶组件)
基本原则：容器组件(业务组件)负责数据获取，具体逻辑，有很重的业务逻辑在其中，复用性低；展示组件负责根据props进行数据展示，复用性高。

componentWillMount有可能被移除

shouldComponentUpdate
想要利用PureComponent的特性的原则：
- 确保数据类型是值类型  JSON.stringify可以做到，但是这个方法本身也是耗费性能
- 如果是引用类型，确保地址不变，同时不应当有深层次的数据变化
```javascript
<Comment
  key={i}
  // data={e}  // 不传入对象，而是传入值类型
  body={e.body}
  author={e.author}
/>
<Comment
  key={i}
  // data={e}
  // body={e.body}
  // author={e.author}
  {...e}   // 相当于分别传入body和author 与前一种写法相同
/>
```

> 解构是浅拷贝

PureComponent react15之后新增的特性， 实现了一个预定义的比较方式  原理理解

React.memo 高阶组件 传入一个组件

rfc 创建函数组件快捷键

#### 组件复合而非组件继承
- 不使用继承，没有复合解决不了只有继承才能解决的问题  composition.js   一切皆组件  props.children

#### 保证组件功能单一性


### HOC Higher-Order Components 高阶组件   Hoc.js   
高阶组件其实是函数，接收一个组件，返回另外一个组件，产生新的组件可以对属性进行包装，也可以重写部分生命周期。
如下：
```js
// 本身函数组件不具备PureComponent组件的能力，使用React.memo包装之后使得原组件具备了PureComponent能力，所以React.memo是一个高阶组件。
const Comment = React.memo( ({author, body}) => {
  console.log('render')
  return (
    <div>
      <p>作者：{author}</p>
      <p>内容：{body}</p>
    </div>
  )
})
```
对组件功能进行扩展时，高阶组件是不二法则。   connect就是高阶组件

高阶组件的链式调用

高阶组件装饰器写法（ES7特性）  可以用装饰器的方式来执行函数  
> 这里要注意这样写会无法启动，找不到原因   .0 is not a valid Plugin property
```
npm install --save-dev babel-plugin-transform-decorators-legacy  // 支持装饰器写法
// config.overrides.js
config = injectBabelPlugin([  
    ['@babel/plugin-proposal-decorators', {"legacy": true}]
  ],config)
```






注解就是一个工厂函数。 @withLog 给一个组件，返回一个组件




### 组件通信 --- 上下文
vuejs的provide&inject模式的来源  --- context


这种模式下有两个角色，一个是Provider, 一个是Consumer







Object.create方法（课外）


React的未来
 fiber

思考createContext是怎么实现的


# lesson3

react状态提升

react组件涉及思路：逻辑处理尽量往高层级提，低层级组件只管展示

截止 37min

#### redux

纯函数的定义：传递一个值，返回的值一定是可预测的

redux中的角色：
- Store: 状态载体，访问状态、提交状态更新、监听状态变更
- Reducer: 状态更新具体执行者，纯函数
- Action： 存放数据的对象，即消息的载体，只能被别人操作，自己不能进行任何操作

react-redux connect用法 参数 原理

mobx与redux比较
- 学习难度 redux > mobx
- 工作量 redux > mobx
- 内存开销 redux > mobx
- 状态管理的集中性 redux > mobx
- 样板代码的必要性 redux > mobx
- 结论：使用mobx入门简单，构建应用迅速，但是当项目足够大的时候，还是使用redux; 如果使用mobx最好使用严格模式，再加上一套状态管理的规范（防止自由代码导致的不必要的问题代码）

redux需要中间件才能支持请求等异步功能 vuex和mobx都不需要


props.children

children可以是任意一个表达式 不仅仅是jsx 还可以是一个函数

```

```

其实 Children组件的实现就是Context api的实现原理

比较context api与children


##### React.Children
- 提供了若干操作嵌套内容的帮助方法

实现过滤children中的p标签，只展示p标签的功能  （ChildrenFilter组件）

React.cloneElement可以扩展已有组件的属性




原生input:radio的实现原理  与使用方式

### 节点记录

27:17  chilren结束 redux未开始

---

redux中间件  action在到达store之前有一个中间件层 可以进行一些额外的操作

常用中间件：
- redux-thunk 用来实现redux中的异步处理 核心思想：reducer中本身是不能进行异步操作的(可以联想到现在taro项目中的dva流程)，在中间件中实现异步操作是redux-thunk的核心思想
- redux-logger 在中间件中进行每一次操作时进行日志记录

yarn add redux-thunk redux-logger -S


applyMiddleware是有执行顺序的，先传入的先执行


所有的action的type应该常量保存起来，便于以后修改和维护

思考：其实完全可以在异步操作执行完了之后再去调用action，不需要使用redux-thunk,但是这样的话，组件中就会混淆特别多的业务逻辑，就算抽离方法也会显得特别多余，不利于维护

redux-sage是比redux-thunk更好的解决方案

数据需要放到redux中吗？ 如果需要跨组件共享的公共数据，如用户信息，就需要使用redux


#### 路由

reacr-router-dom是针对于h5浏览器端的 是react-router的一部分 我们只需要react-router-dom
yarn add react-router-dom -S

https://reacttraining.com/react-router/web/guides/quick-start

react-router4的特点：
1. 路由也是组件
2. 分布式配置
3. 包含式匹配

路由守卫（只有登录才能看到）RouteSample.js

react-redux原理