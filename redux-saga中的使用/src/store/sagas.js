import {put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { initListAction } from './actionCreator';

//saga 工作 将被 xxx方法 激活
function* getInitList(action) {
	try {
		const res = yield axios.get('/list.json');
		const action = initListAction(res.data);
		yield put(action);
	} catch (e) {
		console.log(e+'网络请求失败');
	}
}

function* mySaga() {
	yield takeEvery('GET_INIT_LIST', getInitList);
}

export default mySaga;
