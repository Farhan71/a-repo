import React from 'react';
import { Link } from "react-router-dom";

const BookPost = ({post}) => {
    const PF = "http://localhost:5000/images/";
    return (
        <div>
             {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        
        <Link to={`/bookPost/${post._id}`} className="link">
          <span className="postTitle">{post.bookName}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.bookAuthor}</p>
      <p className="postDesc">{post.quantity}</p>
      <p className="postDesc">{post.price}</p>
      <p className="postDesc">{post.department}</p>
      <p className="postDesc">{post.contact}</p>
      <p className="postDesc">{post.desc}</p>

        </div>
    );
};

export default BookPost;