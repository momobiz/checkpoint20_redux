const { createStore } = require("redux");
const { default: reducerTodo } = require("./Reducer");



const store=createStore(reducerTodo, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 

export default store;