import {ADD_TODO,  DELETE_TODO, EDIT_TODO, IS_DONE, ISDONE_FILTER } from './ActionsTypes'; 

export const addTodo=(todo)=>{
    return {
        type:ADD_TODO,
        payload:todo
    }
}
export const deleteTodo=(todoId)=>{
    return {
        type:DELETE_TODO,
        payload:todoId
    }
}
export const editTodo=(todo)=>{
    return {
        type:EDIT_TODO, 
        payload:todo
    }
}
export const updateIsDone=(todo)=>{
    return {
        type:IS_DONE,
        payload:todo
    }
}
export const isDone_filter=()=>{
    return {
        type:ISDONE_FILTER
    }
}
