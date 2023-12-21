import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
// import all_logo from "../Images/all-logo.png";
// import hand_shake from "../Images/hand-shake.png";
import alllogo from "../NewImages/Hulu-Logo.png";
import handshake from "../NewImages/hand-shake.png";
import '../Css/newcss.css';

const Intro = () => {

  //to go on other page
  const navigate=useNavigate();

  //to load on start
  useEffect(()=>{
    //checkColor();
     gettingRequestParams();
    setTimeout(()=>{
    navigate("/homepage");
    },1000)
    // eslint-disable-next-line 
  },[]);

  const gettingRequestParams = () => {
    const params = new URLSearchParams(window.location.search);
    let ani = params.get("ani"); //i.e userId
    let serviceIdd = params.get("serviceId"); //i.e serviceId
    let msisdn = params.get("msisdn"); //i.e ani
    console.log("ani" , ani);
    console.log("service id " , serviceIdd);
    console.log("msisdn " ,msisdn); 

    if (ani !== null && serviceIdd != null && msisdn !== null) {
      console.log("Inside Not Null");
      localStorage.setItem("ani", msisdn);
      localStorage.setItem("serviceId", serviceIdd);
      localStorage.setItem("userId", ani);

      
    } else {
       console.log("Inside Null");
    }
  }









   //Hook to store color
  // const[color,setColor]=useState('');

  //Method to Get Color according to serviceId
 // const checkColor=()=>{
    //let serviceId=localStorage.getItem("serviceId");

    // if(serviceId==='11')
    // {
    //   setColor('#FFCC00');
    // }
    // else if(serviceId==='1')
    // {
    //   setColor('#5ec3e7');
    // }
    // else
    // {
    //   setColor('#5ec3e7');
    // }
  //}

  // return (
  //   <>
  //     <div className="container"
  //       style={{backgroundImage:`linear-gradient(${color}, #fff)`}}>
  //       <div className="intro-screen">
  //         <div className="intro-logo">
  //           <img alt="logo" src={all_logo} />
  //         </div>
  //         <div className="intro-content">
  //           <img alt="logo" src={hand_shake} />
  //           <h1>
  //             Welcome to
  //             <br />
  //             Bigcash Games !
  //           </h1>
  //           <p>
  //             Play and Win Cash Prizes For
  //             <br />
  //             Reaching Higher Levels.
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );

  return (
    <div className="container fist-p" style={{ height: "100vh" }}>
      <div className="intro-screen">
        <div className="intro-logo">
          <img alt="logo" src={alllogo} />
        </div>
        <div className="intro-content">
          {/* <img alt="logo" src={handshake} /> */}
          <h1>
            Welcome to Play <br />
            and Win Zone !
          </h1>
          <p>
            Play.Compete.Win
            <br />
            Play Games & Win Prizes for Reaching Higher
            <br/>
            Levels
          </p>
        </div>
        <div className="loader-main">
            <div className="loader">Loading...</div>
          </div>
      </div>
    </div>
  );
};
export default Intro;