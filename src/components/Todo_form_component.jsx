import React, { useState } from 'react';
import { Input_Component } from './Input_Component';
import { Button } from '@mui/material';

const Todo_form = ({ onAddTask, onDeleteAllTasks }) => {
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            onAddTask(newTask.trim());
            setNewTask('');
        }
    };

    return (
        <div className="input-group flex justify-around ">
            <div className='h-7'>
            <Input_Component className='h-7'
                type="text"
                placeholder="Enter a new task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            </div>
           
            <div className='flex mt-6 ml-4'>
                <div>
                    <Button className='w-20 h-13' variant="contained" color="info" onClick={handleAddTask}>
                        Add
                    </Button>
                </div>
                <div className='ml-4'>
                    <Button className='w-36 h-13' variant="contained" color="info" onClick={onDeleteAllTasks}>
                        Delete all
                    </Button>
                </div>
            </div>
        </div>
    );
};

export { Todo_form };