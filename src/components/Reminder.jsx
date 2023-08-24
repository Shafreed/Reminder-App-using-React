import React, { useState } from 'react'
import './Reminder.css'

const Reminder = () => {
const [reminder,setReminder]=useState([])
const [newReminder,setNewReminder]=useState('')

const inputChangeHandler=(event)=>{
setNewReminder(event.target.value)
}

const addReminderHandler=()=>{
    if(newReminder.trim()){
        setReminder([...reminder,newReminder])
        setNewReminder('')
    }

}
const reminderdeleteHandler=(index)=>{
    setReminder(reminder.filter((item,itemIndex)=>index !==itemIndex))
}

  return (
    <div className='container'>
      <h1>Reminder App</h1>
    <div className='input-container'>
        <input type="text" value={newReminder} placeholder='Enter a Reminder' onChange={inputChangeHandler}/>
        <button className='Add-btn' onClick={addReminderHandler}>Add Reminder</button>
    </div>
    { 
        reminder.length >0 ?
        <ul className='reminder-list'>
        {
            reminder.map((item,index)=>(
                <li key={index}>
                  {item}  
                  <button onClick={()=>reminderdeleteHandler(index)} className='delete-btn'>Delete</button>
                </li>
            ))
        }
    </ul> :
    <p>No reminders found</p>
    }
    
    </div>
  )
}

export default Reminder
