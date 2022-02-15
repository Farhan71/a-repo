import React from 'react';
import { Link } from "react-router-dom";

const EntPost = ({post}) => {
    const PF = "http://localhost:5000/images/";
    return (
        <>
        <div style={{border: '1px solid red', height: '600px', width: '400px'}}>
             {post.photo ? <img className="postImg" src={PF + post.photo} style={{height: '200px', width: '200px'}} alt="" /> : <img src="https://image.shutterstock.com/image-vector/grunge-rubber-stamp-text-look-260nw-197453309.jpg" style={{height: '200px', width: '200px'}} alt="" /> }

      <div className="postInfo">
        <Link to={`/entrepreneurPost/${post._id}`} className="link">
          <span className="postTitle">{post.startUpName}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
      <p className="postDesc">{post.locationRange}</p>
      <p className="postDesc">{post.startUpType}</p>
      <p className="postDesc">{post.productType}</p>
      <p className="postDesc">{post.price}</p>
      <p className="postDesc">{post.quantity}</p>
      <p className="postDesc">{post.contact}</p>
        </div>
        <br />
        </>
    );
};

export default EntPost;