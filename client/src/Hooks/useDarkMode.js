import React, { useEffect } from "react"

import useLocalStorage from "./useLocalStorage.js";

const useDarkMode = () =>{
    //st a state for dark mode, initial is false
    const [value, setValue] = useLocalStorage("darkMode", false )
    //if darkMode state id true then toggle dark mode watches updates
    //to darkMode state
    useEffect(()=>{
        var body = document.querySelector('body')
        if(value === true){
            body.classList.add("dark-mode")
        }
        else{
            body.classList.remove("dark-mode")
        }

    },[value])

    return[value, setValue]
    }

    


export default useDarkMode;