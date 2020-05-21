import React, { useEffect } from "react"
import useLocalStorage from "./useLocalStorage.js";

const useBlueMode = () =>{
    //st a state for dark mode, initial is false
    const [value, setValue] = useLocalStorage("blueMode", false )
    //if darkMode state id true then toggle dark mode watches updates
    //to darkMode state
    useEffect(()=>{
        var body = document.querySelector('body')
        if(value === true){
            body.classList.add("blue-mode")
        }
        else{
            body.classList.remove("blue-mode")
        }

    },[value])

    return[value, setValue]
    }

    


export default useBlueMode;