import React from 'react';
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {Context} from "../../../context/Context"

const AccPost = ({ post }) => {
    const [auther, setAuther] = useState([]);
    const [commentsNo, setCommentsNo] = useState([]);
    const PF = "http://localhost:5000/images/";
    const { user } = useContext(Context);

    useEffect(() =>{
      const getId = async () => {
          const fetchUser = await axios.get(`users/${post.userId}`)
          console.log(fetchUser.data)
          setAuther(fetchUser.data)
          // setId(res.data)
      };
      getId();
  }, [post.userId])

  useEffect(() =>{
    const fetchCommentsNo = async () => {
        const res = await axios.get(`/comment/${post._id}/count`);
        setCommentsNo(res.data)
    };
    fetchCommentsNo();
},[post._id])
    
    return (
      <div className="post-body">

<Link to={`/accommodationPost/${post._id}`} className="link">
<div className="card mb-3 "   >
  
  
  <div className="card-body"> 
  <div className="settingsPP">
                {auther.profilePic ? ( <img
              src={PF+auther.profilePic}
              alt=""
            />) : (<img alt='' src={"http://www.megaweb.co.th/demo/travus/components/com_spbooking/assets/images/default.png"}></img>)}
           
            </div>
  
  <h3 className="card-title">{post.username}</h3>
    <h6 class="card-subtitle mb-2 text-muted"><span>{new Date(post.createdAt).toDateString()}</span></h6>
    <h5 className="card-title">Location: {post.location}</h5>
    <p className="card-text">Rent: {post.rent}</p>
    <p className="card-text">Descriptions: {post.desc}</p>
    
          
        
  </div>
  {post.photo ? <img  className="card-img-top" src={PF + post.photo}  alt="" /> : <img src="https://www.wantedinrome.com/i/preview/storage/uploads/2017/05/Acc-Vacant-in_light.jpg" alt="" /> }
  <p ><i class="fa-solid fa-comment">Comments</i></p> 
  <p>{commentsNo}</p>
</div>
</Link>

        
        </div>
    );
};

export default AccPost;
