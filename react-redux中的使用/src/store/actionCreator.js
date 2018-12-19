export const getInputChange = value => ({
	type: 'CHANGE_INPUT_VALUE',
	value,
});

export const onBtnClick = () => ({
	type: 'ADD_INPUT_VALUE',
});
export const getItemDelete = (index) => ({
  type: 'DELETE_INPUT_VALUE',
  index,
});
