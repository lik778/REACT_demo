import React from 'react'
import { Rate } from 'antd';
import '../../css/movieitem.css'
export default class MovieItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentWillMount() {
    // console.log(this.props);
    // console.log(this.props.images.small);
  }
  render() {
    return <div className="movieitem">
      <img src={'https://images.weserv.nl/?url=' + this.props.images.small} alt="" />
      <h5>电影名称：{this.props.title}</h5>
      <h5>上映时间：{this.props.year}</h5>
      <h5>电影类型：{this.props.genres}</h5>
      <Rate disabled defaultValue={this.props.rating.average / 2} />
    </div>
  }
}