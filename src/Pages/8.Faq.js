import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import Footer from "../Components/Footer";
import score_icon from "../Images/score-icon.png";
import menu_icon from "../Images/menu-icon.svg";
import Menu from "../Components/Menu";
import { sendTermsApi } from "../Data/data";
import Post from "../Api/Post";
import Loader from "../Components/Loader";

const Faq = () => {

   //to go on other page
   const navigate=useNavigate();

   //To Load
   useEffect(()=>{
    //checkColor();
     gettingTerms();
     // eslint-disable-next-line
   },[]);
 
   //Hook to Store Data
   const[data, setData]=useState('');
 
   //Getting Terms From Backend
   const gettingTerms=()=>{

     let serviceId=localStorage.getItem("serviceId");
     console.log("service id is " +serviceId)
     let request={"type":"faq","serviceId":serviceId};
     let promise=Post(sendTermsApi,request);
     promise.then(e=>{
        console.log("e--- ",e);
       handleResponse(e);
     })
   }
 
   //Method to handle Response
   const handleResponse = (e) => {
    if (e === 'Network Error' || e === null) {
      navigate('/error');
    } else {
      if (e.response && e.response.data) {
        //console.log('terms' + e.response.data);
        setData(e.response.data);
        setLoader('none');
      } else {
        navigate('/error');
      }
    }
  };
  

   //Hook to store loader state
   const[loader,setLoader]=useState('block');

   //Hook to Store Color
//  const[color,setColor]=useState('');
//  const[colorTwo,setColorTwo]=useState('');

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
      <Menu one="inactive"two="inactive"three="inactive"four="inactive"five="inactive"six="active"/>
      <div className="container white-bg">
        <div className="cus-header">
          <div className="col-md-6 col-xs-6">
            <div className="page-icon">
              <img alt="logo" src={score_icon} /> FAQ
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
              <span className="cursor-pointer">menu</span>
            </span>
          </div>
        </div>
        <div className="container-area">
          <span className="cus-btn-blue container-area-span"
            >
              {/* style={{color:`${color}`,backgroundColor:`${colorTwo}`}} */}
            {" "}
            FAQ
          </span>

          <div className="my-terms-div">
            {parse(data)}
          </div>
         
        <Footer/>
        </div>
      </div>
    </div>
  );
};
export default Faq;



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import parse from "html-react-parser";
// import Footer from "../Components/Footer";
// import score_icon from "../Images/score-icon.png";
// import menu_icon from "../Images/menu-icon.svg";
// import Menu from "../Components/Menu";
// import { sendTermsApi } from "../Data/data";
// import Post from "../Api/Post";
// import Loader from "../Components/Loader";
// import axios from "axios";

// const Faq = () => {
//   const navigate = useNavigate();
//   const [data, setData] = useState('');
//   const [loader, setLoader] = useState('block');

//   useEffect(() => {
//     gettingTerms();
//   }, []);

//   const gettingTerms = () => {
//     let serviceId = localStorage.getItem("serviceId");
//     //let serviceId=11;
//     let request = { "type": "faq", "serviceId": serviceId };
//     let promise = Post(sendTermsApi, request);
  
//     promise.then(e => {
//       handleResponse(e);
//     }).catch(error => {
//       // Handle errors here
//       console.error(error);
//       navigate('/error');
//     });
//   }

//   const handleResponse = (e) => {
//     if (e === 'Network Error' || e === null) {
//       // Handle network errors
//       console.error('Network Error');
//       navigate('/error');
//     } else {
//       if (e.response && e.response.data) {
//         console.log('terms', e.response.data);
//         setData(e.response.data);
//         setLoader('none'); // Hide loader when data is ready
//       } else {
//         // Handle the case where e.response.data is missing or undefined
//         console.error('Invalid response data');
//         navigate('/error');
//       }
//     }
//   };

//   return (
//     <div className="text-unselect">
//       <Loader value={loader} />
//       <Menu one="inactive" two="inactive" three="inactive" four="inactive" five="inactive" six="active" />
//       <div className="container white-bg">
//         <div className="cus-header">
//           <div className="col-md-6 col-xs-6">
//             <div className="page-icon">
//               <img alt="logo" src={score_icon} /> FAQ
//             </div>
//           </div>
//           <div className="col-md-6 col-xs-6">
//             <span
//               className="cus-menu navbar-toggle collapsed"
//               data-toggle="collapse"
//               data-target="#bs-example-navbar-collapse-1"
//               aria-expanded="false"
//             >
//               <img alt="logo" src={menu_icon} />
//               <span className="cursor-pointer">menu</span>
//             </span>
//           </div>
//         </div>
//         <div className="container-area">
//           <span className="cus-btn-blue container-area-span">
//             FAQ
//           </span>
//           <div className="my-terms-div">
//             {parse(data)}
//           </div>
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Faq;
