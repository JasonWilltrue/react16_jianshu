import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			list: [],
		};
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleItemDelete = this.handleItemDelete.bind(this);
	}
	render() {
		return (
			<Fragment>
				<div>
					<input className="input" value={this.state.inputValue} onChange={this.handleInputChange} />
					<button onClick={this.handleBtnClick}>提交</button>
				</div>
				<ul>{this.getTodoItem()}</ul>
			</Fragment>
		);
	}
	getTodoItem() {
		return this.state.list.map((item, index) => {
			return (
					<TodoItem key={index} content={item} index={index} handleItemDelete={this.handleItemDelete} />
			);
		});
	}

	handleBtnClick() {
    this.setState((prevState)=>({
      list: [...prevState.list, prevState.inputValue],
			inputValue: '',
    }))
	}
  //新版本setstate可以接受函数 返回对象
	handleInputChange(e) {
    const value = e.target.value
    //异步
    this.setState(()=>({
       inputValue:value
    }))
	}
	handleItemDelete(index) {
    //异步
    this.setState((prevState)=>{
      const list = [...prevState.list];
      list.splice(index, 1);
      return {list}
   })
	}
}

export default TodoList;
