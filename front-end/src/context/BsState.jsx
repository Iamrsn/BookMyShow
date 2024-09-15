import { useState } from "react";
import BsContext from "./BsContext";

const BsState = (props) =>{
    const[movie,changeMovie]=useState("")
    return(
        <BsContext.Provider value={{movie,changeMovie}}>{props.children}</BsContext.Provider>
    )
}


export default BsState;