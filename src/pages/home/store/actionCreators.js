import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data) => ({
	type: 'CHANGE_LIST',
	topicList: fromJS(data.topicList),
	articleList:fromJS(data.articleList),
});

const addHomeList = (data,page) => ({
	type: 'ADD_HOME_LIST',
	list:fromJS(data),
	page:fromJS(page)
});

export const getTopList = () => {
	return (dispatch) => {
		axios.get('/api/home.json').then((res) => {
			const data = res.data.data;
			dispatch(changeList(data));
		}).catch(() => {
			console.log('error');
		})
	}
};


export const changHomeList = (page) => {
	return (dispatch) => {
		axios.get('/api/homeList.json?page='+page).then((res) => {
			const data = res.data.data;
		   dispatch(addHomeList(data,page));
		}).catch(() => {
			console.log('error');
		})
	}
};
export const toggleTopShow = (bool) => ({
			type:'CHANGE_SCOLL',
			showScoll:bool
});