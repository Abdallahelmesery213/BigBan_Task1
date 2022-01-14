import {ADD_TODO, COMPLETE_TODO, REMOVE_TODO, UPDATE_TODO} from"./actionsTypes";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    todos:[
        { id: 1, task: "task1", completed: true },
        { id: 2, task: "task2", completed: true },
        { id: 3, task: "task3", completed: true },
    ]
}
const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            const newTodo = {
                id: uuidv4(),
                task: action.payload,
                completed: true
            };
            const addedTodos = [...state.todos, newTodo];
            return {...state, todos: addedTodos};
        case REMOVE_TODO:
            const filterTodo= state.todos.filter( (t) => t.id !== action.payload.id);
            return { ...state, todos: filterTodo };
        case UPDATE_TODO:
            const updatedTodos = state.todos.map(todo => {
                if (todo.id === action.payload.id){
                    return {...todo, task: action.payload.updatedTask}
                }
                return todo;
            });
            return {...state, todos: updatedTodos};
        case COMPLETE_TODO:
            const toggleTodos = state.todos.map(t=>
                t.id === action.payload.id
                ? {...action.payload, completed: true}
                : t
            );
            return{...state, todos: toggleTodos};
        default:
            return state;
    }
}
export default todoReducer;



// case COMPLETE_TODO:
//     const toggleTodos = state.todos.map(t=>
//         t.id === action.payload.id
//         ? {...action.payload, completed: !action.payload.completed}
//         : t
//     );
// return{...state, todos: toggleTodos};