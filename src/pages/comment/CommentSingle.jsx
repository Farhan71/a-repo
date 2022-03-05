import React from 'react';
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import {Context} from "../../context/Context"

const CommentSingle = ({comment}) => {
    const loc = useLocation();
    const path = loc.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const { user } = useContext(Context);

    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
        const getPost = async () => {
          const res = await axios.get(`/comment/${comment._id}` );
          setPost(res.data);
          setDesc(res.data.desc);
        };
        getPost();
      }, [comment._id]);

      const handleDelete = async () => {
        try {
          await axios.delete(`/comment/${comment._id}`, {
            data: { username: user.username },
          });
          window.location.replace("/");
        } catch (err) {}
      };
    
      const handleUpdate = async () => {
        try {
          await axios.put(`/comment/${comment._id}`, {
            username: user.username,
            postID: path, 
            desc, 
          });
          setUpdateMode(false)
        } catch (err) {}
      };


    return (
    //     <div>
    //         <div>
    //          <span className="postDate">
    //       {new Date(comment.createdAt).toDateString()}
    //     </span>
    //   </div>
    //   <p className="commentDesc">{comment.desc}</p>
    //     </div>


    <div style={{border: '1px solid blue', height: '150px', width: '350px', marginTop:"50px"}}>
    <div className="singlePostWrapper">
{updateMode ? (
//  <input
//    type="text"
//    value={location}
//    className="singlePostTitleInput"
//    autoFocus
//    onChange={(e) => setLocation(e.target.value)}
//  />
<h1>edit comment</h1>
) : (
 <h1 className="singlePostTitle">
   {desc}
   {post.username === user?.username && (
     <div className="singlePostEdit">
       <i
         className="singlePostIcon far fa-edit"
         onClick={() => setUpdateMode(true)}
       ></i>
       <i
         className="singlePostIcon far fa-trash-alt"
         onClick={handleDelete}
       ></i>
     </div>
   )}
 </h1>
)}
<div className="singlePostInfo">
 <span className="singlePostAuthor">
   Commented By:
   <Link to={`/${comment.username}`} className="link">
     <b> {comment.username}</b>
   </Link>
 </span>
 <p>
   At: <span className="singlePostDate">
   {new Date(comment.createdAt).toDateString()}
 </span>
 </p>
</div>
{updateMode ? (
   <div>
       <textarea
   className="singlePostDescInput"
   value={desc}
   onChange={(e) => setDesc(e.target.value)}
 />

       
   </div>
 
 
) : (
  //  <div>
  //     <p className="singlePostDesc">{desc}</p>
  //  </div> 
  ""
 
)}
{updateMode && (
 <button className="singlePostButton" onClick={handleUpdate}>
   Update
 </button>
)}
</div>
</div>
      
       
    );
};

export default CommentSingle;