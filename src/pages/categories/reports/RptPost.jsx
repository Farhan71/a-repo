import React from 'react';
import { Link } from "react-router-dom";

const RptPost = ({ post }) => {
    const PF = "http://localhost:5000/images/";
    return (
        <>
        <div style={{border: '1px solid red', height: '550px', width: '400px'}}>
             {post.photo ? <img className="postImg" src={PF + post.photo} style={{height: '200px', width: '200px'}} alt="" /> : <img src="https://www.via-ks.com/wp-content/uploads/2017/01/news-images-3.jpg" style={{height: '200px', width: '200px'}} alt="" /> }
      <div className="postInfo">
        <Link to={`/reportsPost/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
        </div>
        <br />
        </>
    );
};

export default RptPost;