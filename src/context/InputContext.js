import React, {createContext, useState} from "react";
import axios from "axios";

export const InputContext = createContext();

const InputContextProvider = (props) => {
    const[url, setUrl] = useState("");

    const fetchUrl = () => {
        // event.preventDefault();
        let str = `http://localhost:5000/?url=${url}`;
        axios.get(str)
            .then(response => {
                setUrl("");
            });
    };

    return (
        <InputContext.Provider value={{url,setUrl,fetchUrl}}>
            {props.children}
        </InputContext.Provider>
    );
}

export default InputContextProvider;
