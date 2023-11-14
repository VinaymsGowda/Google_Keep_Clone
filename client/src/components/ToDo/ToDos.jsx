import React from 'react'
import NewToDo from './NewToDo'
import { Sidebar } from '../Sidebar/Sidebar'

export const ToDos = () => {
  return (
    
    <div className='wrappertodo'>
    <Sidebar/>
    <NewToDo/>
    </div>
  )
}
