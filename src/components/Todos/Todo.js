import React, {useState} from 'react';
import "./Todo.css";

const Todo = ({task, completed, toggleTodo, id, removeTodo, updateTodo}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editTask, setEditTask] = useState(task);
    const [myRed, setRed] = useState(false);
    const [myGreen, setGreen] = useState(false);
    const handleUpdate=(e)=>{
        e.preventDefault();
        updateTodo(id, editTask);
        setIsEditing(false);
    }
    return (
        <div className={myGreen ? "green": ""}>
            <div className={myRed? 'red': ''}>
                <div className={completed ? "Todo completed": "todo"} >
                {
                    isEditing ? (
                        <div className="form" >
                            <form onSubmit={handleUpdate} className='Todo-edit-form'>
                                <input 
                                    type="text" 
                                    value={editTask}
                                    name="task"
                                    onChange={ (e)=> setEditTask(e.target.value) }
                                />
                                <button className='btn btn-primary'>save</button>
                            </form>
                        </div>
                    ) : (
                        <div className="task-text" >
                            <li className='Todo-task' onClick={toggleTodo}>
                               <h6>{task}</h6> 
                            </li>
                        </div>
                    )
                }
                <div className='Todo-buttons'>
                    <button onClick={removeTodo}><i className="fas fa-trash"></i></button>
                    <button onClick={()=>setIsEditing(true)}><i className="fas fa-pen"></i></button>
                    <button onClick={()=>setRed(!myRed)} ><i className="fas fa-times"></i></button>
                    <button onClick={()=>setGreen(!myGreen)} ><i className="far fa-check-circle"></i></button>
                </div>
                
                </div>
            </div>
        </div>
        
        
    )
}

export default Todo
