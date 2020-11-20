import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, isDone_filter } from '../Redux/Actions';




import './todoInput.css';



const TodoInput = () => {
    const [newTask, setTask]=useState("");
    const dispatch=useDispatch();
    const todos=useSelector(state=>state);
    console.log((todos.find(todo=>todo.isDone===true))?true:false)
 
   

    
    return (
        <div className="row addTask">
            < input style={{marginLeft:'250px'}} type='text' value={newTask}
            placeholder="Add new Task" onChange={(e)=>setTask(e.target.value)}/>
            <Button variant="warning" onClick={()=>{dispatch(addTodo({
                id:Math.random(),
                title:newTask,
                isDone:false
            })); 
            setTask("")}

            }>Add</Button>

{(todos.find(todo=>todo.isDone===true))?
             <Button variant="warning" style={{marginLeft:"200px"}}
           
             onClick={()=>dispatch(isDone_filter())}
             >isDone</Button>
             :
             ""
}        
        </div>
    );
}

export default TodoInput;
