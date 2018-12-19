import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	LoginWrapper,
	LoginBox,
	LoginHearder,
	LoginForm,
	Input,
	LoginItem,
	LoginTips,
	TipsLfet,
	TipsRight,
	LoginButton,
	MoreSign,
	MoreLogin,
	MoreTitle,
} from './style';
import { Link } from 'react-router-dom';
import { loginOnClick } from '../login/store/actionCreators';
import {Redirect} from 'react-router-dom';
class Login extends Component {
	render() {
		const { handleLogin, login } = this.props;
		if (login) {
      return <Redirect to='/'/>
		} else {
			return (
				<LoginWrapper>
					<img
						className="login-logo"
						src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png"
						alt=""
					/>
					<LoginBox>
						<LoginHearder>
							<span className="title active">登录</span>
							<b className="title">*</b>
							<Link to="/register">
								<span className="title">注册</span>
							</Link>
						</LoginHearder>
						{/* 登录框 */}
						<LoginForm>
							<LoginItem>
								<i className="iconfont itemLeft">&#xe63a;</i>
								<Input
									placeholder="手机号或者邮箱"
									type="text"
									innerRef={name => {
										this.name = name;
									}}
								/>
							</LoginItem>
							<LoginItem>
								<i className="iconfont itemLeft">&#xe64c;</i>
								<Input
									placeholder="密码"
									type="password"
									innerRef={password => {
										this.password = password;
									}}
								/>
							</LoginItem>
						</LoginForm>
						{/* 忘记密码  记住账号 */}
						<LoginTips>
							<TipsLfet>
								<input className="check" type="checkbox" value="true" />
								<span className="checkMe">记住我</span>
							</TipsLfet>
							<TipsRight>登录遇到问题?</TipsRight>
						</LoginTips>
						{/* 登录按钮 */}
						<LoginButton
							onClick={() => {
								handleLogin(this.name, this.password);
							}}
						>
							登录
						</LoginButton>
						{/* 更多登录方式 */}
						<MoreSign>
							<MoreTitle>社交账号登录</MoreTitle>
							<MoreLogin>
								<li>
									<i className="iconfont itemLeft">&#xe600;</i>
								</li>
								<li>
									<i className="iconfont itemLeft">&#xe64a;</i>
								</li>
								<li>
									<i className="iconfont itemLeft">&#xe60d;</i>
								</li>
								<li>
									<i className="iconfont itemLeft">&#xe7ae;</i>
								</li>
							</MoreLogin>
						</MoreSign>
					</LoginBox>
				</LoginWrapper>
			);
		}
	}
}

const mapStateToProps = state => {
	return {
		login: state.getIn(['login', 'isLogin']),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleLogin(name, password) {
			const action = loginOnClick(name.value, password.value);
			dispatch(action);
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);
