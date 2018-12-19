import React, { Component } from 'react';
import store from './store';
import {
	getInputChange,
	onBtnClick,
	getItemDelete,
	getTodoList,
} from './store/actionCreator';

import TodoListUI from './TodoListUI';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = store.getState();
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.changeState = this.changeState.bind(this);
		this.handleItemDelete = this.handleItemDelete.bind(this);
		store.subscribe(this.changeState);
	}
	render() {
		console.log('render一次更新一次');
		return (
			<TodoListUI
				list={this.state.list}
				inputValue={this.state.inputValue}
				handleBtnClick={this.handleBtnClick}
				handleInputChange={this.handleInputChange}
				handleItemDelete={this.handleItemDelete}
			/>
		);
	}

	componentDidMount() {
			const action = getTodoList()
		  store.dispatch(action);	
	}


	//更新数据store
	changeState() {
		this.setState(store.getState());
	}
	handleInputChange(e) {
		store.dispatch(getInputChange(e.target.value));
	}
	handleBtnClick() {
		if (!this.state.inputValue) {
			alert('必须输入点什么吧');
			return;
		}
		store.dispatch(onBtnClick(this.state.inputValue));
	}
	handleItemDelete(index) {
		store.dispatch(getItemDelete(index));
	}
}

export default App;
