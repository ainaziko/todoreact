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