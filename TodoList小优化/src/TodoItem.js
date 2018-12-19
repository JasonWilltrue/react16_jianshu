import React, { Component } from 'react';

class TodoItem extends Component {
	constructor(props) {
    super(props);
    this.handelDelete=this.handelDelete.bind(this)
	}
	render() {
    let {content} = this.props;
		return <li onClick={this.handelDelete}>{content}</li>;
	}
	handelDelete() {
    console.log(this.props.index)
    let {index} = this.props;
		this.props.handleItemDelete(index);
	}
}

export default TodoItem;
