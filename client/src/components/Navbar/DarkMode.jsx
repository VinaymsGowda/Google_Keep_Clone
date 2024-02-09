import React, { createContext, useContext } from 'react'
import { ThemeState } from '../ThemeProvider'


function DarkMode() {

   const {theme,setTheme}=ThemeState();
   
   const switchModes=()=>{
    if(theme==='light'){
        setTheme('dark');
    }
    else{
        setTheme('light')
    }
   }
  return (
    <div className='modes'>
        <h1>Dark Mode</h1>
        <input type='checkbox' onChange={switchModes} checked={theme === 'dark'}/>
    </div>
  )
}

export default DarkMode