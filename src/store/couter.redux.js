// 所有couter相关的操作都在一个文件中

const initialState = {
	num: 0,
}

// reducer - 具体状态修改的执行者
const couterReducer = (state = initialState, action) => {
  switch (action.type) {
		case 'add':
			console.log(11111)
			return  {
				...state,
				num: state.num + 1
			}

		case 'minus':
		return  {
			...state,
			num: state.num - 1
		}
	
		default:
			return state;
	}
}

const add = () => ({     // 称之为action creator, action的创建者
  type: 'add',
})

const minus = () => ({
  type: 'minus'
})

const asyncAdd = () => {   // 本身是一个函数，返回一个参数为dispatch的函数
  return (dispatch, getState) => {   // 两个参数 第一个dispatch 第二个getState方法 getState()可以获取到之前的状态 在下面可以根据之前的状态做一些额外的操作
    // 正常的action返回的是一个对象，如上面的end，而使用redux-thunk 可以返回一个函数，在异步操作执行过后再调用action
    console.log('getState()',getState());
    
    setTimeout(() => {    // 模拟异步操作
      dispatch({
        type: 'add',
      })
    }, 1000);
    // 不同于直接调用action的方式 只有一步那就是直接调用action 在这种情况下，第一步是调用这个函数，第二步才是异步操作结束之后调用action
  } 
}

export default couterReducer
export {
  add,
  minus,
  asyncAdd
}
