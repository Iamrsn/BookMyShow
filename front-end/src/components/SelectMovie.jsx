import React from 'react'
import { moviesList } from '../data'
import RadioComponent from './RadioComponent'
import "../css/SelectMovie.css"

function SelectMovie() {
  return (
    <>
    <h1 className='SM_heading'>Select A Movie 🎥</h1>
    <div className='SM_main_container'>
        {moviesList.map((el,index)=>{
            return(
                <RadioComponent text={el} key={index}/>
            )
    })}
    </div>
    </>
  )
}

export default SelectMovie