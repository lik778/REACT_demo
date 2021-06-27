import React from 'react'
// 使用fetch-jsonp 解决跨域请求 fetch 本身不支持跨域
import fetchJSONP from 'fetch-jsonp'
import {connect} from 'react-redux'
import { Spin, Alert } from 'antd';
import { Pagination } from 'antd';
import MovieItem from './MovieItem.js'
// import Home from '../Home/Home.js'
 class MovieList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      movie: [],
      // 这是当前页码
      nowpage: this.props.match.params.id || 1,
      // 这是每个页存放多少数据
      pagesize: 12,
      // 这是获取路由中的地址
      address: this.props.location.pathname.split('/')[2],
      item: {}
    }
  }
  componentWillMount() {
    console.log(this.props);
    // 发起请求获取数据 通过 es6 提供的 fetch 来发起请求
    this.fetchGetMovieList()
    console.log(this.props)
    console.log(this.props.location.pathname.split('/')[2]);
  }
  render() {
    return <div>
      {this.getisLoading()}
    </div>
  }
  getisLoading() {
    if (this.state.isLoading) {
      return<Spin tip="Loading...">
      <Alert
        message="正在请求电影列表"
        description="精彩内容马上呈现..............."
        type="info"
      />
    </Spin>
    }else {
      return <div >
        <div  style={{ display: 'flex', flexWrap: 'wrap' }}>
        {this.state.movie.map((item,i) => {
          return <div key={i} onClick={() => this.Detail(item)}><MovieItem {...item} key={i}></MovieItem></div>
        })}
        </div>
        <Pagination defaultCurrent={1} pageSize={this.state.pagesize} total={500}  onChange={(page) => this.changepage(page)} />
      </div>
    }
  }
  // 封装的新片电影
  async fetchGetMovieList() {
    // fetchJSONP('http://api.douban.com/v2/movie/new_movies?apikey=0df993c66c0c636e29ecbb5344252a4a')
    // .then(response => response.json())
    // .then(data => {
    //   this.setState({
    //     movie: data.subjects,
    //     isLoading: false
    //   })
    // })
    try {
    let response = await fetchJSONP('http://api.douban.com/v2/movie/new_movies?apikey=0df993c66c0c636e29ecbb5344252a4a')
     let data =  await response.json()
     this.setState({
      movie: data.subjects,
      isLoading: false
    })
   }catch(err) {
       console.log('request fail' , err)
   }
  }
  // 页码改变触发的函数
  changepage(page) {
    // console.log(page);
    // 使用编程时导航改变路由
    // vue 中是 vue-router('/地址')
    // react 中是 this.props.history.push(地址)
    this.props.history.push(`/movie/${this.state.address}/${page}`)
  }
  // 每个电影的点击事件，跳转路由

  Detail(item) {
    // 编程式导航
    console.log(item);
    // 发送dispatch 将数据传递到reducer 里面
    
   this.setState({
      item: item
    })
    this.props.history["item"] = this.state.item
    this.props.location["item"] = this.state.item
    this.props.sendAction()
    this.props.history.push(`/movie/detail/${item.id}`)
  }
}


const mapDispatchToProps = (dispatch,ownProps) => {
  // console.log(ownProps)
  console.log(MovieList.constructor().state)
  return {
    sendAction: () => {
      dispatch({
        type: 'send_item',
        // 这个位位置应该存放的是当前item
        value: 1
      })
    }
  }
}
export default connect(null,mapDispatchToProps)(MovieList)