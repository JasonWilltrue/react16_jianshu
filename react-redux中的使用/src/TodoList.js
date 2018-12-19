import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getInputChange, onBtnClick,getItemDelete } from './store/actionCreator';
export class TodoList extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<input value={this.props.inputValue} onChange={this.props.handleInputChange} />
					<button onClick={this.props.handleClick}>提交</button>
				</div>
				<ul>
					{this.props.list.map((item, index) => {
						return <li key={index}  onClick={()=>{this.props.handleDelete(index)}} >{item}</li>;
					})}
				</ul>
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		inputValue: state.inputValue,
		list: state.list,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleInputChange(e) {
			const value = e.target.value;
			const action = getInputChange(value);
			dispatch(action);
		},
		handleClick() {
			const action = onBtnClick();
			dispatch(action);
    },
    handleDelete(index){
      const action = getItemDelete(index);
      dispatch(action)
    },
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);
