const defaultState = {
   inputValue:'',
   list:[],
   editeStatus:false,
   activeIndex:-1,
   activeValue:'',
}


export default (state=defaultState,action)=>{
   if(action.type === "CHANGE_INPUT_VALUE")
   {
       const newState = JSON.parse(JSON.stringify(state));
       newState.inputValue = action.value;
       return newState;
   }
   if(action.type === "CHANGE_ACTIVE_INPUT_VALUE")
   {
       const newState = JSON.parse(JSON.stringify(state));
       newState.activeValue = action.value;
       return newState;
   }
   if(action.type === "ADD_INPUT_VALUE")
   {
       const newState = JSON.parse(JSON.stringify(state));
       newState.list = [...newState.list,action.value]
       newState.inputValue = '';
       return newState;
   }
   if(action.type === "DELETE_INPUT_VALUE")
   {
       const newState = JSON.parse(JSON.stringify(state));
       newState.list.splice(action.index,1)
       return newState;
   }
   if(action.type === "UPDATE_INPUT_VALUE")
   {
       const newState = JSON.parse(JSON.stringify(state));
       newState.activeIndex = action.index;
       newState.activeValue = newState.list[action.index];
       return newState;
   }
   if(action.type === "SAVE_INPUT_VALUE")
   {
       const newState = JSON.parse(JSON.stringify(state));
       newState.list[action.index] = action.value;
       newState.activeIndex = -1;
       return newState;
   }
   if(action.type === "CANCEL_INPUT_VALUE")
   {
       const newState = JSON.parse(JSON.stringify(state));
       newState.activeIndex = -1;
       return newState;
   }
   if(action.type === "INIT_LIST_ACTION")
   {
       const newState = JSON.parse(JSON.stringify(state));
       newState.list = action.data;
       return newState;
   }
   console.log(state,action)
    return state
   
}