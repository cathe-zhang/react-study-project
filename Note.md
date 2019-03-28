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
基本原则：容器组件(业务组件)负责数据获取，有很重的业务逻辑在其中；展示组件负责根据props进行数据展示。

shouldComponentUpdate
想要利用PureComponent的特性的原则：
- 确保数据类型是值类型  JSON.stringify可以做到，但是这个方法本身也是耗费性能
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
- 如果是引用类型，确保地址不变，同时不应当有深层次的数据变化

> 解构是浅拷贝

PureComponent react15之后新增的特性， 实现了一个预定义的比较方式  原理理解

React.memo 高阶组件 传入一个组件


#### 组件复合而非组件继承
- 不使用继承，没有复合解决不了只有继承才能解决的问题  composition.js   一切皆组件  props.children

#### 保证组件功能单一性


### HOC Higher-Order Components 高阶组件   Hoc.js   
高阶组件其实是函数，接收一个组件，返回另外一个组件，产生新的组件可以对属性进行包装，也可以重写部分生命周期。
如下：
```js
// 本身的组件是不具备PureComponent组件的能力，使用React.memo包装之后使得原组件具备了PureComponent能力，所以React.memo是一个高阶组件。
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



