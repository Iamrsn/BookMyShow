import React, { useContext } from "react";
import { slots } from "../data";
import RadioComponent from "./RadioComponent";
import "../css/TimeSchedule.css";
import BsContext from "../context/BsContext";

function TimeSchedule() {
  const context = useContext(BsContext)
  const {time,changeTime}=context;
  const handlechangeItem = (val)=>{
    changeTime(val);
    window.localStorage.setItem("slot",val)
  }
  return (
    <>
      <div className="slot_container">
        <h1 className="ts-heading">Select A Schedule</h1>
        <div className="ts-main-container">
          {slots.map((el, index) => {
            return <RadioComponent text={el} key={index} data={time} changeSelection={handlechangeItem}/>;
          })}
        </div>
      </div>
    </>
  );
}

export default TimeSchedule;
