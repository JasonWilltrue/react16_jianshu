import styled from 'styled-components';

export const LoginWrapper = styled.div`
	height: 100%;
	min-height: 750px;
	text-align: center;
	font-size: 14px;
	background-color: #f1f1f1;
	.login-logo {
		position: absolute;
		left: 40px;
		top: 80px;
		width: 100px;
		vertical-align: middle;
		border: 0;
		box-sizing: border-box;
	}
`;

export const LoginBox = styled.div`
	width: 400px;
	margin: 60px auto 0;
	padding: 50px 50px 30px;
	background-color: #fff;
	border-radius: 4px;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
	vertical-align: middle;
	display: inline-block;
`;

export const LoginHearder = styled.div`
	margin: 0 auto 50px;
	padding: 10px;
	font-weight: 400;
	cursor: pointer;
	font-size: 18px;
	.title {
		font-weight: 700;
		padding: 10px;
		color: #969696;
	}
	.active {
		font-weight: 700;
		color: #ea6f5a;
		border-bottom: 2px solid #ea6f5a;
	}
`;
export const Logo = styled.div``;
export const LoginForm = styled.div`
	width: 300px;
	height: 150px;
	border: 1px solid #dcdcdc;
	border-radius:4px;
	margin: 0 auto;
	background:#F7F7F7;
	margin-bottom:10px;
`;

export const LoginItem = styled.div`
   height:48px;
	 line-height:48px;
	 padding-left:8px;
    i{
			float:left;
			font-size:22px;
			color:#8B8B8B;
		}
`;

export const Input = styled.input`
   float:left;
	 margin-top:10px;
	 border:none;
	 background:#F7F7F7;
	 outline:none;
	 height:26px;
	 width: 250px;
	 display:block;
	 text-indent:4px;
	 color:#000;
	 font-size:14px;

`;

export const LoginButton = styled.div`
	margin-top: 30px;
	width: 300px;
	margin: 0 auto;
	padding: 13px 18px;
	font-size: 18px;
	border: none;
	border-radius: 25px;
	color: #fff;
	background: #3db922;
	cursor: pointer;
	outline: none;
	display: block;
	clear: both;
`;

//===============更多社交平台登录================
export const MoreSign = styled.div`
	width: 300px;
	margin: 0 auto;
    margin-top:30px;
`;
export const MoreTitle = styled.h6`
	position: relative;
	margin: 0 0 10px;
	font-size: 12px;
	color: #b5b5b5;
    margin-bottom:20px;
    ::after {
		content: '';
		border-top: 1px solid #b5b5b5;
		display: block;
		position: absolute;
		width: 60px;
		top: 5px;
        box-sizing: border-box;
	}
	::before{
		content: '';
		border-top: 1px solid #b5b5b5;
		display: block;
		position: absolute;
		width: 60px;
		top: 5px;
        box-sizing: border-box;
	}
`;
export const MoreLogin = styled.ul`
   li{
       border:1px solid red;
       margin-left:6px;
        width: 50px;
        height: 50px;
        line-height:50px;
       float:left;
       align-content:none;
   }
`;
