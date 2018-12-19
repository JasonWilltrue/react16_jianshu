import React, { Component } from 'react'
import { connect } from 'react-redux'
import {LoginWrapper,LoginBox,LoginHearder,LoginForm,Input,LoginItem,LoginButton,MoreSign,MoreLogin,MoreTitle} from './style';
import {Link} from 'react-router-dom'

 class Login extends Component {
  render() {
    return (
         <LoginWrapper>
            <img className="login-logo" src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt='' />
            <LoginBox>
                <LoginHearder>
                    <Link to="./login">
                    <span className="title">登录</span>
                    </Link>
                    <b className="title">*</b>
                    <span className="title active">注册</span>
                </LoginHearder>
                {/* 登录框 */}
               <LoginForm>
                 <LoginItem>
                 <i className="iconfont itemLeft">&#xe63a;</i>
                 <Input placeholder="你的昵称" type='text'/>
                 </LoginItem>
                 <LoginItem>
					    	<i className="iconfont itemLeft">&#xe686;</i>
                <Input placeholder="手机号" type='text'/>
                </LoginItem>
                <LoginItem>
					    	<i className="iconfont itemLeft">&#xe64c;</i>
                <Input placeholder="设置密码" type='password'/>
                </LoginItem>
               </LoginForm>
               {/* 注册按钮 */}
               <LoginButton>注册</LoginButton>
               
               {/* 更多登录方式 */}
               <MoreSign>
                   <MoreTitle>社交账号直接注册</MoreTitle>
                   <MoreLogin>
                      <li><i className="iconfont itemLeft">&#xe615;</i></li>
                      <li><i className="iconfont itemLeft">&#xe615;</i></li>
                      <li><i className="iconfont itemLeft">&#xe615;</i></li>
                      <li><i className="iconfont itemLeft">&#xe615;</i></li>
                   </MoreLogin>
               </MoreSign>
            </LoginBox>
         </LoginWrapper>
      
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
