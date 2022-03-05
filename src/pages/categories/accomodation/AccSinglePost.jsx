import React from 'react';
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import {Context} from "../../../context/Context"
import CommentBlock from '../../comment/CommentBlock';

const AccSinglePost = () => {
  const loc = useLocation();
  const path = loc.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);

  const [location, setLocation] = useState("");
  const [rent, setRent] = useState("");
  const [member, setMember] = useState("");
  const [contact, setContact] = useState("");
  const [locationDetails, setLocationDetails] = useState("");
  const [desc, setDesc] = useState("");
  
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/accommodations/" + path);
      setPost(res.data);
      setLocation(res.data.location);
      setRent (res.data.rent);
      setMember(res.data.member)
      setContact(res.data.contact);
      setLocationDetails (res.data.locationDetails)
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/accommodations/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/accommodations/${post._id}`, {
        username: user.username,
        userId: user._id,
        location,
        desc, rent, member, contact, locationDetails
      });
      setUpdateMode(false)
    } catch (err) {}
  };

    return (

      // <div style={{border: '1px solid red', height: '550px', width: '400px'}}>
      //        {post.photo ? <img className="postImg" src={PF + post.photo} style={{height: '200px', width: '200px'}} alt="" /> : <img src="https://www.wantedinrome.com/i/preview/storage/uploads/2017/05/Acc-Vacant-in_light.jpg" style={{height: '200px', width: '200px'}} alt="" /> }


        <div style={{border: '1px solid red', height: '550px', width: '400px'}}>
             <div className="singlePostWrapper">
        {post.photo ? 
        (<img src={PF + post.photo} style={{height: '200px', width: '200px'}} alt="" className="singlePostImg" /> ):
          <img src="https://www.wantedinrome.com/i/preview/storage/uploads/2017/05/Acc-Vacant-in_light.jpg" style={{height: '200px', width: '200px'}} alt="" /> }
      
        {updateMode ? (

          <div>
            <h1>Location: </h1>
            <input
            type="text"
            value={location}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setLocation(e.target.value)}
          />
          </div>
         
        ) : (
          <h1 className="singlePostTitle">
            Location: {location}
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


             <h6>Location Details: </h6>   <textarea
            className="singlePostDescInput"
            value={locationDetails}
            onChange={(e) => setLocationDetails(e.target.value)}
          /> <br />

             <h6>Rent: </h6>   <textarea
            className="singlePostDescInput"
            value={rent}
            onChange={(e) => setRent(e.target.value)}
          /> <br />

             <h6>Member: </h6>   <textarea
            className="singlePostDescInput"
            value={member}
            onChange={(e) => setMember(e.target.value)}
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
              
                <p>Location Details: {locationDetails}</p>
                <p> Rent: {rent}</p>
                <p> Member: {member}</p>
               <p className="singlePostDesc"> Descriptions: {desc}</p>
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

export default AccSinglePost;