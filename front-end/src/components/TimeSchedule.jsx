import React from 'react'
import { slots } from '../data'
import RadioComponent from './RadioComponent'
import "../css/TimeSchedule.css"

function TimeSchedule() {
  return (
    <>
    <div className='slot_container'>
      <h1 className='ts-heading'>Select A Schedule</h1>
      <div className='ts-main-container'>{slots.map((el,index)=>{
        return(
          <RadioComponent text={el} key={index}/>
        )
      })}</div>
    </div>
    </>
  )
}

export default TimeSchedule