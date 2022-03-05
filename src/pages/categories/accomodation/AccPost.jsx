import React from 'react';
import { Link } from "react-router-dom";
const AccPost = ({ post }) => {
    const PF = "http://localhost:5000/images/";
    return (
      <>
        <div style={{border: '1px solid red', height: '550px', width: '400px'}}>
             {post.photo ? <img className="postImg" src={PF + post.photo} style={{height: '200px', width: '200px'}} alt="" /> : <img src="https://www.wantedinrome.com/i/preview/storage/uploads/2017/05/Acc-Vacant-in_light.jpg" style={{height: '200px', width: '200px'}} alt="" /> }
      <div className="postInfo">
        
        {/* <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div> */}
        <Link to={`/accommodationPost/${post._id}`} className="link">
          <span className="postTitle">Location: {post.location}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">Location Details: {post.locationDetails}</p>
      
      
      <p className="postDesc">Rent: {post.rent}</p>
      <p className="postDesc">Member: {post.member}</p>
      <p className="postDesc"> Descriptions: {post.desc}</p>
      <p className="postDesc">Contact: 0{post.contact}</p>
        </div>
        <br />
        </>
    );
};

export default AccPost;
