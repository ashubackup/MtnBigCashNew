import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import prize from "../Images/prize.png";
import menu_icon from "../Images/menu-icon.svg";
import message from "../Images/messgae.svg";
import notes from "../Images/notes.svg";
import coin from "../Images/coins.webp";
import { Link } from "react-router-dom";
import Menu from "../Components/Menu";
import { sendPrizesApi } from "../Data/data";
import Get from "../Api/Get";
import Loader from "../Components/Loader";

import '../Css/newcss.css';

const Prize = () => {

  //to go on other page
  const navigate=useNavigate();

  //Calling Data on Load
  useEffect(() =>{
    checkColor();
    gettingPrizeData();
     // eslint-disable-next-line
  }, []);

  //Hooks to store Airtime & Cash Prizes
  const [airtimePrize, setAirtimePrize] = useState([]);
  const [cashPrize, setCashPrize] = useState([]);

  //Getting Prize Data
  const gettingPrizeData = () => {
    let promise = Get(sendPrizesApi);
    promise.then((e) => {
      // console.log("e ", e);
      handlePrizeDataResponse(e);
    });
  };

  //Handling Data coming from Prize Api
  const handlePrizeDataResponse = (e) => {

    if(e==="Network Error")
    {
      navigate("/error"); 
    }
    else
    {
      setAirtimePrize(e.airtimePrizes);
      setCashPrize(e.cashPrizes);  
      setLoader('none');
    }
  };

  //Hook to store Loader State
  const[loader,setLoader]=useState('block');

 //Hook to Store Color
 const[color,setColor]=useState('');
 const[colorTwo,setColorTwo]=useState('');

 //Method to Get Color according to serviceId
 const checkColor=()=>{
   let serviceId=localStorage.getItem("serviceId");

  //  if(serviceId==='11')
  //  {
  //    setColor('#FFCC00');
  //    setColorTwo('black');
  //  }
  //  else if(serviceId==='1')
  //  {
  //    setColor('#5bc2e7');
  //    setColorTwo('#00263a');
  //  }
  //  else
  //  {
  //    setColor('#5bc2e7');
  //    setColorTwo('#00263a');
  //  }
 }

  return (
    <div className="text-unselect">
      <Loader value={loader}/>
      <Menu
        one="inactive"
        two="inactive"
        three="inactive"
        four="active"
        five="inactive"
        six="inactive"
      />



      <div className="container bg-color-yellow">
        <div className="cus-header">
          <div className="col-md-7 col-xs-7">
            <div className="page-icon">
              <img alt="logo" src={prize} /> Prize
            </div>
          </div>
          <div className="col-md-5 col-xs-5">
            <span
              className="cus-menu navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <img alt="logo" src={menu_icon} />
              <span className="cursor-pointer">menu</span>
            </span>
          </div>
        </div>
        <div className="container-area">
          <span className="cus-btn-blue container-area-span"> 
          {/* inside span tag style={{color:`${color}`,backgroundColor:`${colorTwo}`}} */}
            {" "}
            Winner Prizes
          </span>
          <p className="big-font">
            R1,000 is the Grand Cash Prize! <br />
            Enjoy Daily Airtime Rewards!
          </p>


          <div className="score-area-table">
            <div className="blue-row"
              >
                {/* style={{backgroundColor:`${colorTwo}`}} */}
              <div className="col-md-6 col-xs-6">Daily Airtime </div>
              <div className="col-md-6 col-xs-6">Monthly Cash </div>
            </div>
            <div className="white-bg-shadow bg-white padding-low">
            {/* style={{background:`${color}`}} */}
              <div className="rating-table">
                <div className="col-md-6 border-winner col-xs-6">
                  {airtimePrize.length > 0 &&
                    airtimePrize.map((value, index) => {
                      return (
                        <div key={index}>
                          <div className="col-md-5 col-xs-5"> {index + 1}</div>
                          <div className="col-md-7 col-xs-7">R{value.prize}</div>
                        </div>
                      );
                    })}
                </div>

                <div className="col-md-6 border-winner col-xs-6">
                  {cashPrize.length > 0 &&
                    cashPrize.map((value, index) => {
                      return (
                        <div key={index}>
                          <div className="col-md-5 col-xs-5">{index + 1}</div>
                          <div className="col-md-7 col-xs-7">R{value.prize}</div>
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className="rating-btn">
                <div className="col-md-6 col-xs-6">
                  <Link to="/faq">
                    FAQs <img alt="logo" src={message} />
                  </Link>
                </div>
                <div className="col-md-6  col-xs-6">
                  <Link to="/terms">
                    <img alt="logo" src={notes} /> T’s & C’s
                  </Link>
                </div>
                

                <div className="col-md-12  col-xs-12">
                  {" "}
                  <br />
                  <center>
                    {" "}
                    <img alt="logo" src={coin} />
                  </center>
                </div>
              </div>
            </div>

            <div className="cus-score-btn-blue">
              <Link to="/homepage"
                > Play to Win Big</Link>
                {/* style={{color:`${color}`,backgroundColor:`${colorTwo}`}} */}
            </div>
            <Footer
              one="inactive"
              two="inactive"
              three="inactive"
              four="active"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Prize;