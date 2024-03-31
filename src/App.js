//import { BrowserRouter as Router,Route,Redirect,Switch } from 'react-router-dom';
/*import React from 'react';
import './App.css';
//import LoginSignup from './Components/LoginSignup/LoginSignup';
import MovieList from './Components/MovieList/MovieList';
import { movies } from './Components/Data';
//import { useState } from 'react';

//const [logined,setLogined] = useState(false)
const App=()=> {
  return (
    <div>
      <MovieList/>
    </div>
  );
}

export default App; */
/*
<Router>
        <Switch>
          <Route path='/login'>
            <LoginSignup setLogined={setLogined}/>
          </Route>
          <Route path='/movies'>
              {logined?<MovieList/> : <Redirect to= '/login' />}
          </Route>
          <Redirect from="/" to="/login" />
        </Switch>
      </Router>
      */


      import React from 'react';
      import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
      import LoginSignup from "./Components/LoginSignup/LoginSignup";
      import MovieList from "./Components/MovieList/MovieList";
      import Timing from './Components/Timing/Timing';
      import SeatBooking from './Components/SeatBooking/SeatBooking';
import Logout from './Components/Logout/Logout';
import BookingSuccessful from './Components/BookingSuccessful/BookingSuccessful'
      
      function App() {
        return(
         <Router>
            <Routes>
              <Route path="/" element={<LoginSignup />} />
              <Route path="/booking" element={<MovieList />} />
              <Route path="/timing" element={<Timing />} />
              <Route path="/seats" element={<SeatBooking />} />
              <Route path="/success" element={<BookingSuccessful />}/>
              <Route path='/logout' element={<Logout />} />
            </Routes>
          </Router>
        )
      };
      
      export default App;

/*import React from "react";
//import Timing from "./Components/Timing/Timing";
//import SeatBooking from "./Components/SeatBooking/SeatBooking";
//import BookingSuccessful from "./Components/BookingSuccessful/BookingSuccessful";
//import Logout from "./Components/Logout/Logout";
import Sidebar from "./Components/SideBar/Sidebar";

const App=()=> {
  return (
    <div>
      <Sidebar/>
    </div>
  );
}

export default App*/