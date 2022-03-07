import React from 'react';
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import {Context} from "../../../context/Context"
import "./bldPost.css"

const BldPost = ({post}) => {
    const [auther, setAuther] = useState([]);
    const [commentsNo, setCommentsNo] = useState([]);
    const PF = "http://localhost:5000/images/";

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

<Link to={`/bloodPost/${post._id}`} className="link">

  <div className="card mb-3">
    
    
    <div className="card-body">


    <div className="settingsPP">
                {auther.profilePic ? ( <img
              src={PF+auther.profilePic}
              alt=""
            />) : (<img alt='' src={"http://www.megaweb.co.th/demo/travus/components/com_spbooking/assets/images/default.png"}></img>)}
           
            </div>
            
      
        
          
          <h3 className="card-title">{post.username}</h3>
          <h6 class="card-subtitle mb-2 text-muted"><span>{new Date(post.createdAt).toDateString()}</span></h6>
      
        
     
      
      <h3 className="card-title">Group: {post.group}</h3>
      <p className="card-text">Time and Date: {post.time}</p>
      <p className="card-text">Bags: {post.bags}</p>

      <p className="card-text">Description: {post.desc}</p>
    
        

        </div>
      

        {post.photo ? <img className="card-img-top" src={PF + post.photo} alt="" /> : <img src="https://previews.123rf.com/images/laracold/laracold1706/laracold170600015/80321483-creative-blood-motivation-information-donor-poster-blood-donation-world-blood-donor-day-banner-red-b.jpg" alt="" /> }
        <p ><i class="fa-solid fa-comment">Comments</i></p> 
        <p>{commentsNo}</p>

        </div>

        </Link>
       
        </div>
    );
};

export default BldPost;