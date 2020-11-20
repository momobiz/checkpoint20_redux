import { ADD_TODO, DELETE_TODO, EDIT_TODO, ISDONE_FILTER, IS_DONE } from "./ActionsTypes";

const initialState=[
    {
        id:1,
        title:'tache1',
        isDone:false
    },
    {
        id:2,
        title:'tache2',
        isDone:false
    },
    {
        id:3,
        title:'tache3',
        isDone:false
    }


]


const reducerTodo=(state=initialState, action)=>{



    switch(action.type){
        case ADD_TODO:
            let list=state;
            list=[...list,action.payload];


            return list;

            
        case DELETE_TODO:
            let list1=state;
            list1=list1.filter(el=>el.id!==action.payload);
        
            console.log('id_of_deleted>>', action.payload, 'list after delete ', list1)
            
            return list1;
           
       
        case EDIT_TODO:
            let list2=state;
            list2=list2.map(el=>(el.id===action.payload.id)?{...el, title:action.payload.title}:el)
            console.log('Edited  ', list2)
            return list2;
         

        case IS_DONE:
            var list3=state;
            list3=list3.map(el=>(el.id===action.payload.id)?{...el, isDone:action.payload.isDone}:el)
           
        return list3;

       

        case ISDONE_FILTER:
            let list4=state;

           list4=list4.filter( el=>el.isDone===true);
           console.log('list of isDone ', list4)
            return list4;
           
          
        
          
           
     

        default :
        return state; 
    }

}
export default reducerTodo;


