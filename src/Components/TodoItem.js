import React, {useState} from 'react';
import  {Card, Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {deleteTodo, editTodo, updateIsDone} from '../Redux/Actions';


const TodoItem = ({todo}) => {

const dispatch=useDispatch();
const [isDone, setIsDone]=useState(true);
const [editable, setEditable]=useState(false);
const [name, setName]=useState(todo.title);




    

    const styleObject={
        width: '50rem',
        display:'flex',
        justifyContent:'space-between',
        border: '1px solid rgba(0,0,0,.125)',
        padding:'10px',
        marginLeft:'20%', 
        backgroundColor:'grey'


    }
    return (
       
            <div  style={styleObject}>
 
             {editable? <input type="text" value={name}
                className="form-control" onChange={(e)=>setName(e.target.value)}/>

                    :
                    <input type="text" value={name}
                className="form-control" readonly="readonly"/>
            
                
                }
                     <h4 style={{ width:'150px'}}> {!isDone}  </h4>
                 
                 <select className="custom-select col-sm-2" 
                                                                            
                  id="inputGroupSelect01" onChange={(e)=>{setIsDone(e.target.value);
                
                                                         dispatch(updateIsDone({
                                                             ...todo,
                                                             isDone:isDone
                                                         }))}}>
                   
                    <option value="true">isNotDone</option>
                    <option value="false">isDone </option>
               
                </select> 
                    
                <div style={{ display:'flex', width:'250px'}}>
                <Button variant="success"  onClick={()=>{   dispatch(editTodo(
                    {...todo, title:name}
                ))
                                        setEditable(!editable)}}>{!editable?"Edit":"save"} </Button>


                <Button variant="warning" onClick={()=>dispatch(deleteTodo(todo.id))}
                >delete</Button>
                </div>
            </div>
        
    );
}

export default TodoItem;