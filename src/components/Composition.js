// 组件复合

import React, { Component } from 'react';

// Dialog
function Dialog (props) {
  return (
    <div style={{border: `4px solid ${props.color || 'blue'}`}}>
      {props.children}
      <div className="footer">{props.footer}</div>
    </div>
  )
}

function WelComeDialog() {
  const confirmBtn = <button onClick={()=>alert('react is very good.')}>确定</button>
  return  (
    <Dialog color="green"
      footer={confirmBtn}
    >
      <p>欢迎使用react</p>
    </Dialog>
  )
}

class Composition extends Component {
  render() {
    return (
      <WelComeDialog/>
    );
  }
}

export default Composition;
