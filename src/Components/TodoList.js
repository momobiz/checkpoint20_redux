import React from 'react';
import TodoItem from './TodoItem';
import {useSelector} from 'react-redux';

const TodoList = () => {
    let todos=useSelector((state)=>state);

    return (
        <div>
            
    {todos.map((el, key)=><TodoItem todo={el} key={key}/>)}

           

        </div>
    );
}

export default TodoList;
