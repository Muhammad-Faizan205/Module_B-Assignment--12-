import React from 'react'
import { useState } from 'react';
import { Todo_form } from './Todo_form_component';
import { Todo_list } from './Todo_list_component';

function Todo_complete() {
    const [tasks, setTasks] = useState([]);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    const editTask = (index) => {
        const updatedTask = prompt('Edit task:', tasks[index]);
        if (updatedTask !== null) {
            const updatedTasks = [...tasks];
            updatedTasks[index] = updatedTask.trim();
            setTasks(updatedTasks);
        }
    };

    const deleteAllTasks = () => {
        setTasks([]);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center text-4xl">ToDo App</h1>
            <Todo_form onAddTask={addTask} onDeleteAllTasks={deleteAllTasks} />
            <Todo_list tasks={tasks} onEditTask={editTask} onDeleteTask={deleteTask} />
        </div>
    );
}



export { Todo_complete }