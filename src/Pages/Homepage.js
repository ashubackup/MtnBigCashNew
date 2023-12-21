import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import onestar from "../NewImages/1star.png";
import play from "../NewImages/play.png";
import alllogo from "../NewImages/all-logo.png";
// import remote from "../NewImages/remote.png";
import remote from "../NewImages/remo4.png";
import newimg from "../NewImages/imagenew.png";
import "../Css/newcss.css";

export const Homepage = () => {
  //To go on other page
  const navigate = useNavigate();

  //Hook to Store Games Data
  const [gamesData, setGamesData] = useState([]);

  //Calling for Games Data
  useEffect(() => {
   // checkColor();
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
      setLoader("none"); //Hiding Loader
    }
  };

  //Hook to store loader div state
  const [loader, setLoader] = useState("block");

  //Hook to store color
  //const [color, setColor] = useState("");
 // const [colorTwo, setColorTwo] = useState("");

  //Method to Get Color according to serviceId
  const checkColor = () => {
   // let serviceId = localStorage.getItem("serviceId");

    // if (serviceId === "11") {
    //   setColor("black");
    //   setColorTwo("#FFCC00");
    // } else if (serviceId === "1") {
    //   setColor("#00263a");
    //   setColorTwo("#5ec3e7");
    // } else {
    //   setColor("#00263a");
    //   setColorTwo("#5ec3e7");
    // }
  };

  return (
    <>
      <Loader value={loader} />
      <Menu
        one="active"
        two="inactive"
        three="inactive"
        four="inactive"
        five="inactive"
        six="inactive"
      />
      <div className="container bg-color-yellow main-home">
        <div className="cus-header">
          <div className="col-md-6 col-xs-6">
            <div className="page-icon">
              <img src={alllogo} /> 
               {/* <Link to={"/homepage"} >
                Home
              </Link>  */}
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
        <div className="play-compete-c">
          <div className="play-inner-Win">Play Compete Win</div>
          <div className="play-inner-img-w">
            <img src={remote} />
          </div>
        </div>
        <div className="container-area">
          <div className="game-area">
            {gamesData && gamesData.map((item) => {
              return (
                <>
                  <div className="win-inner" key={item.id}>
                    <div className="win-inner-img">
                      <img src={item.imageUrl} />

                    </div>
                    <div className="custom-fix-image">
                      <img src={newimg}/>
                    </div>
                    <div className="win-inner-c-r">
                      <h3>{item.game}</h3>
                      <p className="reating">
                        <span>
                          <img src={onestar} />
                        </span>
                        <span>
                          <img src={onestar} />
                        </span>
                        <span>
                          <img src={onestar} />
                        </span>
                        <span>
                          <img src={onestar} />
                        </span>
                        <span>
                          <img src={onestar} />
                        </span>
                      </p>
                      <p>Earns Rewards and ...</p>
                    </div>
                    <div className="win-play-b">
                      {/* <Link to={item.gameUrl}>
                    <img src={play} />
                    
                  </Link> */}

                      <Link to={""}>
                        <img
                          src={play}
                          onClick={() => {
                            let ani = localStorage.getItem("ani");
                            let gameId = item.gameid;
                            let serviceId = localStorage.getItem("serviceId");
                            console.log("url---",`${item.gameUrlLive}?ani=${ani}&gameId=${serviceId}&serviceId=${gameId}`);
                            window.location.href = `${item.gameUrlLive}?ani=${ani}&gameId=${serviceId}&serviceId=${gameId}`;
                          }}
                        />
                      </Link>
                    </div>
                  </div>
                </>
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
