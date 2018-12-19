import React, { PureComponent } from 'react';
import { TopicWrapper, TopicItem, TopicMore } from '../style';
import { connect } from 'react-redux';

class Topic extends PureComponent {
	getTopList() {
		const { topList } = this.props;
		const newList = topList.toJS();
		const newTopList = [];
		if (newList.length) {
				newList.map((item, index) => {
					newTopList.push(
					<TopicItem key={item.id}>
						<img className="top-img" src={item.imgUrl} alt='' />
						{item.title}
					</TopicItem>
				);
			});
    }
    return newTopList;
	}
	render() {
		return (
			<div>
				<TopicWrapper>
					{this.getTopList()}
					<TopicMore>更多热门专题→ </TopicMore>
				</TopicWrapper>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		topList: state.getIn(['home', 'topList']),
	};
};

export default connect(
	mapStateToProps,
	null
)(Topic);
