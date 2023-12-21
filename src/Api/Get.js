import axios from "axios";
const Get=async(url)=>{

let sendResponse;

    await axios.get(url)
    .then(
        (response)=>{
            console.log("Response data :  " + response.data);
            sendResponse=response.data;
        },
        (error)=>{
            console.log("error : " + error.message);
            sendResponse=error.message;
        }
    )
        return sendResponse;
}
export default Get;