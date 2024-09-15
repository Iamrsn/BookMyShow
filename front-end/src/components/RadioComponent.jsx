import React from 'react'
import "../css/RadioComponent.css"

function RadioComponent({text}) {
  return (
    <div className='form-check-label'>
      <span className='text'>{text}</span>
    </div>
  )
}

export default RadioComponent