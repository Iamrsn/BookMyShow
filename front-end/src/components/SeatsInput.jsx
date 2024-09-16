import React from 'react'
import "../css/SeatInput.css"

function SeatsInput({key,text,noOfseat,changeNoOfseats}) {
  const change_seats = (e)=> {
    changeNoOfseats({...noOfseat,[e.target.name]:Number(e.target.value)})
    window.localStorage.setItem(
      "seats",
      JSON.stringify({
        ...noOfseat,
        [e.target.name]:Number(e.target.value)
      })
    )
  }
  return (
    <div className='form-check-label seats'>
        <span className='text'>{text}</span>
        <input type="number" className='seats-input' placeholder='0' max="30" min="0" name={text} onChange={change_seats} value={noOfseat[text]} />
    </div>
  )
}

export default SeatsInput