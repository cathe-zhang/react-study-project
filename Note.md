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
```
```

学习至1：10