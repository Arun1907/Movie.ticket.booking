
import React, { useState } from "react";
import { seats } from "../Data";
import "./SeatBooking.css";
import Logout from "../Logout/Logout";
import Timing from "../Timing/Timing";
import { Navigate, useNavigate, useLocation } from "react-router-dom";

const SeatBooking = () => {
  const location = useLocation();
  const username = location.state?.username || "";
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [activePage, setActivePage] = useState("Seats"); 

  const handleSeatSelect = (row, seatId) => {
    const seatIndex = selectedSeats.findIndex(
      (seat) => seat.row === row && seat.seatId === seatId
    );
    if (seatIndex !== -1) {
      const updatedSeats = [...selectedSeats];
      updatedSeats.splice(seatIndex, 1);
      setSelectedSeats(updatedSeats);
    } else {
      setSelectedSeats([...selectedSeats, { row, seatId }]);
    }
  };

  const navigate = useNavigate();

  const handlePageClick = (page) => {
    setActivePage(page); 
  };

  const getTotalAmount = () => {
    return selectedSeats.length * 180;
  };

  return (
    <div className="booking-container">
      <div className="sidebar">
        <div className="header">
          <p>Hi, {username}</p>
          <div className="header-btn">
            <button
              className={activePage === "Account" ? "active" : ""}
              onClick={() => handlePageClick("Account")}
            >
              Account
            </button>
            <button
              className={activePage === "Timing" ? "active" : ""}
              onClick={() => handlePageClick("Timing")}
            >
              Timing
            </button>
            <button
              className={activePage === "Seats" ? "active" : ""}
              onClick={() => handlePageClick("Seats")}
            >
              Seats
            </button>
          </div>
          <div className="underline"></div>
        </div>
        {activePage === "Account" && <Logout />}
        {activePage === "Timing" && <Timing />}
      </div>

      {activePage === "Seats" && (
        <>
          <h2>Seat Selection</h2>
          <div className="seat-selection">
            {seats.map((row) => (
              <div key={row.row} className="seat-row">
                <h4 style={{ paddingRight: "10px" }}> {row.row}</h4>
                {row.columns.map((seat) => (
                  <button
                    key={seat.id}
                    className={
                      selectedSeats.some(
                        (selectedSeat) =>
                          selectedSeat.row === row.row &&
                          selectedSeat.seatId === seat.id
                      )
                        ? "selected"
                        : ""
                    }
                    style={{
                      backgroundColor: selectedSeats.some(
                        (selectedSeat) =>
                          selectedSeat.row === row.row &&
                          selectedSeat.seatId === seat.id
                      )
                        ? "#17ff00"
                        : "white",
                      color: selectedSeats.some(
                        (selectedSeat) =>
                          selectedSeat.row === row.row &&
                          selectedSeat.seatId === seat.id
                      )
                        ? "white"
                        : "black",
                    }}
                    disabled={!seat.isAvailable}
                    onClick={() => handleSeatSelect(row.row, seat.id)}
                  >
                    {seat.id}
                  </button>
                ))}
              </div>
            ))}
          </div>
          <div className="price-and-book">
            <h3>
              Selected Seats:{" "}
              {selectedSeats
                .map(
                  (selectedSeat) => `${selectedSeat.row}${selectedSeat.seatId}`
                )
                .join(", ")}
            </h3>
            <h3>Total Amount: {getTotalAmount()} </h3></div>
            <button style={{display:"flex",alignItems:"center", justifyContent:"center",marginLeft:"45%"}} disabled={selectedSeats.length === 0} onClick={()=>{navigate("/success", {
      state: {
        selectedSeats: selectedSeats,
        totalAmount: getTotalAmount(),
        numSelectedSeats: selectedSeats.length
      }})}}>Book Now</button>
          
        </>
      )}
      
    </div>
  );
  
};

export default SeatBooking;
