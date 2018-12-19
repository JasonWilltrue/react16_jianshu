import { fromJS } from 'immutable';

//普通对象转换成 immutable类型对象
const defaultState = fromJS({
    isLogin:false
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case 'CHANG_LOGIN':
		return state.set('isLogin',action.isLogin)
		default:
			return state;
	}
}