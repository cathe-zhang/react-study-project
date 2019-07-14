// 原生redux实现

import React, { Component } from 'react'
import store from '../store'

export default class ReduxTest extends Component {
	render() {
		return (
			<div>
				{store.getState()}
				<button 
					onClick={()=>store.dispatch({
						type: 'minus'
					})}
				>
					-
				</button>
				<button
					onClick={()=>store.dispatch({
						type: 'add'
					})}
				>
					+
				</button>
			</div>
		)
	}
}
