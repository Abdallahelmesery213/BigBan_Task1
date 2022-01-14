import React,{useRef} from 'react';
import "./TodoList.css";
import { useSelector, useDispatch } from 'react-redux';
import TodoInput from '../TodoInput/TodoInput';
import { completeTodo, addTodo, removeTodo, updateTodo } from '../../redux/action';
import Todo from '../Todos/Todo';

const TodoList = () => {
    const state = useSelector(state => ({...state.todos}) );
    const dispatch = useDispatch();
    const create = (newTodo)=> {
        dispatch(addTodo(newTodo))
    }
    const update = (id, updatedTask)=> {
        dispatch(updateTodo({id, updatedTask}));
    };
    // focus on Form add task
    const focusInput = useRef(null)
    function handleFocus(){
        focusInput.current.focus()
    }
    return (
        <div className='TodoList'>
            <TodoInput createTodo={create} focusInput={focusInput} />
            <ul>
                <div className="todo_list">
                    {state.todos && state.todos.map( (todo) => {
                        return (
                            <div key={todo.id} className="todo">
                                <Todo
                                    key={todo.id}
                                    id={todo.id}
                                    task={todo.task} 
                                    completed={todo.completed}
                                    toggleTodo={()=>dispatch(completeTodo(todo))}
                                    removeTodo={()=> dispatch(removeTodo(todo))}
                                    updateTodo={update} 
                                />
                            </div>
                        )
                    }
                    )}

                </div>
            </ul>
            
            <div onClick={handleFocus} className='add-task'>
                <i className="fas fa-plus addBtn"></i> 
            </div>
        </div>
    )
}

export default TodoList
