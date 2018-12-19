import React, { Component,Fragment } from 'react';
import TodoItem from './TodoItem';


class TodoList extends Component{
    constructor(props)
    {
       super(props)
       this.state={
         inputValue:'',
         list:[],
       }
       this.handleBtnClick= this.handleBtnClick.bind(this);
       this.handleInputChange=this.handleInputChange.bind(this);
       this.handleItemDelete=this.handleItemDelete.bind(this);
    }
    render(){
       return (
          <Fragment>
             <div>
                <input
                 className = 'input'
                 value = {this.state.inputValue}
                 onChange={this.handleInputChange}
                />
                <button onClick={this.handleBtnClick}>提交</button>
             </div>
             <ul>
                {
                  this.state.list.map((item,index)=>{
                     return (
                       <div key={index}>
                         <TodoItem 
                         content={item} 
                         index={index}
                         handleItemDelete={this.handleItemDelete}
                         />
                       </div>
                     )
                  })
                }
             </ul>
          </Fragment>
       )
    }

    handleBtnClick(){
       this.setState({
          list:[...this.state.list,this.state.inputValue],
          inputValue:''
       })
    }

    handleInputChange(e){
       this.setState({
         inputValue:e.target.value
       })
    }
    handleItemDelete(index){
      const list = [...this.state.list];
      list.splice(index,1);
      this.setState({
        list:list
      })
    }
    

}

export default TodoList;