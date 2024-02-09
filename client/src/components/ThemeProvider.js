import React, { createContext, useState } from 'react'
import { useContext } from 'react'

const ThemeContext=createContext();

function ThemeProvider({children}) {
    const [theme,setTheme]=useState('light');
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
    {children}
    </ThemeContext.Provider>
  )
}

export function ThemeState(){
    return useContext(ThemeContext);
}

export default ThemeProvider;