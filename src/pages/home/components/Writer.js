import React, { PureComponent } from 'react';
import { WriterWrapper, WriterHeader, HeaderLeft, HeaderRight,WriterItem,ItemLeft,ItemRight,ItemContent,WriterMore} from '../style';
export default class Writer extends PureComponent {
	render() {
		return (
			<div>
				<WriterWrapper>
					<WriterHeader>
						<HeaderLeft>推荐作者</HeaderLeft>
						<HeaderRight>
							<i
								ref={icon => {
									this.spinIcon = icon;
								}}
								className="iconfont"
							>
								&#xe851;
							</i>
							换一批
						</HeaderRight>
					</WriterHeader>
					<WriterItem>
						<ItemLeft>
							<img className="head-img" src="//upload.jianshu.io/users/upload_avatars/2592029/d8d9bccfb37c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" alt=''/>
							<ItemContent>
							<p className="name">小托夫</p>
							<p className="info">写了292k字 · 751喜欢</p>
							</ItemContent>
						</ItemLeft>
						<ItemRight>+关注</ItemRight>
					</WriterItem>
					<WriterItem>
						<ItemLeft>
							<img className="head-img" src="//upload.jianshu.io/users/upload_avatars/2592029/d8d9bccfb37c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" alt=''/>
							<ItemContent>
							<p className="name">小托夫</p>
							<p className="info">写了292k字 · 751喜欢</p>
							</ItemContent>
						</ItemLeft>
						<ItemRight>+关注</ItemRight>
					</WriterItem>
					<WriterItem>
						<ItemLeft>
							<img className="head-img" src="//upload.jianshu.io/users/upload_avatars/2592029/d8d9bccfb37c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" alt=''/>
							<ItemContent>
							<p className="name">小托夫</p>
							<p className="info">写了292k字 · 751喜欢</p>
							</ItemContent>
						</ItemLeft>
						<ItemRight>+关注</ItemRight>
					</WriterItem>
					<WriterItem>
						<ItemLeft>
							<img className="head-img" src="//upload.jianshu.io/users/upload_avatars/2592029/d8d9bccfb37c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" alt=''/>
							<ItemContent>
							<p className="name">小托夫</p>
							<p className="info">写了292k字 · 751喜欢</p>
							</ItemContent>
						</ItemLeft>
						<ItemRight>+关注</ItemRight>
					</WriterItem>
					<WriterItem>
						<ItemLeft>
							<img className="head-img" src="//upload.jianshu.io/users/upload_avatars/2592029/d8d9bccfb37c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" alt=''/>
							<ItemContent>
							<p className="name">小托夫</p>
							<p className="info">写了292k字 · 751喜欢</p>
							</ItemContent>
						</ItemLeft>
						<ItemRight>+关注</ItemRight>
					</WriterItem>
					<WriterMore>查看全部></WriterMore>
				</WriterWrapper>
			</div>
		);
	}
}
