import * as constants from './constants';
import { fromJS } from 'immutable';

//普通对象转换成 immutable类型对象
const defaultState = fromJS({
	focused: false,
	mouseIn: false,
	list: [],
	page: 1,    //当前页
	totalPage: 1  //总页数
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.SEARCH_FOCUS:
			return state.set('focused', true);
		case constants.SEARCH_BLUR:
			return state.set('focused', false);
		case constants.CHANGE_LIST:
		  // merge多组对象中使用
			return state.merge({
				list: action.data,
				totalPage: action.totalPage
			});
		case constants.MOUSE_ENTER:
			return state.set('mouseIn', true);
		case constants.MOUSE_LEAVE:
			return state.set('mouseIn', false);
		case constants.CHANGE_PAGE:
			return state.set('page', action.page);
		default:
			return state;
	}
}