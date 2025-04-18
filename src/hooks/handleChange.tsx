import { useState } from "react";

export function useChangeFieldLogin(){

    const [credentials, setCredentials] = useState({
        email : "", 
        password: ""
    })

    function handleChange(event: any){
        const {name, value} = event.target
        //returns the previous value and then sets a new value 
        setCredentials(previousValue => {
            return { 
                ...previousValue,
                [name] : value
            }
        })
    }

    return { credentials, setCredentials, handleChange }
}
