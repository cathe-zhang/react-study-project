import React, { Component, PureComponent } from 'react';

// function Comment ( {author, body} ) {
//   return (
//     <div>
//       <p>作者：{author}</p>
//       <p>内容：{body}</p>
//     </div>
//   )
// }

// class Comment extends PureComponent {

//   // shouldComponentUpdate(nextProps, nextState) {
//   //   if ( nextProps.data.body ===  this.props.data.body && 
//   //        nextProps.data.author ===  this.props.data.author  ) {
//   //     return false
//   //   }
//   //   return true
//   // }
  
  
//   render(){
//     // const { data } = this.props
//     const { author, body } = this.props
//     console.log('render')
//     return (
//       <div>
//         <p>作者：{author}</p>
//         <p>内容：{body}</p>
//       </div>
//     )
//   }
// }


// 高阶组件
const Comment = React.memo( ({author, body}) => {
  console.log('render')
  return (
    <div>
      <p>作者：{author}</p>
      <p>内容：{body}</p>
    </div>
  )
})



class CommentList extends Component {

  constructor(props) {
    super(props)
    this.state = {
       comments: []
    }
  }

  componentDidMount(){
    setInterval(() => {
      this.setState({
        comments: [
          {
            body: 'react is very good.',
            author: 'facebook'
          },
          {
            body: 'vue is very good.',
            author: 'evan you'
          }
        ]
      })
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // if ( nextState.comments === nextState.comments ) {
    //   return false
    // }
    return true
  }
  
  
  render() {
    // console.log('render')
    const { comments } = this.state
    return (
      <div>
        {
          comments.map((e,i)=>(
            <Comment
              key={i}
              // data={e}
              // body={e.body}
              // author={e.author}
              {...e}   // 相当于分别传入body和author
            />
          ))
        }
      </div>
    );
  }
}

export default CommentList;
