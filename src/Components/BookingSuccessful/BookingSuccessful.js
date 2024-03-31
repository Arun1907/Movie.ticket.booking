import React from "react";
import './BookingSuccessful.css';
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

const BookingSuccessful = ({selectedTime}) =>{
    const location = useLocation();
    
  const { selectedSeats, totalAmount, numSelectedSeats, movieName } = location.state || {};
    return(
        <div className="booking-success"> 
            <div className="name-time">
                <h2>Movie Name: Manjumel Boys</h2>
                <h3>Time:10:00 AM</h3>
            </div>
            <div className="seats">
                <p>Total Seats: {numSelectedSeats}</p>
                <p>Seats:{selectedSeats.map((seat) => seat.row + seat.seatId).join(", ")}</p>
            </div>
            <div className="price">
                <p>Price:{totalAmount}</p>
            </div>
            <h1 style={{color:"green"}}>Booked Successfully!!!</h1>
            <p>Enjoy Your Show</p>
            <p>Booking information will be sent to your Email-Id</p>
        </div>
        )
}

export default  BookingSuccessful; 