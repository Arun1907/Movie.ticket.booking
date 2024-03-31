import React, { useState } from "react";
import "./Timing.css";
import { useNavigate } from "react-router-dom";
const today = new Date();
const timingSlots = [
  { id: 1, time: "6:30 AM"},
  { id: 2, time: "10:00 AM"},
  { id: 3, time: "1:30 PM"},
  { id: 4, time: "5:00 PM"},
  { id: 4, time: "9:30 PM"},
];


const Timing = () => {
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setSelectedSeats([]);
  };

  
  

  const handleSeatSelect = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div className="timing-slot-page">
      <div className="timing-container">
        <h3>Timing</h3>
        <p style={{textAlign:"center"}}> Screen: 1 <hr/>Date: {today.toLocaleDateString()}</p>
        <div className="timing-slots" >
        {timingSlots.map((slot) => (
            <div
              key={slot.id}
              className={`timing-slot ${
                selectedTime === slot.time ? "selected" : ""
              }`}
              onClick={() => {handleTimeSelect(slot.time);navigate("/seats")}}
            >
              <p>{slot.time}</p>
            </div>
          ))}
        </div>
        <p style={{textAlign:"center"}}>Screen: 2 <hr/>Date: {today.toLocaleDateString()}</p>
        <div className="timing-slots">
        {timingSlots.map((slot) => (
            <div
              key={slot.id}
              className={`timing-slot ${
                selectedTime === slot.time ? "selected" : ""
              }`}
              onClick={() => handleTimeSelect(slot.time)}
            >
              <p>{slot.time}</p>
            </div>
          ))}
        </div>
        <div className="timing-description">
          <p>Select Time And pick Your Seats!!</p>
          <p>{selectedTime}</p>
        </div>
      </div>
      
    </div>
  );
};

export default Timing;

