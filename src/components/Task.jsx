import React, { useState } from "react";

const Task = ({task, onStrike, onDelete, }) => {
    const {id, description, category, isCompleted} = task;
    const [inEditMode, setInEditMode] = useState(false);
    const [editedDescription, setEditedDescription] = useState(description);

    return (
        <div className="task">
            <div className="task-description">
                <input className={category} type="checkbox" name="checkbox" onChange={onStrike} checked={isCompleted}/>
                <p className={`task__text ${isCompleted ? 'strikeout' : ''}`}>
                    {description}
                </p>
            </div>
            <div className="btns">
                <button className="edit-task">Edit</button>
                <button className="delete-task" onClick={onDelete}>Delete</button>
            </div>
        </div>
    );
};

export default Task;