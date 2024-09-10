import React, { useState } from 'react'

function TaskManager() {
    const [tasks, setTasks] = useState(["eat breakfast", "take a shower"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask() {
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
        setNewTask("");
        }
        
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }


    return(
    <div>
        <h1>Task Manager</h1>
        <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange}/>
        <button className="add-button" onClick={addTask}>Add</button>
        
        <ol>
            {tasks.map((task, index) =>
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
                </li>


            )}
        </ol>
    </div>);
}

export default TaskManager