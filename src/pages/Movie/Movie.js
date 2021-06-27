import React from 'react'
import {Provider} from 'react-redux'
import store from '../../Store/Store.js'
// 导入路由
import {
  BrowserRouter as Router,
  Switch, // 控制路由匹配的优先级，先去匹配第一个。
  Route,
  Link
} from "react-router-dom";
import { Layout, Menu } from 'antd';
//导入组件
import MovieList from './MovieList.js'
import MovieDetail from './MovieDetail.js'
import { white } from 'chalk';

const { Content, Sider } = Layout;
export default class Movie extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return <Router><div className="movie" style={{height: '100%'}}>
      <Provider store={store}>
    <Layout style={{height: '100%'}}>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ height: '100%', border: 0}}
        > 
            <Menu.Item key="1"><Link to="/movie/in_theaters/1">正在热映</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/movie/coming_soon/1">即将上映</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/movie/top250/1">Top250</Link></Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ paddingLeft: '1px', backgroundColor: '#fff' }}>
        <Content
          className="site-layout-background"
          style={{
            paddingBottom: 70,
            margin: 0,
            minHeight: 280,
            backgoundColor: white
          }}
        >
          {/* 路由匹配规则 */}
          {/* Switch控制路由匹配的优先级，先去匹配第一个。匹成功后，后面的将不在匹配 */}
          <Switch> 
          <Route path="/movie/detail/:id" component={MovieDetail}></Route>
          <Route path="/movie/:type/:id" component={MovieList}></Route>
          </Switch>
        </Content>
      </Layout>
    </Layout>
  </Layout>
  </Provider>
    </div>
    </Router>
  }
}