import React, { PureComponent } from 'react';
import { ListItem,ListInfo,ListFooter,ListMore} from '../style';
import {connect} from 'react-redux'
import {changHomeList} from '../store/actionCreators'
import {Link} from 'react-router-dom'
 class List extends PureComponent {
  getInfoList(){
    const {articleList} = this.props;
    const newArticleList = articleList.toJS();
    const newList = []
    if(newArticleList.length)
    {
       newArticleList.map((item,index)=>{
          newList.push(
        <ListItem key={index}>
        <img className="img-pic" src={item.imgUrl} alt='' />
        <ListInfo>
          <Link to={'./detail/'+item.id}>
          <h3 className="title">{item.title}}</h3>
          </Link>
          <p className="desc">
            {item.desc}
          </p>
        </ListInfo>
        <ListFooter>
            <span className="nickname">巴塞电影</span>
            <span className="messageNum">7</span>
            <span className="likeNum">33</span>
        </ListFooter>
      </ListItem>
          )
       })
    }
    return newList;
  }
	render() {
    const {page,getMoreList} = this.props;
		return (
			<div>
        {this.getInfoList()}
        <ListItem>
					<img className="img-pic" src="//upload-images.jianshu.io/upload_images/2836595-5ffe8cd282adbaa5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" alt='' />
					<ListInfo>
						<h3 className="title">你好啊，我的21岁</h3>
						<p className="desc">
							我真的实在不想承认自己已经21岁了，因为这预示着我离跳广场舞的年纪越来越近了，在这个尴尬的年纪里，我在心里默默告诉自己：巴拉拉能量，乌卡拉卡，我...
						</p>
					</ListInfo>
          <ListFooter>
              <span className="nickname">巴塞电影</span>
              <span className="messageNum">7</span>
              <span className="likeNum">33</span>
          </ListFooter>
				</ListItem>
        <ListMore onClick={()=>{getMoreList(page)}}>点击加载更多</ListMore>
			</div>
		);
	}
}

const mapStateToProps = (state)=>{
   return{
    articleList:state.getIn(['home','articleList']),
    page:state.getIn(['home','page'])
   }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    getMoreList(page){
       const action = changHomeList(page);
       dispatch(action);
    }

  }
}




export default connect(mapStateToProps,mapDispatchToProps)(List) 


