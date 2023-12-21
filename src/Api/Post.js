import axios from "axios";
const Post=async(url,request)=>{


let sendResponse;
await axios.post(url,request)
.then(
    (response)=>{
        // console.log("response ",response.data);
        sendResponse=response.data;
    },
    (error)=>{
        // console.log(error);
        sendResponse=error.message;
    }
)
    return sendResponse;
}
export default Post;