import styled from 'styled-components';

export const HomeWrapper = styled.div`
	overflow: hidden;
	width: 960px;
	margin: 0 auto;
`;

export const HomeLeft = styled.div`
	margin-left: 15px;
	padding-top: 30px;
	width: 625px;
	float: left;
	.banner-img {
		width: 625px;
		height: 270px;
	}
`;

export const HomeRight = styled.div`
	width: 280px;
	float: right;
	/* background:yellow; */
`;

export const TopicWrapper = styled.div`
	overflow: hidden;
	padding: 20px 0 10px 0;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
	float: left;
	background: #f7f7f7;
	height: 32px;
	line-height: 32px;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	padding-right: 10px;
	margin-left: 18px;
	margin-bottom: 18px;
	.top-img {
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`;
export const TopicMore = styled.div`
	float: left;
	height: 32px;
	line-height: 32px;
	font-size: 14px;
	color: #787878;
	margin-left: 18px;
	cursor: pointer;
`;

export const BackTop = styled.div`
	position:fixed;
	right:30px;
	bottom:30px;
	width:60px;
	height:60px;
	line-height:60px;
	text-align:center;
  border:1px solid #dcdcdc;
	border-radius:6px;
	cursor: pointer;
`;


//=============列表=============
export const ListItem = styled.div`
	margin-top: 20px;
	padding: 20px, 0;
	border-bottom: 1px solid #dcdcdc;
	.img-pic {
		float: right;
		display: block;
		height: 100px;
		width: 125px;
	}
	.title {
		margin: -7px 0 4px;
		display: inherit;
		font-size: 18px;
		font-weight: 700;
		line-height: 1.5;
	}
	.desc {
		margin: 0 0 8px;
		font-size: 13px;
		line-height: 24px;
		color: #999;
	}
`;
export const ListInfo = styled.div`
    width:525px;
    float；left;
`;
export const ListFooter = styled.div`
	padding-bottom: 20px;
	.nickname {
		font-size: 10px;
		color: #b4b4b4;
		cursor: pointerl;
	}
	.messageNum {
		margin-left: 10px;
		font-size: 10px;
		color: #b4b4b4;
	}
	.likeNum {
		margin-left: 10px;
		font-size: 10px;
		color: #b4b4b4;
	}
`;
export const ListMore = styled.div`
    width:100%;
		height:40px;
		line-height:40px;
		text-align:center;
		background:#a5a5a5;
		border-radius:20px;
		color: #fff;
		margin:30px 0 ;
		cursor:pointer;
`;


//===================右边推荐样式===================
export const RecommendWrapper = styled.div`
	width: 280px;
	margin: 30px 0;
`;
export const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	background: url(${props => props.imgUrl});
	background-size: contain;
	margin-bottom: 5px;
`;
//===================右边APP下载样式===================
export const DownloadWrapper = styled.div`
	overflow: hidden;
	margin-bottom: 30px;
	padding: 10px 22px;
	border: 1px solid #f0f0f0;
	border-radius: 6px;
	background-color: #fff;
	.down-img {
		float: left;
		width: 60px;
		height: 60px;
	}
`;
export const DownloadRight = styled.div`
	float: right;
	height: 43px;
	margin-top: 10px;
	.title {
		font-size: 15px;
		color: #333;
	}
	.desc {
		margin-top: 8px;
		font-size: 13px;
		color: #999;
	}
`;
//===================作者列表区域样式===================
export const WriterWrapper = styled.div`
	width: 280px;
	margin-top: 30px;
`;

export const WriterHeader = styled.div`
	overflow: hidden;
	margin-bottom:12px;
`;
export const HeaderLeft = styled.p`
	float: left;
	font-size: 14px;
    color: #969696;
	.head-img {
		width: 48px;
		height: 48px;
	}
`;
export const HeaderRight = styled.p`
	float: right;
	font-size: 14px;
    color: #969696;
		cursor:pointer;
		.iconfont{
			font-size: 12px;
			margin-right: 2px;
		}
`;
export const WriterItem = styled.div`
  padding-top: 5px;
	overflow: hidden;
	margin-bottom:10px;
`;
export const ItemLeft = styled.div`
	float: left;
	.head-img {
		width: 48px;
		height: 48px;
		border-radius:24px;
		border: 1px solid #ddd;
		cursor:pointer;
	}
`;
export const ItemContent = styled.div`
  padding-left:10px;
	float: right;
	.name{
		margin-top: 8px;
		 font-size:14px;
		 cursor:pointer;
	}
	.info{
		margin-top: 4px;
    font-size: 12px;
    color: #969696;
	}
`;
export const ItemRight = styled.p`
	float: right;
	margin-top: 8px;
	font-size: 13px;
    color: #42c02e;
		cursor:pointer;
`;

export const WriterMore = styled.p`
    padding: 7px 7px 7px 12px;
    width: 100%;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
	   width:259px;
		 height:18px; 
		 text-align:center;
		 line-height:18px;
		 cursor:pointer;
`;
