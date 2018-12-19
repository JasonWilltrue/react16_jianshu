const defaultStore = {
   inputValue:'',
   list:[],
   editeStatus:false,
   activeIndex:-1,
   activeValue:'',
}


export default (store=defaultStore,action)=>{
   if(action.type === "CHANGE_INPUT_VALUE")
   {
       const newState = JSON.parse(JSON.stringify(store));
       newState.inputValue = action.value;
       return newState;
   }
   if(action.type === "CHANGE_ACTIVE_INPUT_VALUE")
   {
       const newState = JSON.parse(JSON.stringify(store));
       newState.activeValue = action.value;
       return newState;
   }
   if(action.type === "ADD_INPUT_VALUE")
   {
       const newState = JSON.parse(JSON.stringify(store));
       newState.list = [...newState.list,action.value]
       newState.inputValue = '';
       return newState;
   }
   if(action.type === "DELETE_INPUT_VALUE")
   {
       const newState = JSON.parse(JSON.stringify(store));
       newState.list.splice(action.index,1)
       return newState;
   }
   if(action.type === "UPDATE_INPUT_VALUE")
   {
       const newState = JSON.parse(JSON.stringify(store));
       newState.activeIndex = action.index;
       newState.activeValue = newState.list[action.index];
       return newState;
   }
   if(action.type === "SAVE_INPUT_VALUE")
   {
       const newState = JSON.parse(JSON.stringify(store));
       newState.list[action.index] = action.value;
       newState.activeIndex = -1;
       return newState;
   }
   if(action.type === "CANCEL_INPUT_VALUE")
   {
       const newState = JSON.parse(JSON.stringify(store));
       newState.activeIndex = -1;
       return newState;
   }
   console.log(store,action)
    return store
   
}