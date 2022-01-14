import React, {useState} from 'react';
import "./TodoInput.css";

const TodoInput = ({createTodo, focusInput}) => {
    const [task, setTask] = useState("");
    const handleSubmit= (e)=>{
        e.preventDefault();
        createTodo(task);
        setTask("")
    };
    
    return (
        <div>
            
            <form onSubmit={handleSubmit} className='TodoInput'>
                <input 
                    ref={focusInput}
                    type="text" 
                    placeholder='enter Your Task' 
                    value={task}
                    name="task"
                    id="task"
                    onChange={ (e)=> { setTask(e.target.value) }}
                />
                {task && <button className='btn'>Add</button> }
            </form>
        </div>
    )
}
export default TodoInput;
