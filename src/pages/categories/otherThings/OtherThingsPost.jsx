import React from 'react';
import { Link } from "react-router-dom";

const OtherThingsPost = ({post}) => {
    const PF = "http://localhost:5000/images/";
    return (
        <>
        <div style={{border: '1px solid red', height: '550px', width: '400px'}}>
             {post.photo ? <img className="postImg" src={PF + post.photo} style={{height: '200px', width: '200px'}} alt="" /> : <img src="https://us.123rf.com/450wm/roxanabalint/roxanabalint1712/roxanabalint171200111/91315171-for-sale-grunge-rubber-stamp-on-white-background-vector-illustration.jpg?ver=6" style={{height: '200px', width: '200px'}} alt="" /> }
      <div className="postInfo">
        
        {/* <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div> */}
        <Link to={`/accessoriesPost/${post._id}`} className="link">
          <span className="postTitle">Type: {post.type}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      
      <p className="postDesc">Quantity: {post.quantity}</p>
      <p className="postDesc">Price: {post.price}</p> 
      <p className="postDesc">Descriptions:{post.desc}</p>
      <p className="postDesc">Contact: {post.contact}</p>
        </div>
        <br />
        </>
    );
};

export default OtherThingsPost;