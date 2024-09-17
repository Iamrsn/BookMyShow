import React, { useContext } from "react";
import { seats } from "../data";
import SeatsInput from "./SeatsInput";
import "../css/SelectSeat.css";
import BsContext from "../context/BsContext";
function SelectSeats() {
  const context = useContext(BsContext);
  const { noOfseat, changeNoOfseats } = context;
  return (
    <div className="ss-wrapper">
      <h1 className="ss-heading">Select Seats</h1>
      <div className="ss-main-container">
        {seats.map((el, index) => {
          return (
            <SeatsInput
              text={el}
              key={index}
              noOfseat={noOfseat}
              changeNoOfseats={changeNoOfseats}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SelectSeats;
