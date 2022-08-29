import React from "react";
import {Routes,Route} from 'react-router-dom'
import Feeds from "./components/Feeds";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
function App() {
  return (
   
      <Routes>

          <Route path="/feeds" element ={<Feeds/>}/>
          <Route path="/Login" element ={<Login/>}/>
          <Route path="/Profile" element ={<Profile/>}/>
          <Route path="/SignUp" element ={<SignUp/>}/>
          <Route path="/" element ={<PageNotFound/>}/>

      </Routes>
  );
}

export default App;
