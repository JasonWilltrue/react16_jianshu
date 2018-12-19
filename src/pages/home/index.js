import React, { PureComponent } from 'react';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import DownloadApp from './components/DownloadApp';
import { connect } from 'react-redux';
import { getTopList, toggleTopShow } from './store/actionCreators';

class Home extends PureComponent {
	componentDidMount() {
		this.props.handleGetTopList();
		this.bindEvent();
  }
  
  /**
   * 必须注意组件卸载的是监听解绑，全局组件不会影响其他组件
   */
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.props.changeScoll);
  }
	bindEvent() {
		window.addEventListener('scroll', this.props.changeScoll);
	}
	handelScollTop() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<div>
				<HomeWrapper>
					<HomeLeft>
						<img
							className="banner-img"
							src="//upload.jianshu.io/admin_banners/web_images/4338/8e2a58455e68291fd10f2a926ed793a016a66e2e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
							alt=""
						/>
						<Topic />
						<List />
					</HomeLeft>
					<HomeRight>
						<Recommend />
						<DownloadApp />
						<Writer />
					</HomeRight>
					{this.props.showScoll ? <BackTop onClick={this.handelScollTop}>↑顶部</BackTop> : null}
				</HomeWrapper>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		showScoll: state.getIn(['home', 'showScoll']),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleGetTopList: () => {
			const action = getTopList();
			dispatch(action);
		},
		changeScoll() {
			console.log(document.documentElement.scrollTop);
			if (document.documentElement.scrollTop > 400) {
				dispatch(toggleTopShow(true));
			} else {
				dispatch(toggleTopShow(false));
			}
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
