import React, { Component, Fragment } from 'react';
import { Input, Button, List } from 'antd';
class TodoListUI extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<label htmlFor="insertArea">请输入内容</label>
					<Input
						style={{ width: '300px' }}
						id="insertArea"
						className="input"
						value={this.props.inputValue}
						onChange={this.props.handleInputChange}
					/>
					<Button type="primary" onClick={this.props.handleBtnClick}>
						提交
					</Button>
				</div>
				<List
					style={{ width: '300px', marginLeft: '70px' }}
					bordered
					dataSource={this.props.list}
					renderItem={(item, index) => (
						<List.Item
							index={index}
							actions={[
								<a
									onClick={() => {
										this.props.handleItemDelete(index);
									}}
								>
									删除
								</a>,
							]}
						>
							{item}
						</List.Item>
					)}
				/>
			</Fragment>
		);
	}
}

export default TodoListUI;
