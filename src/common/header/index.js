import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { logout } from '../../pages/login/store/actionCreators';

import { Link } from 'react-router-dom';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	NavSearch,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
	Addition,
	Button,
	Avatar,
} from './style';

class Header extends Component {
	getListArea() {
		const {
			focused,
			list,
			page,
			totalPage,
			mouseIn,
			handleMouseEnter,
			handleMouseLeave,
			handleChangePage,
		} = this.props;
		const newList = list.toJS();
		const pageList = [];
		//判断是否有数组才渲染
		if (newList.length) {
			for (let i = (page - 1) * 10; i < page * 10; i++) {
				pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>);
			}
		}

		if (focused || mouseIn) {
			return (
				<SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
							<i
								ref={icon => {
									this.spinIcon = icon;
								}}
								className="iconfont spin"
							>
								&#xe851;
							</i>
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>{pageList}</SearchInfoList>
				</SearchInfo>
			);
		} else {
			return null;
		}
	}

	render() {
		const { focused, handleInputFocus, handleInputBlur, list, login } = this.props;
		return (
			<HeaderWrapper>
				<Link to="./">
					<Logo />
				</Link>
				<Nav>
					{login ? (
						<Fragment>
							<NavItem className="left active">发现</NavItem>
							<NavItem className="left">关注</NavItem>
							<NavItem className="left">消息</NavItem>
						</Fragment>
					) : (
						<Fragment>
							<Link to="./">
								<NavItem className="left active">首页</NavItem>
							</Link>
							<NavItem className="left">下载App</NavItem>
						</Fragment>
					)}
					{login ? (
						<Avatar className="right">
							<img
								class="avatar-img"
								src="//upload.jianshu.io/users/upload_avatars/318740/04a826f4ddff.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"
								alt=""
							/>
						</Avatar>
					) : (
						<Link to="./login">
							<NavItem className="right">登陆</NavItem>
						</Link>
					)}
					<NavItem className="right">
						<i className="iconfont">&#xe636;</i>
					</NavItem>
					<SearchWrapper>
						<CSSTransition in={focused} timeout={200} classNames="slide">
							<NavSearch
								className={focused ? 'focused' : ''}
								onFocus={() => handleInputFocus(list)}
								onBlur={handleInputBlur}
							/>
						</CSSTransition>
						<i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe614;</i>
						{this.getListArea()}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Link to="/write">
						<Button className="writting">
							<i className="iconfont">&#xe615;</i>
							写文章
						</Button>
					</Link>
					{login ? null : (
						<Link to="./register">
							<Button className="reg">注册</Button>
						</Link>
					)}
				</Addition>
			</HeaderWrapper>
		);
	}
}

const mapStateToProps = state => {
	return {
		//getin[哪个分支reducer，分支上的数据字段]
		focused: state.getIn(['header', 'focused']),
		list: state.getIn(['header', 'list']),
		page: state.getIn(['header', 'page']),
		totalPage: state.getIn(['header', 'totalPage']),
		mouseIn: state.getIn(['header', 'mouseIn']),
		login: state.getIn(['login', 'isLogin']),
	};
};

const mapDispathToProps = dispatch => {
	return {
		//请求只发一次
		handleInputFocus(list) {
			list.size === 0 && dispatch(actionCreators.getList());
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		},
		handleMouseEnter() {
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave());
		},
		handleChangePage(page, totalPage, spin) {
			//==========换一批旋转样式==============
			console.log(spin);
			//获取上次旋转的角度
			console.log(spin.style.transform);
			let originAngle = spin.style.transform.replace(/[^0-9]/gi, '');
			if (originAngle) {
				originAngle = Number(originAngle);
			} else {
				originAngle = 0;
			}
			spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
			//==========换一页的判断==============
			if (page < totalPage) {
				dispatch(actionCreators.changePage(page + 1));
			} else {
				dispatch(actionCreators.changePage(1));
			}
		},
		logout() {
			dispatch(logout());
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispathToProps
)(Header);
