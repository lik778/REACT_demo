import React from 'react'
import {connect} from 'react-redux'
import { Button } from 'antd';
 class MovieDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentWillMount() {
    console.log(this.props);

    // 从 redux的 store 中获取数据
  }
  render() {
    return <div style={{padding: '10px'}}>
      <Button type="primary" onClick={() => this.clickGo()}> {'<'}返回 </Button>
      <div style={{textAlign: 'center'}}>
        <h3>电影图片</h3>
        <img src="" alt="" />
        <p></p>
      </div>
    </div>
  }
  // 点击返回
  clickGo() {
    this.props.history.go(-1)
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return state
}
export default connect(mapStateToProps)(MovieDetail)