import React from 'react';
import { Link } from "react-router-dom";

const BldPost = ({post}) => {
    const PF = "http://localhost:5000/images/";
    return (
        <>
        <div style={{border: '1px solid red', height: '550px', width: '400px'}}>
             {post.photo ? <img className="postImg" src={PF + post.photo} style={{height: '200px', width: '200px'}} alt="" /> : <img src="https://previews.123rf.com/images/laracold/laracold1706/laracold170600015/80321483-creative-blood-motivation-information-donor-poster-blood-donation-world-blood-donor-day-banner-red-b.jpg" style={{height: '200px', width: '200px'}} alt="" /> }
      <div className="postInfo">
        <Link to={`/bloodPost/${post._id}`} className="link">
          <span className="postTitle">Group: {post.group}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      
      
      <p className="postDesc">Location: {post.location}</p>
      <p className="postDesc">Time and Date: {post.time}</p>
      <p className="postDesc">Bags: {post.bags}</p>
      <p className="postDesc">Patient State: {post.patientState}</p>
      <p className="postDesc">Description: {post.desc}</p>
      <p className="postDesc">Contact: {post.contact}</p>
        </div>
        <br />
        </>
    );
};

export default BldPost;