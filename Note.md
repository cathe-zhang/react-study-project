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
const index = goodsList.findInde(item=>item.id===id)
const item = goodsList[index]
```
- diff算法

学习至1：10