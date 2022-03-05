import React from 'react';
import { Link } from "react-router-dom";

const BookPost = ({post}) => {
    const PF = "http://localhost:5000/images/";
    return (
      <>
        <div style={{border: '1px solid red', height: '550px', width: '400px'}}>
             {post.photo ? <img style={{height: '200px', width: '200px'}} className="postImg" src={PF + post.photo} alt="" /> : <img src="https://www.wantedinrome.com/i/preview/storage/uploads/2017/05/Acc-Vacant-in_light.jpg" style={{height: '200px', width: '200px'}} alt="" />}
      <div className="postInfo">
        
        <Link to={`/bookPost/${post._id}`} className="link">
          <span className="postTitle">Book Name: {post.bookName}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">Book Author: {post.bookAuthor}</p>
      <p className="postDesc">Department: {post.department}</p>
      <p className="postDesc">Quantity: {post.quantity}</p>
      <p className="postDesc">Price: {post.price}</p>
      <p className="postDesc">Description: {post.desc}</p>
      <p className="postDesc">Contact: 0{post.contact}</p>
      
      
        </div>
        <br />
        </>
    );
};

export default BookPost;