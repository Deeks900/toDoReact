import React, { Component } from 'react';
class ToDo extends Component{
    //constructor will contain data members
    constructor(){
        //super will provide this of this classs
        super();
        //Now make states
        this.state = {
            //Key value pairs
            tasks: [],
            currentTask: ''
        }

    }

    handleChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            currentTask: e.target.value
        })
    }

    handleSubmit = ()=>{
        this.setState({
            //assigning a new address using spread operator so that react can re render.Also added a new object to it
            tasks: [...this.state.tasks, {task:this.state.currentTask, id:this.state.tasks.length+1}],
            //clearing the input field
            currentTask: ''
        })
    }

    handleDelete=(id)=>{
        let newArr = this.state.tasks.filter((taskObj)=>{
            return taskObj.id !== id
        })
        this.setState({
            tasks: [...newArr]
        })
    }

    render(){
        return(
                // Render method have to use div in return to return many items
            <div>
            {/* All the things you want to show on UI */}
                <input type = "text" value = {this.state.currentTask} onChange = {this.handleChange} ></input>
                <button type = "submit" onClick = {this.handleSubmit}>Add Task</button>
                {/* Loops can't be used inside render so have to use map method */}
                <ul>
                {
                    // Iterating through the array of objects
                    this.state.tasks.map((taskObj)=>(
                        // It's better to have unique key for each item so that react can differentiate easily that what changes are done 
                        <li key = {taskObj.id}>
                            <p>{taskObj.task}</p>
                            <button onClick = {()=>this.handleDelete(taskObj.id)}>Delete</button>
                        </li>
                    ))
                }
                </ul>
            </div>
        )
    }
}
export default ToDo;