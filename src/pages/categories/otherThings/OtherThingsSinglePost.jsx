import React from 'react';
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import {Context} from "../../../context/Context"

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
        setType(res.data.Type);
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
        <div>
        <div className="singlePostWrapper">
   {post.photo && (
     <img src={PF + post.photo} alt="" className="singlePostImg" />
   )}
   {updateMode ? (
     <input
       type="text"
       value={type}
       className="singlePostTitleInput"
       autoFocus
       onChange={(e) => setType(e.target.value)}
     />
   ) : (
     <h1 className="singlePostTitle">
       {type}
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
       Author:
       <Link to={`/${post.username}`} className="link">
         <b> {post.username}</b>
       </Link>
     </span>
     <span className="singlePostDate">
       {new Date(post.createdAt).toDateString()}
     </span>
   </div>
   {updateMode ? (
       <div>
           <textarea
       className="singlePostDescInput"
       value={desc}
       onChange={(e) => setDesc(e.target.value)}
     />

           <textarea
       className="singlePostDescInput"
       value={type}
       onChange={(e) => setType(e.target.value)}
     />


           <textarea
       className="singlePostDescInput"
       value={quantity}
       onChange={(e) => setQuantity(e.target.value)}
     />

           <textarea
       className="singlePostDescInput"
       value={price}
       onChange={(e) => setPrice(e.target.value)}
     />

           <textarea
       className="singlePostDescInput"
       value={contact}
       onChange={(e) => setContact(e.target.value)}
     />
       </div>
     
     
   ) : (
       <div>
          <p className="singlePostDesc">{desc}</p>
          <p>{type}</p>
          <p>{quantity}</p>
          <p>{price}</p>
          <p>{contact}</p>
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