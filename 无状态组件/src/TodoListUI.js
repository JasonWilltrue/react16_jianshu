import React, {Fragment } from 'react';
import { Input, Button, List } from 'antd';

const TodoListUI = props => {
	return (
		<Fragment>
			<div>
				<label htmlFor="insertArea">请输入内容</label>
				<Input
					style={{ width: '300px' }}
					id="insertArea"
					className="input"
					value={props.inputValue}
					onChange={props.handleInputChange}
				/>
				<Button type="primary" onClick={props.handleBtnClick}>
					提交
				</Button>
			</div>
			<List
				style={{ width: '300px', marginLeft: '70px' }}
				bordered
				dataSource={props.list}
				renderItem={(item, index) => (
					<List.Item
						index={index}
						actions={[
							<a
								onClick={() => {
									props.handleItemDelete(index);
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
};

export default TodoListUI;
