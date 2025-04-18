import credentials from '../data/credential.json'
import { useState } from 'react';

const {cred : {email : user_email, password : user_pass}} = credentials

export function useEyeClick() {

  const [isShown, setIsShown] = useState(false);

  function handleEyeClick(){
    //  console.log("Clicked") 
    setIsShown((previousValue) => {
        // console.log("boolean us shown state: " + isShown)
        // console.log("handle eye function: " + handleEyeClick)
        return !previousValue
    })
  };
  
  return { isShown, handleEyeClick };
}

export function useLoginClick(email : string, password : string, fnc : any){
    
    function handleAuthLogin(event : any){
        //simple validation for testsing
        if(email === user_email && password == user_pass){
            console.log("Login successful")
            window.location.href = 'https://www.youtube.com/watch?v=nI8PYZNFtac';
        }else{
            console.log("login failed")
        }
    
        fnc({
            email : "", 
            password: ""
        })
    
        event.preventDefault()
    }

    return { handleAuthLogin }
}