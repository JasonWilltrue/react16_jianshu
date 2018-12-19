/*
 * @Author: Jerrychan
 * @Date: 2018-07-02 18:55:52
 * @LastEditors: Jerrychan
 * @LastEditTime: 2018-07-02 19:16:43
 * @Description: action各种方法封装
 */

export const getInputActiveChange = (value)=>({
    type: 'CHANGE_ACTIVE_INPUT_VALUE',
    value,
})

export const getInputChange= (value)=>({
  type: 'CHANGE_INPUT_VALUE',
  value,
})
export const onBtnClick= (value)=>({
  type: 'ADD_INPUT_VALUE',
  value,
})
export const getItemDelete = (index)=>({
  type: 'DELETE_INPUT_VALUE',
  index,
})
export const getUpdateValue = (index)=>({
  type: 'UPDATE_INPUT_VALUE',
  index,
})
export const getSaveValue = (index,value)=>({
  type: 'SAVE_INPUT_VALUE',
  index,
  value,
})
export const getCancel = ()=>({
  type: 'CANCEL_INPUT_VALUE',
})