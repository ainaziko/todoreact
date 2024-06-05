import React, { useCallback, useEffect, useState } from "react";
import { getUsernameFromLocalStorage, saveUsernameToLocalStorage } from "../utils/localStorage";

const Greeting = ({text, placeholder}) => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        const savedName = getUsernameFromLocalStorage();
        if(savedName){
            setUsername(savedName);
        }
    }, []);

    const handleUsernameChange = useCallback((event) => {
        const name = event.target.value;
        setUsername(name);
        saveUsernameToLocalStorage(name);    
    }, []);  

    return (
        <div className="greeting">
            <p className="heading">{text}</p>
            <input 
                className="username" 
                placeholder={placeholder}
                value={username}
                onChange={handleUsernameChange}
            />
        </div>
    );
};

export default Greeting;