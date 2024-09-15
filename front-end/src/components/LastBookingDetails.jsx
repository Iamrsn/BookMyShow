import React from 'react'
import {seats} from "../data"
import "../css/LastBookingDetails.css"
function LastBookingDetails() {
  return (
    <div className='last-booking-details-container-main'>
      <h2 className='last-booking-details-header'>Last Booking 📞</h2>
      <div className='seats-container'>
        <p className='seats-header'>Seats :</p>
        <ul className='seats'>
          {seats.map((seats,index)=>{
            return(
              <li className='seat-value' key={index}>
                (seat):0
              </li>
            )
          })}
        </ul>
      </div>
      <p className='slot' style={{textAlign:'left'}}>slot :00:00 AM <span></span></p>
      <p className='movie'>Movie : <span>bhola</span></p>
    </div>
  )
}

export default LastBookingDetails