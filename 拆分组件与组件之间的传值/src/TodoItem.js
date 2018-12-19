import React, { Component } from 'react';

class TodoItem extends Component {
	constructor(props) {
    super(props);
    this.handelDelete=this.handelDelete.bind(this)
	}
	render() {
		return <li onClick={this.handelDelete}>{this.props.content}</li>;
	}
	handelDelete() {
    console.log(this.props.index)
		this.props.handleItemDelete(this.props.index);
	}
}

export default TodoItem;
