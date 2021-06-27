// 这是项目的根组件;
import React from 'react';
// 导入路由1组件;
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
// 导入组件
import Home from './pages/Home/Home.js';
import Movie from './pages/Movie/Movie.js';
import About from './pages/About/About.js';
import   './css/App.css';
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;



export default class App extends React.Component {
constructor() {
  super()
  this.state = {}
}
// react 生命周期 组件将要被挂载，此时虚拟dom树还没有创建
componentWillMount() {
  // 这是获取路由的路径
  // console.log(window.location.pathname);
}
render() {
  return (
    <Router>
    <div className="App" style={{height: '100%'}}>
    <Layout className="layout" style={{height: '100%'}}>
      {/* 头部 */}
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[window.location.pathname]}>
         <Menu.Item key={'/home'}><Link to="/home">首页</Link></Menu.Item>
         <Menu.Item key={'/movie/in_theaters/1'}><Link to="/movie/in_theaters/1">电影</Link></Menu.Item>
         <Menu.Item key={'/about'}><Link to="/about">关于</Link></Menu.Item>
      </Menu>
    </Header>
    {/* 内容区域 */}
    <Content style={{ padding: '0', flex: 1, height: '100%' }}>
      <div className="site-layout-content">
        {/* 路由匹配规则 */}
        <Route path="/home" component={Home}></Route>
        <Route path="/movie" component={Movie}></Route>
        <Route path="/about" component={About}></Route>
      </div>
    </Content>
    {/* 尾部 */}
    <Footer style={{ textAlign: 'center', position: 'fixed', bottom: 0, width: '100%' }}>豆瓣电影</Footer>
  </Layout>

    </div>
    </Router>
  );
}
}


