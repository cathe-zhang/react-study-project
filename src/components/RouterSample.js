import React, { Component } from 'react'
import { connect, Provider } from 'react-redux'
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom'
import { asyncLogin } from './../store/user.redux'
import store from './../store/index'


const Home = props => {
  console.log('home props', props);
  
  return (
    <div>
      home
      <ul>
        <li>
          <Link to="/detail/web">web</Link>
        </li>
        <li>
          <Link to="/detail/python">python</Link>
        </li>
        <li>
          <Link to="/detail/java">java</Link>
        </li>
      </ul>
    </div>
  )
}

const About = props => {
  return (
    <div>
      <h2>个人中心</h2>
      <ul>
        <li>
          <Link to="/about/userInfo">个人信息</Link>
        </li>
        <li>
          <Link to="/about/order">订单</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/about/userInfo" component={UserInfo}></Route>
        <Route path="/about/order" component={Order}></Route>
        {/* 重定向 如果前面的路由都没有匹配到 则重定向到指定的路由 */}
        <Redirect to="/about/userInfo" />
      </Switch>
    </div>
  )
}


// 路由守卫：定义可以验证的高阶组件
@connect(
  state=>({user: state.user}),
)
class PrivateRoute extends Component {
  render() {
    const { user } = this.props
    return (
      <Route {...this.props}     // 继承父组件的props
        render={    // render是实现验证的关键 和component是二选一的
          props => user.isLogin ? <Component {...this.props} /> : <Redirect to={{
              pathname: '/login',
              state: {
                from: props.location.pathname
              }
            }} />
          }
      >
  
      </Route>
    )
  }
}

@connect(
  state => ({user: state.user}),
  {asyncLogin}
)
class Login extends Component {

  state = {}
  
  render() {
    console.log('login props', this.props);
    
    const from = this.props.location.state.from || ''
    const { user, asyncLogin } = this.props
    return (
      // 已登陆则直接跳转来源页面
      user.isLogin ?
      <Redirect to={from} />
      :
      <button
        onClick={asyncLogin}
      >
        登录
      </button>
    )
  }


}

const UserInfo = props => {
  return (
    <div>个人信息</div>
  )
}

const Order = props => {
  return (
    <div>订单</div>
  )
}

const Detail = ({match, history, location}) => {
  console.log(match, history, location);
  // match 参数获取等路由信息
  // history-导航
  // loation-url定位
  return (
    <div>
      {match.params.course}
      <button onClick={history.goBack}>后退</button>
      <button onClick={()=>history.push({
        pathname: '/',
        state: {
          foo: 'bar'
        }
      })}>回到首页</button>
    </div>
  )
}

const NoMatch = prop => {
  return (
    <div>notfound</div>
  )
}

const App = props => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/foo">foo</Link>
        </li>
      </ul>
      {/* 路由的配置直接写到页面中 */}

      {/* 用switch包起来则只会匹配一个 所以用switch就不需要用exact */}
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <PrivateRoute path="/about" component={About} />
        <Route path="/detail/:course" component={Detail}></Route>
        {
          console.log('1111111',Login)
          
        }
        <Route path="/login" component={Login}></Route>
        <Route component={NoMatch}></Route>   {/* 404 不指定path属性一定会匹配到 */}
      </Switch>
    </div>
  )
}

export default class RouterSample extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    )
  }
}
