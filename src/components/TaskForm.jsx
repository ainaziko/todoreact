import React, { useState } from "react"

const TaskForm = ({ onSubmit }) => {
    const [taskDescription, setTaskDescription] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!(taskDescription && selectedCategory)){
            alert('Please enter a task description and select a category.');
        }
        onSubmit({ description: taskDescription, category: selectedCategory, isCompleted: false });
        setTaskDescription('');
        setSelectedCategory('');
        event.target.reset();
    }

    return (
        <form id="todoForm" onSubmit={handleSubmit}>
            <div className="task-input">
                <p className="uppercase">CREATE A TODO</p> 
                <p className="grey-txt">What's on your todo list?</p>
                <input 
                    type="text" 
                    name="task" 
                    placeholder="e.g get a milk"
                    onChange={(e) => setTaskDescription(e.target.value)}
                />
            </div>
            
            <div className="category-selection">
                <p className="grey-txt">Pick a category</p>
                <div className="category">
                    <label className="category-item">
                        <input 
                            type="radio" 
                            className="business" 
                            name="category-option"
                            onClick={() => setSelectedCategory("business")}
                        />
                        <p>Business</p>
                    </label>
                    <label className="category-item">
                        <input 
                            type="radio" 
                            className="personal" 
                            name="category-option"
                            onClick={() => setSelectedCategory("personal")}
                        />
                        <p>Personal</p>
                    </label>
                </div>
            </div>
            <button className="submit" type="submit" id="submit">Add todo</button>
        </form>
    );
}

export default TaskForm;

