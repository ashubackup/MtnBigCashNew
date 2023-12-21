import React from "react";
import "../Css/newcss.css";
import back from "../NewImages/back.png";
import gamewin from "../NewImages/gamewin.png";
import mtn1 from "../NewImages/mtn1.png";
import mtn2 from "../NewImages/mtn2.png";
import mtnnext from "../NewImages/mtn-next.png";
import homewhiteicon from "../NewImages/home-white-icon.svg";
import scoreicon from "../NewImages/score-icon.svg";
import leadericon from "../NewImages/leader-icon.svg";
import giftblue from "../NewImages/gift-blue.svg";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

export const Checkout = () => {
  return (
    <div className="container bg-color-yellow check-out-sec">
      <div className="check-out">
        <div className="check-out-back">
        <Link to="/profile" >
        <img src={back} />
        </Link>
          
        </div>
        <div className="check-out-c">Checkout</div>
      </div>
      <div className="Payment-Method">
        <div className="gamewin">
          <div className="Gamewin-img">
            <img src={gamewin} />
          </div>
          <div className="Coins">
            <h4>Gamewin</h4>
            <p>10 000 Coins</p>
            <span>5 Hours Playtime</span>
          </div>
          <div className="rs">
            <p>R10</p>
          </div>
        </div>
        <div className="payment-method-inner">
          <h3>Payment Method</h3>
          <div className="payment-method-inner-card">
            <div className="mtn-card">
              <div className="mtn-card-img">
                <img src={mtn1} />
              </div>
              <div className="mtn-c">
                <p>MTN Airtime</p>
                <span>**** **** **** 4820</span>
              </div>
            </div>
            <div className="mtn-icon">
              <img src={mtnnext} />
            </div>
          </div>
          <div className="payment-method-inner-card">
            <div className="mtn-card">
              <div className="mtn-card-img">
                <img src={mtn2} />
              </div>
              <div className="mtn-c">
                <p>MTN Airtime</p>
                <span>**** **** **** 4820</span>
              </div>
            </div>
            <div className="mtn-icon">
              <img src={mtnnext} />
            </div>
          </div>
          <div className="payment-method-inner-card">
            <div className="mtn-card">
              <div className="mtn-card-img">
                <img src={mtn1} />
              </div>
              <div className="mtn-c">
                <p>MTN Airtime</p>
                <span>**** **** **** 4820</span>
              </div>
            </div>
            <div className="mtn-icon">
              <img src={mtnnext} />
            </div>
          </div>
        </div>
      </div>
      <div className="check-out-btn">
        <a href="#">Check Out</a>
      </div>

      {/* <div className="footer-menu">
        <div className="col-md-3 col-xs-3">
          <Link to="/homepage">
            <img src={homewhiteicon} />
            Home{" "}
          </Link>
        </div>
        <div className="col-md-3 col-xs-3">
          <Link to="/score">
            <img src={scoreicon} />
            Score{" "}
          </Link>
        </div>
        <div className="col-md-3 col-xs-3">
          <Link to="/leader">
            <img src={leadericon} />
            Leaderboard{" "}
          </Link>
        </div>
        <div className="col-md-3 col-xs-3">
          <Link to="/prize">
            {" "}
            <img src={giftblue} />
            Prizes
          </Link>
        </div>
      </div> */}
      <Footer
              one="inactive"
              two="inactive"
              three="inactive"
              four="inactive"
            />
    </div>
  );
};
