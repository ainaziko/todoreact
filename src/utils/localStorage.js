export const saveUsernameToLocalStorage  = (username) => {
    localStorage.setItem('username', JSON.stringify(username));
}

export const getUsernameFromLocalStorage = () => {
    const savedName = JSON.parse(localStorage.getItem('username'));
    return savedName !== null ? savedName : '';
}

export const saveTaskToLocalStorage = (tasks) => {
    if(tasks === null) return;
    localStorage.setItem('todolist', JSON.stringify(tasks));
}

export const getTasksFromLocalStorage = () => {
    const tasks = JSON.parse(localStorage.getItem('todolist'));
    return tasks !== null ? tasks : '';
}

export const deleteTaskFromLocalStorage = (taskId) => {
    const storedTasks = JSON.parse(localStorage.getItem('todolist'));
    if (storedTasks) {
        const updatedTasks = storedTasks.filter(task => task.id !== taskId);
        localStorage.setItem('todolist', JSON.stringify(updatedTasks));
    }
};

export const updateTaskCompletionStatusInLocalStorage = (taskId, isCompleted) => {
    const storedTasks = JSON.parse(localStorage.getItem('todolist'));
    if (storedTasks) {
        const updatedTasks = storedTasks.map(task => {
            if (task.id === taskId) {
                return { ...task, isCompleted: isCompleted };
            }
            return task;
        });
        localStorage.setItem('todolist', JSON.stringify(updatedTasks));
    }
};

export const updateTaskDescriptionStatusInLocalStorage = (taskId, description) => {
    const storedTasks = JSON.parse(localStorage.getItem('todolist'));
    if (storedTasks) {
        const updatedTasks = storedTasks.map(task => {
            if (task.id === taskId) {
                return { ...task, description: description };
            }
            return task;
        });
        localStorage.setItem('todolist', JSON.stringify(updatedTasks));
    }
};