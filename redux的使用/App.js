import React, { Component, Fragment } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import store from './store';
import {getInputActiveChange,getInputChange,onBtnClick, getItemDelete,getUpdateValue,getSaveValue,getCancel} from './store/actionCreator'
class App extends Component {
	constructor(props) {
		super(props);
		this.state = store.getState();
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.changeState = this.changeState.bind(this);
		this.handleRenderItem = this.handleRenderItem.bind(this);
		this.handleCancel=this.handleCancel.bind(this);
		store.subscribe(this.changeState);
	}

	/*==============生命周期函数============*/
	componentWillMount = () => {
		console.log('我是第一个出现的');
	};

	componentDidMount() {
		console.log('render后出现');
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		console.log('是否要更新呢', nextProps, nextState, nextContext);
		return true;
	}

	componentWillUpdate() {
		console.log('更新之前执行');
	}
	componentDidUpdate() {
		console.log('更新完成');
	}
	/*===================================*/

	render() {
		console.log('render一次更新一次');
		return (
			<Fragment>
				<div>
					<label htmlFor="insertArea">请输入内容</label>
					<Input
						style={{ width: '300px' }}
						id="insertArea"
						className="input"
						value={this.state.inputValue}
						onChange={this.handleInputChange}
						ref={input => {
							this.input = input;
						}}
					/>
					<Button type="primary" onClick={this.handleBtnClick}>
						提交
					</Button>
				</div>
				<List
					style={{ width: '300px', marginLeft: '70px' }}
					ref={ul => {
						this.ul = ul;
					}}
					bordered
					dataSource={this.state.list}
					renderItem={this.handleRenderItem}
				/>
			</Fragment>
		);
	}
	changeState() {
		this.setState(store.getState());
	}
	handleRenderItem(item, index) {
		if (index === this.state.activeIndex) {
			return (
				<List.Item index={index} actions={[<a onClick={this.handleSaveValue.bind(this, index)}>保存</a>,<a onClick={this.handleCancel}>取消</a>,]}>
					<Input value={this.state.activeValue} onChange={this.handleInputActiveChange} />
				</List.Item>
			);
		} else {
			return (
				<List.Item
					index={index}
					actions={[
						<a onClick={this.handleUpdateValue.bind(this, index)}>编辑</a>,
						<a onClick={this.handleItemDelete.bind(this, index)}>删除</a>,
					]}
				>
					{item}
				</List.Item>
			);
		}
	}
	handleInputActiveChange(e){
		store.dispatch(getInputActiveChange(e.target.value));
	}
  
	
	handleInputChange(e) {
		store.dispatch(getInputChange(e.target.value));
	}
	handleBtnClick() {
		if(!this.state.inputValue)
		{
			alert('必须输入点什么吧')
			return;
		}
		store.dispatch(onBtnClick(this.state.inputValue));
	}
	handleItemDelete(index) {
		store.dispatch(getItemDelete(index));
	}
	handleUpdateValue(index) {
		store.dispatch(getUpdateValue(index));
	}
	handleSaveValue(index){
		if(!this.state.activeValue)
		{
			alert('必须输入点什么吧')
			return;
		}
		store.dispatch(getSaveValue(index,this.state.activeValue));
	}
	handleCancel(){
		store.dispatch(getCancel());
	}
}

export default App;
