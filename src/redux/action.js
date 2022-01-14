import {COMPLETE_TODO, ADD_TODO, REMOVE_TODO, UPDATE_TODO} from"./actionsTypes";

export const completeTodo= (todo)=> ({
    type: COMPLETE_TODO,
    payload: todo,
})

export const addTodo= (todo)=> ({
    type: ADD_TODO,
    payload: todo,
})

export const removeTodo= (todo)=> ({
    type: REMOVE_TODO,
    payload: todo,
})

export const updateTodo= (todo)=> ({
    type: UPDATE_TODO,
    payload: todo,
})