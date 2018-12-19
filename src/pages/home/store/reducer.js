import { fromJS } from 'immutable';

//普通对象转换成 immutable类型对象
const defaultState = fromJS({
   topList:[],
   articleList:[],
   page:1,
   showScoll:false,
});

export default (state = defaultState, action) => {
	switch(action.type) {
    case 'CHANGE_LIST':
    return state.merge({
      'topList':action.topicList,
      'articleList':action.articleList,
    })
    case 'ADD_HOME_LIST':
    return state.merge({
      'articleList':state.get('articleList').concat(action.list),
      'page':action.page+1
    })
    case 'CHANGE_SCOLL':
    return state.set('showScoll',action.showScoll)
		default:
			return state;
	}
}