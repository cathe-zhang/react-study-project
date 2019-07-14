import React, { Component } from 'react'

function FilterP(props) {
  return (
    <div>
      哈哈哈
      {
        console.log(React.Children, props.children)
        
      }
      {
        // React.children提供了若干操作嵌套内容的帮助方法
        React.Children.map(props.children, child => {
          console.log(child);   // 虚拟dom
          if ( child.type !== 'p' ) {  // 非p标签不渲染
            return null
          }
          return child
        })
      }
    </div>
  )
}

function RadioGroup(props) {
  return (
    <div>
      {
        React.Children.map(props.children, child=>{
          return (
            React.cloneElement(child, {
              name: props.name     // React.cloneElement可以扩展属性
            })
          )
        })
      }
    </div>
  )
}

function Radio({children, ...rest}) {  // 对props进行解构 下面可以使用到父组件传过来的所有其他属性 而不需要一个一个声明
  return (
    <div>
      <input type="radio" {...rest} /> 
      {children}
    </div>
  )
}

export default class ChildrenFilter extends Component {

  state = {}

  componentDidMount() {}
  
  render() {

    
    
    return (
      <div>
        <FilterP>
          <h1>React</h1>
          <p>react最棒</p>
          <h1>vue</h1>
          <p>vue也很棒啊</p>
        </FilterP>

        <RadioGroup name='mvvm'>
          <Radio value='react'>react</Radio>
          <Radio value='vue'>vue</Radio>
          <Radio value='angular'>angular</Radio>
        </RadioGroup>
      </div>
    )
  }
}
