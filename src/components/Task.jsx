import React, { useState, useCallback } from "react";
import { updateTaskDescriptionStatusInLocalStorage } from "../utils/localStorage";

const Task = ({task, onStrike, onDelete, }) => {
    const {id, description, category, isCompleted} = task;
    const [editable, setEditable] = useState(false);
    const [editedDescription, setEditedDescription] = useState(description);

    const toggleEditable = () => {
        setEditable(!editable);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            event.target.blur();
            setEditable(false);
        }
      };

    const handleDescriptionChange = useCallback((event) => {
        const newDescription = event.target.value;
        setEditedDescription(newDescription);
        updateTaskDescriptionStatusInLocalStorage(id, newDescription);
    }, [id]);

    return (
        <div className="task">
            <div className="task-description">
                <input className={category} type="checkbox" name="checkbox" onChange={onStrike} checked={isCompleted}/>
                <input 
                    className={`task__text ${isCompleted ? 'strikeout' : ''}`}
                    value={editedDescription}
                    onChange={handleDescriptionChange}
                    onKeyDown={handleKeyDown}
                    readOnly={!editable}
                />
            </div>
            <div className="btns">
                <button className="edit-task" onClick={toggleEditable}>Edit</button>
                <button className="delete-task" onClick={onDelete}>Delete</button>
            </div>
        </div>
    );
};

export default Task;