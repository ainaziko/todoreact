import React from "react";
import Task from "./Task";

const TaskList = ({tasks, onStrikeTask, onEditTask, onDeleteTask}) => {
    return (
        <div className="tasks">
            {tasks.map((task, index) => (
                <Task
                    key={index}
                    task={task}
                    onStrike={() => onStrikeTask(index)}
                    onEdit={() => onStrikeTask(index)}
                    onDelete={() => onDeleteTask(task.id)}
                />
            ))}
        </div>
    );
}


export default TaskList;