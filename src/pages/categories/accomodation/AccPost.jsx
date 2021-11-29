import React from 'react';
import { Link } from "react-router-dom";
const AccPost = ({ post }) => {
    const PF = "http://localhost:5000/images/";
    return (
        <div>
             {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        {/* <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div> */}
        <Link to={`/accommodationPost/${post._id}`} className="link">
          <span className="postTitle">{post.location}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
      <p className="postDesc">{post.locationDetails}</p>
      <p className="postDesc">{post.rent}</p>
      <p className="postDesc">{post.member}</p>
      <p className="postDesc">{post.contact}</p>
        </div>
    );
};

export default AccPost;
