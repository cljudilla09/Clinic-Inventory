import credentials from '../data/credential.json'
import { useState } from 'react';

const {cred : {email : user_email, password : user_pass}} = credentials

export function useToggleVisibility() {

  const [isShown, setIsShown] = useState(false);

  function handleToggleVisibility(){
    //  console.log("Clicked") 
    setIsShown((previousValue) => {
        // console.log("boolean us shown state: " + isShown)
        // console.log("handle eye function: " + handleEyeClick)
        return !previousValue
    })
  };
  
  return { isShown, handleToggleVisibility };
}

export function useLoginSubmit(email : string, password : string, fnc : any){
    
    function handleLogin(event : any){
        //simple validation for testsing
        if(email === user_email && password == user_pass){
            console.log("Login successful")
            // try navigating here when logged in
            window.location.href = 'http://localhost:3000/Dashboard-url';
        }else{
            console.log("login failed")
        }
    
        fnc({
            email : "", 
            password: ""
        })
    
        event.preventDefault()
    }

    return { handleLogin }
}