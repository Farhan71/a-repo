import React from 'react';
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import {Context} from "../../../context/Context"
import CommentBlock from '../../comment/CommentBlock';

const OtherThingsSinglePost = () => {
    const loc = useLocation();
    const path = loc.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const PF = "http://localhost:5000/images/";
    const { user } = useContext(Context);
  
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [contact, setContact] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);
  
    useEffect(() => {
      const getPost = async () => {
        const res = await axios.get("/otherThings/" + path);
        setPost(res.data);
        setType(res.data.type);
        setQuantity (res.data.quantity);
        setPrice(res.data.price)
        setContact(res.data.contact);
        setDesc(res.data.desc);
      };
      getPost();
    }, [path]);
  
    const handleDelete = async () => {
      try {
        await axios.delete(`/otherThings/${post._id}`, {
          data: { username: user.username },
        });
        window.location.replace("/");
      } catch (err) {}
    };
  
    const handleUpdate = async () => {
      try {
        await axios.put(`/otherThings/${post._id}`, {
          username: user.username,
          type,
          desc, quantity, price, contact
        });
        setUpdateMode(false)
      } catch (err) {}
    };
    return (
        <div style={{border: '1px solid red', height: '500px', width: '400px'}}>
        <div className="singlePostWrapper">
        {post.photo ? 
        (<img src={PF + post.photo} style={{height: '200px', width: '200px'}} alt="" className="singlePostImg" /> ):
          <img src="https://us.123rf.com/450wm/roxanabalint/roxanabalint1712/roxanabalint171200111/91315171-for-sale-grunge-rubber-stamp-on-white-background-vector-illustration.jpg?ver=6" style={{height: '200px', width: '200px'}} alt="" /> }
   {updateMode ? (
    <div>
      <h1>Type: </h1>
       <input
       type="text"
       value={type}
       className="singlePostTitleInput"
       autoFocus
       onChange={(e) => setType(e.target.value)}
     />
    </div>
   ) : (
     <h1 className="singlePostTitle">
       Type: {type}
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
       Posted By:
       <Link to={`/${post.username}`} className="link">
         <b> {post.username}</b>
       </Link>
     </span>
     <p> At: 
     <span className="singlePostDate">
       {new Date(post.createdAt).toDateString()}
     </span>
     </p>
     
   </div>
   {updateMode ? (
       <div>


         <h6>Quantity: </h6>  <textarea
       className="singlePostDescInput"
       value={quantity}
       onChange={(e) => setQuantity(e.target.value)}
     /> <br />

         <h6>Price: </h6>  <textarea
       className="singlePostDescInput"
       value={price}
       onChange={(e) => setPrice(e.target.value)}
     /> <br />

      <h6>Description: </h6>  <textarea
       className="singlePostDescInput"
       value={desc}
       onChange={(e) => setDesc(e.target.value)}
     /> <br />

         <h6>Contact: </h6>  <textarea
       className="singlePostDescInput"
       value={contact}
       onChange={(e) => setContact(e.target.value)}
     /> <br />
       </div>
     
     
   ) : (
       <div>
          <p>Quantity:{quantity}</p>
          <p>Price: {price}</p>
          <p className="singlePostDesc">Description:{desc}</p>
          <p>Contact: {contact}</p>
          <CommentBlock></CommentBlock>
       </div>
     
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

export default OtherThingsSinglePost;