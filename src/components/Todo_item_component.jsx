import { Button } from '@mui/material';
import React from 'react';

const Todo_item = ({ task, onEdit, onDelete }) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {task}
            <div className='flex justify-around'>
           <div className=''>
           <Button className='' variant="contained" color="error" onClick={onEdit}>
                    Edit
                </Button>
           </div>
               <div>
               <Button className='mr-5' variant="contained" color="error" onClick={onDelete}>
                    Delete
                </Button>
               </div>
            </div>
        </li>
    );
};

export { Todo_item };