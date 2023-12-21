import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import img_logo from "../Images/bigcash-logo.png";
import alllogo from '../NewImages/all-logo.png';
// import handshake from '../NewImages/hand-shake.png';
import '../Css/newcss.css';

const Logo = () => {
  //to navigate on other page
  const navigate = useNavigate();

  //To Load on Start
  useEffect(() => {
    gettingRequestParams();
    setTimeout(() => {
      console.log("navigate")
    // navigate("/intro");
    }, 1000);
    // eslint-disable-next-line
  }, []);

  //State to store color
  const [color, setColor] = useState("");

  //Getting Request Params
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


    
    let serviceId = localStorage.getItem("serviceId");
    // if (serviceId === "11") {
    //   setColor("#FFCC00");
    // } else if (serviceId === "1") {
    //   setColor("#5ec3e7");
    // } else {
    //   setColor("#5ec3e7");
    // }
  };

  // return (
  //   <>
  //     <div
  //       className="container"
  //       style={{ backgroundImage: `linear-gradient(${color}, #fff)` }}
  //     >
  //       <div className="center-logo">
  //         <img alt="logo" src={img_logo} />
  //       </div>
  //     </div>
      
  //   </>
  // );


  return (
    <div className="container" style={{ height: "100vh" }}>
      <div className="center-logo-loader">
        <div className="center-logo-loader-inner">
          <div className="center-logo-b">
            <img alt="logo" src={alllogo} />
          </div>
          <p>Play . Compete . Win</p>
          <div className="loader-main">
            <div className="loader">Loading...</div>
          </div>
        </div>
      </div>
    </div>
  );
  
};
export default Logo;
