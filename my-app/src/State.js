import React, { Component } from 'react'

export default class State extends Component {

  constructor(props){
    super(props)
    this.state = {
      goodsList: [
        {
          id: 1,
          price: 10,
        },
        {
          id: 2,
          price: 12,
        },
      ]
    }
  }

  componentDidMount(){

  }

  addItemToCart = ( id ) => {
    // 优雅的寻找item方式
    const goodsList = [...this.state.goodsList]
    const index = goodsList.findIndex(item=>item.id===id)
    const item = goodsList[index]
  }

  addCart = () => {
    this.setState(prevState=>{
      if ( prevState.goodsList.length > 5 ) {
        alert('数量大于5，不要再加了')
        prevState.goodsList.forEach(item=>{
          item.id = 10
        })
        return {
          goodsList: [...prevState.goodsList, {
            id: 3,
            price: 1
          }]
        }
      }
      return {
        goodsList: [...prevState.goodsList, {
          id: 3,
          price: 20
        }]
      }
    })
  }
  
  render() {
    return (
      <div>
        {
          this.state.goodsList.map((item,index)=>{
            return (
              <div key={index} >
                商品id: {item.id}, 价格：{item.price}
              </div>
            )
          })
        }
        <button onClick={this.addCart} >添加购物车</button>
      </div>
    )
  }
}
