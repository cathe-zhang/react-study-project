const initialState = {
  isLogin: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'login':
    return { 
      ...state,
      isLogin: true
    }

  default:
    return state
  }
}


export const asyncLogin = () => {
  return (dispatch) => {
    // mock异步登录
    setTimeout(() => {
      dispatch({
        type: 'login'
      })
    }, 1000);
  }
}