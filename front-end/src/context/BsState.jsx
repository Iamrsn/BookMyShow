import { useEffect, useState } from "react";
import BsContext from "./BsContext";

const BsState = (props) =>{
    const [errorPopup,setErrorPopup]=useState(false)
    const [errorMessage,setErrorMessage]=useState("")
    const[movie,changeMovie]=useState("")
    const[time,changeTime]=useState("")
    const [noOfseat, changeNoOfseats] = useState({
        A1: 0,
        A2: 0,
        A3: 0,
        A4: 0,
        D1: 0,
        D2: 0,
      });
      
    const[LastBookingDetails,setlastbookingdetails]=useState(null)
    
     const handlePostBooking = async ()=>{
        const response = await fetch(`http://localhost:3000/api/booking`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({movie:movie,slot:time,seats:noOfseat})
        })

        const data = await response.json()
        setErrorPopup(true)
        setErrorMessage(data.message)
        if(response.status === 200){
            changeTime("")
            changeMovie("")
            setlastbookingdetails(data.data)
            window.localStorage.clear()
        }
     }

     const handleGetBooking = async ()=>{
        const response = await fetch(`http://localhost:3000/api/booking`,{
            method:"Get"
        }
    )
        const data = await response.json()
        setlastbookingdetails(data.data)
    }
    useEffect(()=>{
        const movie = window.localStorage.getItem("movie")
        const slot = window.localStorage.getItem("slot")
        const seats = JSON.parse(window.localStorage.getItem("seats"))

        if(movie){
            changeMovie(movie)
        }
        if(slot){
            changeTime(slot)
        }
        if(seats){
            changeNoOfseats(seats)
        }
    },[])


    return(
        <BsContext.Provider value={{movie,changeMovie,time,changeTime,noOfseat,changeNoOfseats,LastBookingDetails,handleGetBooking,handlePostBooking,errorMessage,errorPopup,setErrorMessage,setErrorPopup}}>{props.children}</BsContext.Provider>
    )
}


export default BsState;