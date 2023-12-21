import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logo from "../Pages/1Logo";
import Intro from "../Pages/2Intro";
import Home from "../Pages/3Home";
import PageNotFound from "../Pages/404";
import Score from "../Pages/4Score";
import ErrorPage from "../Pages/500";
import Leaderboard from "../Pages/5Leaderboard";
import Prize from "../Pages/6.Prize";
import Terms from "../Pages/7.Terms";
import Faq from "../Pages/8.Faq";
import { Homepage } from "../Pages/Homepage";
import { Gamerprofile } from "../Pages/Gamerprofile";
import { Checkout } from "../Pages/Checkout";
import { Test } from "../Pages/Test";


const Routing=()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/" element={<Logo/>} exact={true}></Route> */}
                    <Route path="/" element={<Intro/>} exact={true}></Route>
                    <Route path="/home" element={<Home/>} exact={true}></Route>
                    <Route path="/score" element={<Score/>} exact={true}></Route>
                    <Route path="/leader" element={<Leaderboard/>} exact={true}></Route>
                    <Route path="/prize" element={<Prize/>} exact={true}></Route>
                    <Route path="/terms" element={<Terms/>} exact={true}></Route>
                    <Route path="/faq" element={<Faq/>} exact={true}></Route>
                    <Route path="*" element={<PageNotFound/>} exact={true}></Route>
                    <Route path="/error" element={<ErrorPage/>} exact={true}></Route>

                    <Route path="/homepage" element={<Homepage/>} exact={true}/>
                    <Route path="/profile" element={<Gamerprofile/>} exact={true}/>
                    <Route path="/checkout" element={<Checkout/>} exact={true}/>
                    <Route path="/test" element={<Test/>} exact={true}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default Routing;