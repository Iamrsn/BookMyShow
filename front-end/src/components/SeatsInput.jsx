import React from 'react'
import "../css/SeatInput.css"

function SeatsInput({key,text}) {
  return (
    <div className='form-check-label seats'>
        <span className='text'>{text}</span>
        <input type="number" className='seats-input' placeholder='0' max="30" min="0" />
    </div>
  )
}

export default SeatsInput