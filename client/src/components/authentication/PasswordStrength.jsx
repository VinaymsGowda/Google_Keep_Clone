import React,{useState} from 'react';
import './PasswordLogic.css';
const labels=['Weak','Fair','Medium','Strong'];

function PasswordStrength({password,setpassword}) {
    const [strength,setStrength]=useState("");
    
    function handlepassword(event){
        setpassword(event.target.value);
        setStrength(getStrength(event.target.value));
    }

    function getStrength(password){
        let indicator=-1;

        if(/[a-z]/.test(password))  indicator++;
        if(/[A-Z]/.test(password)) indicator++;
        if(/\d/.test(password)) indicator++;
        if(/[^a-zA-Z0-9]/.test(password)) indicator++;

        if(password.length>=9){
            indicator++;
        }
        return labels[indicator];
    }

  return (
    <div>
        <input className="inputfield" type="password" placeholder="password" value={password} onChange={handlepassword}/>
        <div className={`bars ${strength}`}>
            <div></div>
        </div>
        <div className='strength'>
            {strength && `${strength} password`}
        </div>
    </div>
  )
}

export default PasswordStrength;