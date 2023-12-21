import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactGA from "react-ga";
import { google_key } from "../Data/data";
import home_icon_top from "../Images/home-icon-top.png";
import menu_icon from "../Images/menu-icon.svg";
import mediaplay from "../Images/mediaplay.svg";
import dots from "../Images/dots.svg";
import Footer from "../Components/Footer";
import Menu from "../Components/Menu";
import { sendServicesDataApi } from "../Data/data";
import Get from "../Api/Get";
import Loader from "../Components/Loader";


ReactGA.initialize(google_key);

const Home = () => {
  //To go on other page
  const navigate = useNavigate();

  //Hook to Store Games Data
  const [gamesData, setGamesData] = useState([]);

  //Calling for Games Data
  useEffect(() => {
    checkColor();
    getGamesData();
    ReactGA.pageview(window.location.pathname);
    // eslint-disable-next-line
  }, []);

  //Getting Games Data
  const getGamesData = () => {
    let promise = Get(sendServicesDataApi);
    promise.then((e) => {
      console.log("e ", e);
      handleResponse(e);
    });
  };

  //Handling Response of API
  const handleResponse = (e) => {
    if (e === "Network Error") {
      //Backend Not Working - so sending to error page
      navigate("/error");
    } else {
      setGamesData(e.response); //Setting games array to Hook
      setLoader('none'); //Hiding Loader
    }
  };

  //Hook to store loader div state
  const[loader,setLoader]=useState('block');

  //Hook to store color
  const[color,setColor]=useState('');
  const[colorTwo,setColorTwo]=useState('');

   //Method to Get Color according to serviceId
   const checkColor=()=>{
    let serviceId=localStorage.getItem("serviceId");

    if(serviceId==='11')
    {
      setColor('black');
      setColorTwo('#FFCC00');
    }
    else if(serviceId==='1')
    {
      setColor('#00263a');
      setColorTwo('#5ec3e7');
    }
    else
    {
      setColor('#00263a');
      setColorTwo('#5ec3e7');
    }
  }

  return (
    <>
      <Loader value={loader}/>
      <Menu
        one="active"
        two="inactive"
        three="inactive"
        four="inactive"
        five="inactive"
        six="inactive"
      />
      <div className="container white-bg">
        <div className="cus-header">
          <div className="col-md-6 col-xs-6">
            <div className="page-icon">
              <img alt="logo" src={home_icon_top} />
              <span className="text-unselect">Home</span>
            </div>
          </div>
          <div className="col-md-6 col-xs-6">
            <span
              className="cus-menu navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <img alt="logo" src={menu_icon} />
              <span className="text-unselect cursor-pointer">menu</span>
            </span>
          </div>
        </div>
        <div className="container-area">
          <span className="cus-btn-blue container-area-span"
             style={{color:`${colorTwo}`,backgroundColor:`${color}`}}>
            {" "}
            <span className="text-unselect">BigCash Games For You</span>
          </span>
          
          <div className="game-area">
            {gamesData.length > 0 &&
              gamesData.map((value, index) => {
                return (
                  <div className="col-md-6 col-xs-6" key={index}>
                    <div className="cus-game"
                      style={{background:`${color}`}}>
                      <img
                        alt="game-icon"
                        src={value.imageUrl}
                        height="127px"
                        width="127px"
                      />
                      <h4 className="text-unselect">{value.game}</h4>
                      <span className="cus-game-span"
                         style={{background:`${colorTwo}`}}>
                        {" "}
                        <img alt="logo" src={mediaplay} />
                        <span
                          className="text-unselect cursor-pointer"
                          onClick={() => {
                            let ani=localStorage.getItem("ani");
                            let gameId=value.gameid;
                            let serviceId=localStorage.getItem("serviceId");
                            window.location.href = `${value.gameUrlLive}?ani=${ani}&gameId=${serviceId}&serviceId=${gameId}`;
                          }}
                        >
                          Play Now
                        </span>
                      </span>
                    </div>
                    <div className="info-icon">
                      <img alt="logo" src={dots} />
                    </div>
                  </div>
                );
              })}
          </div>
          <Footer
            one="active"
            two="inactive"
            three="inactive"
            four="inactive"
          />
        </div>
      </div>
    </>
  );
};
export default Home;
