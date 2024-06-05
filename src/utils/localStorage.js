export const saveUsernameToLocalStorage  = (username) => {
    localStorage.setItem('username', JSON.stringify(username));
}

export const getUsernameFromLocalStorage = () => {
    const savedName = JSON.parse(localStorage.getItem('username'));
    return savedName !== null ? savedName : '';
}