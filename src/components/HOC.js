import React, { Component } from 'react';

// 高阶组件 使得组件具有日志记录的功能
const withLog = Comp => {
  // console.log(Comp.name+'渲染了')
  return props => <Comp {...props} />
}

// 高阶函数装饰器写法 可以多次使用
@withLog
@withName   
// @withLog
class kaikeba extends Component {
  render() {
    return (
      <div>{this.props.level} - {this.props.name}</div>
    )
  }
}

// 高阶组件
function withName(Comp) {

  // 甚至可以重写组件的生命周期
  class NewComponent extends Component {
    componentDidMount(){
      console.log('do something.')
      // 可以在这里请求 比如获取属性
    }
    render(){
      return <Comp {...this.props} name="高阶组件使用介绍" />
    }
  }
  
  // 假设通过某种特殊手段获取了本节课的名称 假设是从ajax获取的
  // return props => <Comp {...props} name="高阶组件使用介绍" />
  return NewComponent
}

// class Hoc extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     );
//   }
// }



export default withLog(withName(kaikeba))  // 链式调用
