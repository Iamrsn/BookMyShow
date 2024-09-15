import React from "react";
import { seats } from "../data";
import SeatsInput from "./SeatsInput";
import "../css/SelectSeat.css";

function SelectSeats() {
  return (
    <div className="ss-wrapper">
      <h1 className="ss-heading">Select Seats</h1>
      <div className="ss-main-container">
        {seats.map((el, index) => {
          return <SeatsInput text={el} key={index} />;
        })}
      </div>
    </div>
  );
}

export default SelectSeats;
