import React, { useContext, useEffect } from "react";
import { seats } from "../data";
import "../css/LastBookingDetails.css";
import BsContext from "../context/BsContext";
function LastBookingDetails() {
  const context = useContext(BsContext);
  const { LastBookingDetails, handleGetBooking } = context;
  useEffect(() => {
    handleGetBooking();
  },[]);
  return (
    <div className="last-booking-details-container-main">
      <h2 className="last-booking-details-header">Last Booking 📞</h2>
      {LastBookingDetails ? (
        <>
          <div className="seats-container">
            <p className="seats-header">Seats :</p>
            <ul className="seats">
              {seats.map((seat, index) => {
                return (
                  <li className="seat-value" key={index}>
                    {seat}:{Number(LastBookingDetails.seats[seat])}
                  </li>
                );
              })}
            </ul>
          </div>
          <p className="slot" style={{ textAlign: "left" }}>
            slot :<span>{LastBookingDetails.slot}</span>
          </p>
          <p className="movie">
            Movie : <span>{LastBookingDetails.movie}</span>
          </p>
        </>
      ) : (
        <p className="no-previous">No previous booking</p>
      )}
    </div>
  );
}

export default LastBookingDetails;
