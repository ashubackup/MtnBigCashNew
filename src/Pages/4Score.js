import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import score_icon from "../Images/score-icon.png";
import menu_icon from "../Images/menu-icon.svg";
import demo_img from "../Images/demo-img.png";
import trophy from "../Images/trophy.png";
import Menu from "../Components/Menu";
import { sendScoreApi } from "../Data/data";
import Post from "../Api/Post";
import "../Css/newcss.css";

const Score = () => {
  //To Load on start
  useEffect(() => {
    checkColor();
    gettingRequestParams();
    // eslint-disable-next-line
  }, []);

  //Hook to store scores
  const [score, setScore] = useState({});

  //Getting Data from Request Parameter
  const gettingRequestParams = () => {
    // let params=new URLSearchParams(window.location.search);
    // let ani=params.get("ani");

    gettingUserScore();
  };

  //Getting Current Playing User Score from Backend
  const gettingUserScore = () => {
    let ani = localStorage.getItem("ani");
    let serviceId = localStorage.getItem("serviceId");

    // console.log("ani ",ani);
    let request = { ani: ani, serviceId: serviceId };

    let promise = Post(sendScoreApi, request);
    promise.then((e) => {
      // console.log("e ",e);
      handleResposne(e);
    });
  };

  //Method to Handle Response
  const handleResposne = (e) => {
    setScore({
      ...score,
      current: e.currentUser.score,
      top: e.topScorer.score,
    });
  };

  //Hook to Store Color
  const [color, setColor] = useState("");
  const [colorTwo, setColorTwo] = useState("");

  //Method to Get Color according to serviceId
  const checkColor = () => {
    let serviceId = localStorage.getItem("serviceId");

    // if(serviceId==='11')
    // {
    //   setColor('#FFCC00');
    //   setColorTwo('black');
    // }
    // else if(serviceId==='1')
    // {
    //   setColor('#5bc2e7');
    //   setColorTwo('#00263a');
    // }
    // else
    // {
    //   setColor('#5bc2e7');
    //   setColorTwo('#00263a');
    // }
  };

  return (
    <>
      <Menu
        one="inactive"
        two="inactive"
        three="inactive"
        four="inactive"
        five="inactive"
        six="inactive"
      />
      <div className="container bg-color-yellow">
        <div className="cus-header">
          {/* <div className="col-md-6 col-xs-6">
            <div className="page-icon">
              <img alt="logo" src={score_icon} />
              <span className="text-unselect">Score</span>
            </div>
          </div> */}
          <div className="col-md-6 col-xs-6">
            <div className="page-icon">
              <img src={score_icon} />
              Profile
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
          <span className="cus-btn-blue container-area-span">
            {/* style={{ color: `${color}`, backgroundColor: `${colorTwo}` }} */}{" "}
            <span className="text-unselect">Your Performance Status</span>
          </span>

          <div className="score-area">
            {/* style={{ background: `${color}` }} */}
            <img alt="logo" className="img-user" src={demo_img} />
            <h3 className="text-unselect"> Hie Player </h3>
            <p className="text-unselect"> Congratulations on your new score!</p>
            <div className="user-score">
              <div className="blue-bg text-unselect">
                {/* style={{ backgroundColor: `${colorTwo}` }} */}
                User Score:{" "}
                <div className="score text-unselect">{score.current}</div>
              </div>
            </div>
            <p className="text-unselect">
              Beat the best score & become the highest!
            </p>

            <div className="score-row">
              <div className="col-md-5 col-xs-5">
                {" "}
                <img alt="logo" src={trophy} />
              </div>
              <div className="col-md-7 col-xs-7">
                <div className="best-score text-unselect">
                  {/* style={{ backgroundColor: `${colorTwo}` }} */}
                  Best Score to Beat:
                  <div className="score text-unselect">{score.top}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="cus-score-btn-blue">
            <a href="#">Continue Playing</a>
          </div>
          <Footer
            one="inactive"
            two="active"
            three="inactive"
            four="inactive"
          />
        </div>
      </div>
    </>
  );
};
export default Score;
