import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactGA from "react-ga";
import menu_icon from "../NewImages/menu-icon.svg";
import Footer from "../Components/Footer";
import Menu from "../Components/Menu";
import { sendServicesDataApi } from "../Data/data";
import Get from "../Api/Get";
import Loader from "../Components/Loader";
import scoreicon from "../NewImages/score-icon.png";
import backr from "../NewImages/back-r.png";
import st from "../NewImages/st.png";
import te from "../NewImages/te.png";
import pimg from "../NewImages/p-img.png";
import tp from "../NewImages/tp.png";
import bigcashgame from "../NewImages/big-cash-game.png";
import homewhiteicon from "../NewImages/home-white-icon.svg";
import scoreblue from "../NewImages/score-blue.svg";
import leadericon from "../NewImages/leader-icon.svg";
import prizeicon from "../NewImages/prize-icon.svg";
import "../Css/newcss.css";

export const Gamerprofile = () => {
  //To go on other page
  const navigate = useNavigate();

  //Hook to Store Games Data
  const [gamesData, setGamesData] = useState([]);

  //Calling for Games Data
  useEffect(() => {
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
        <div className="cus-header cus-header2">
          <div className="col-md-6 col-xs-6">
            <div className="page-icon text-white">
              <img src={scoreicon} />
              <span>Profile</span>
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
          <div className="score-area score-area-gamer-">
            <div className="gm-seting">
              <div className="gm-img">
                <Link to={"/homepage"}>
                  <img src={backr} />
                </Link>
              </div>
              <div className="gm-titel">
                <h2>Gamer Profile</h2>
              </div>
              <div className="se-icon">
                <img src={st} />
              </div>
            </div>
            <div className="online-s">
              <div className="online-pro">
                <div className="Profile-img-o">
                  <img src={pimg} />
                </div>
                <div className="comfort">
                  <h3>Comfort</h3>
                  <div className="online-stestus">
                    <span />
                    <p>Online</p>
                  </div>
                </div>
              </div>

              <div className="timeing-stuts">
                <div className="timeing-stuts-inner">
                  <div className="t-icon">
                    <img src={te} />
                  </div>
                  <p>650</p>
                  <span>+</span>
                </div>
                <div className="timeing-stuts-inner">
                  <div className="t-icon">
                    <img className="t-icon2" src={tp} />
                  </div>
                  <p>1200</p>
                  <span>+5/Hour</span>
                </div>
              </div>
            </div>

            <div className="buy-more">
              <div className="buy-more-inner">

                {
                  gamesData && gamesData.map((item =>{
                    return(
                      <>
                      <div className="buy-more-earn">
                  <div className="buy-play">
                    <div className="play-img">
                      <div className="play-img-inner">
                      <img src={item.imageUrl} />
                      </div>
                      <Link to={""}
                       onClick={() => {
                        let ani = localStorage.getItem("ani");
                        let gameId = item.gameid;
                        let serviceId = localStorage.getItem("serviceId");
                        window.location.href = `${item.gameUrlLive}?ani=${ani}&gameId=${serviceId}&serviceId=${gameId}`;
                      }}
                      
                      >Play</Link>

                    </div>
                    <div className="earn-coin">
                    <h3>{item.game}</h3>
                      <p>Earn 10,000 coins.</p>
                    </div>
                  </div>
                  <div className="earn-playtimeing">
                    <div className="earn-playtimeing-inner">
                      <div className="t-icon">
                        <img src={te} />
                      </div>
                      <p>+50</p>
                    </div>
                    <div className="earn-playtimeing-inner">
                      <div className="t-icon">
                        <img className="t-icon2" src={tp} />
                      </div>
                      <p>+100</p>
                    </div>
                    <div className="earn-playtimeing-inner-btn">
                      <Link to={"/checkout"}>Buy More Playtime</Link>
                    </div>
                  </div>
                </div>
                      
                      </>
                    )
                  }))
                }
                


                {/* <div className="buy-more-earn">
                  <div className="buy-play">
                    <div className="play-img">
                      <div className="play-img-inner">
                        <img src={bigcashgame} />
                      </div>
                      <a href="#">Play</a>
                    </div>
                    <div className="earn-coin">
                      <h3>Bigcash</h3>
                      <p>Earn 10,000 coins.</p>
                    </div>
                  </div>
                  <div className="earn-playtimeing">
                    <div className="earn-playtimeing-inner">
                      <div className="t-icon">
                        <img src={te} />
                      </div>
                      <p>+50</p>
                    </div>
                    <div className="earn-playtimeing-inner">
                      <div className="t-icon">
                        <img className="t-icon2" src={tp} />
                      </div>
                      <p>+100</p>
                    </div>
                    <div className="earn-playtimeing-inner-btn">
                      <Link to={"/checkout"}>Buy More Playtime</Link>
                    </div>
                  </div>
                </div> */}

                {/* <div className="buy-more-earn">
                  <div className="buy-play">
                    <div className="play-img">
                      <div className="play-img-inner">
                        <img src={bigcashgame} />
                      </div>
                      <a href="#">Play</a>
                    </div>
                    <div className="earn-coin">
                      <h3>Bigcash</h3>
                      <p>Earn 10,000 coins.</p>
                    </div>
                  </div>
                  <div className="earn-playtimeing">
                    <div className="earn-playtimeing-inner">
                      <div className="t-icon">
                        <img src={te} />
                      </div>
                      <p>+50</p>
                    </div>
                    <div className="earn-playtimeing-inner">
                      <div className="t-icon">
                        <img className="t-icon2" src={tp} />
                      </div>
                      <p>+100</p>
                    </div>
                    <div className="earn-playtimeing-inner-btn">
                      <Link to={"/checkout"}>Buy More Playtime</Link>
                    </div>
                  </div>
                </div> */}


              </div>
            </div>
          </div>
          <div className="cus-score-btn-blue cus-score-btn-white">
            <Link to={"/checkout"}>Buy More Playtime</Link>
          </div>
        </div>

        <Footer
          one="inactive"
          two="inactive"
          three="inactive"
          four="inactive"
        />
      </div>
    </>
  );
};
