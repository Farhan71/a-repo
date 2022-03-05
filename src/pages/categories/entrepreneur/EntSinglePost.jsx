import React from 'react';
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import {Context} from "../../../context/Context"
import CommentBlock from '../../comment/CommentBlock';

const EntSinglePost = () => {
    const loc = useLocation();
    const path = loc.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const PF = "http://localhost:5000/images/";
    const { user } = useContext(Context);

    const [locationRange, setLocationRange] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [startUpType, setStartUpType] = useState("");
    const [productType, setProductType] = useState("");
    const [contact, setContact] = useState("");
    const [startUpName, setStartUpName] = useState("");
    const [desc, setDesc] = useState("");

    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
        const getPost = async () => {
          const res = await axios.get("/entrepreneur/" + path);
          setPost(res.data);
          setLocationRange(res.data.locationRange);
          setPrice (res.data.price); 
          setQuantity(res.data.quantity);
          setContact(res.data.contact);
          setStartUpType (res.data.startUpType)
          setProductType (res.data.productType)
          setStartUpName (res.data.startUpName)
          setDesc(res.data.desc);
        };
        getPost();
      }, [path]);
    
      const handleDelete = async () => {
        try {
          await axios.delete(`/entrepreneur/${post._id}`, {
            data: { username: user.username },
          });
          window.location.replace("/");
        } catch (err) {}
      };
    
      const handleUpdate = async () => {
        try {
          await axios.put(`/accommodations/${post._id}`, {
            username: user.username,
            locationRange,
            desc, price, quantity, contact, startUpName, startUpType, productType
          });
          setUpdateMode(false)
        } catch (err) {}
      };
    
  
    return (
        <div style={{border: '1px solid red', height: '650px', width: '400px'}}>
        <div className="singlePostWrapper">
        {post.photo ? 
        (<img src={PF + post.photo} style={{height: '200px', width: '200px'}} alt="" className="singlePostImg" /> ):
          <img src="https://image.shutterstock.com/image-vector/grunge-rubber-stamp-text-look-260nw-197453309.jpg" style={{height: '200px', width: '200px'}} alt="" /> }
   {updateMode ? (
     <div>
       <h1>StartUp Name: </h1>
       <input
       type="text"
       value={startUpName}
       className="singlePostTitleInput"
       autoFocus
       onChange={(e) => setStartUpName(e.target.value)}
     />
     </div>
   ) : (
     <h1 className="singlePostTitle">
       StartUp Name: {startUpName}
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

<h6>StartUp Type: </h6>  <textarea
       className="singlePostDescInput"
       value={startUpType}
       onChange={(e) => setStartUpType(e.target.value)}
     /> <br />

        <h6>Product Type: </h6> <textarea
       className="singlePostDescInput"
       value={productType}
       onChange={(e) => setProductType(e.target.value)}
     /> <br />

         <h6>Price: </h6>  <textarea
       className="singlePostDescInput"
       value={price}
       onChange={(e) => setPrice(e.target.value)}
     /> <br />

         <h6>Quantity: </h6>  <textarea
       className="singlePostDescInput"
       value={quantity}
       onChange={(e) => setQuantity(e.target.value)}
     /> <br />

<h6>Location Range: </h6>   <textarea
       className="singlePostDescInput"
       value={locationRange}
       onChange={(e) => setLocationRange(e.target.value)}
     /> <br />

<h6>Description: </h6> <textarea
       className="singlePostDescInput"
       value={desc}
       onChange={(e) => setDesc(e.target.value)}
     /> <br />

        <h6>Contact: </h6>   <textarea
       className="singlePostDescInput"
       value={contact}
       onChange={(e) => setContact(e.target.value)}
     /> <br />
       </div>
     
     
   ) : (
       <div>
          <p>StartUp Type: {startUpType}</p>
          <p>Product Type: {productType}</p> 
          <p>Price: {price}</p>
          <p>Quantity: {quantity}</p>  
          <p>Location Range: {locationRange}</p>
          <p className="singlePostDesc">Description: {desc}</p>
          <p>Contact: 0{contact}</p>
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

export default EntSinglePost;