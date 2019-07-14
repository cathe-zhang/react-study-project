// 原生redux实现

import { 
	createStore,  // 创建数据
	applyMiddleware,   // 应用中间件 是一个函数
	combineReducers
} from 'redux'
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'

import couter from './couter.redux'
import user from './user.redux'

export default createStore(
	combineReducers({     // 在不同的文件中操作不同的数据 模块化
		couter,
		user
	}),
	applyMiddleware(   // applyMiddleware是有执行顺序的，先传入的先执行
		logger,
		ReduxThunk
	)    
)