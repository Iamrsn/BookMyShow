import React, { useContext } from 'react'
import SelectMovie from '../components/SelectMovie'
import LastBookingDetails from '../components/LastBookingDetails'
import TimeSchedule from '../components/TimeSchedule'
import SelectSeats from '../components/SelectSeats'
import "../css/Home.css"
import BsContext from '../context/BsContext'

function Home() {
  const context = useContext(BsContext)
  const {movie,time,noOfseat,handlePostBooking,setErrorMessage,setErrorPopup} = context
 
  const checkNegativeSeatsValidity = (seats) => {
    for (let seat in seats) {
      if (Number(seats[seat]) < 0) {
        return true;
      }
    }

    return false;
  };

  //check whether all seats have input 0
  const checkZeroSeatsValidity = (seats) => {
    for (let seat in seats) {
      if (Number(seats[seat]) > 0) {
        return false;
      }
    }
    return true;
  };
  const handleBookNow = ()=>{
    if (!movie) {
      setErrorPopup(true);
      setErrorMessage("Please select  a movie!");
    } else if (!time) {
      setErrorPopup(true);
      setErrorMessage("Please select a time slot!");
    } else if (
      checkNegativeSeatsValidity(noOfseat) ||
      checkZeroSeatsValidity(noOfseat)
    ) {
      setErrorPopup(true);
      setErrorMessage("Invalid Seats!");
    } else {
      //validation successfull
      handlePostBooking();
    }
  }
  return (
    <div className='container'>
        <div className='wrapper'>
        <div className='select-_movie_component'>
        <SelectMovie/> 
        </div>
        <div className='last_booking_details_container'>
            <LastBookingDetails/>
        </div>
        </div>
        <div className='time_seats_container'>
            <TimeSchedule/>
            <SelectSeats/>
            <button className='BN-button' onClick={()=>{handleBookNow()}}>Book Now</button>
        </div>
    </div>
  )
}

export default Home