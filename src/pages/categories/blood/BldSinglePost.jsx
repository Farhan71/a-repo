import React from 'react';
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import {Context} from "../../../context/Context"
import CommentBlock from '../../comment/CommentBlock';

const BldSinglePost = () => {
    const loc = useLocation();
    const path = loc.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const PF = "http://localhost:5000/images/";
    const { user } = useContext(Context);

    
    const [location, setLocation] = useState("");
    const [group, setGroup] = useState("");
    const [bags, setBags] = useState(""); 
    const [time, setTime] = useState("");
    const [contact, setContact] = useState("");
    const [patientState, setPatientState] = useState("");
    const [desc, setDesc] = useState("");
    
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
        const getPost = async () => {
          const res = await axios.get("/blood/" + path);
          setPost(res.data);
          setLocation(res.data.location);
          setGroup (res.data.group);
          setTime(res.data.time)
          setContact(res.data.contact);
          setBags (res.data.bags)
          setPatientState(res.data.patientState)
          setDesc(res.data.desc);
        };
        getPost();
      }, [path]);
    
      const handleDelete = async () => {
        try {
          await axios.delete(`/blood/${post._id}`, {
            data: { username: user.username },
          });
          window.location.replace("/");
        } catch (err) {}
      };
    
      const handleUpdate = async () => {
        try {
          await axios.put(`/blood/${post._id}`, {
            username: user.username,
            location,
            desc, time, bags, contact, group, patientState
          });
          setUpdateMode(false)
        } catch (err) {}
      };
    return (
        <div style={{border: '1px solid red', width: '400px'}}>
             <div className="singlePostWrapper">
             {post.photo ? 
        (<img src={PF + post.photo} style={{height: '200px', width: '200px'}} alt="" className="singlePostImg" /> ):
          <img src="https://previews.123rf.com/images/laracold/laracold1706/laracold170600015/80321483-creative-blood-motivation-information-donor-poster-blood-donation-world-blood-donor-day-banner-red-b.jpg" style={{height: '200px', width: '200px'}} alt="" /> }
        {updateMode ? (
          <div>
            <h1>Group: </h1>
          <input
            type="text"
            value={group}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setLocation(e.target.value)}
          />
          </div>
        ) : (
          <h1 className="singlePostTitle">
            Group: {group}
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
              <b>  {post.username}</b>
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
              
              <h6>Location: </h6> <textarea
            className="singlePostDescInput"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          /> <br />

            <h6>Date and Time: </h6> <textarea
            className="singlePostDescInput"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          /> <br />

          <h6>Bags: </h6>  <textarea
            className="singlePostDescInput"
            value={bags}
            onChange={(e) => setBags(e.target.value)}
          /> <br />
              
              
              <h6>Patient State: </h6>  <textarea
            className="singlePostDescInput"
            value={patientState}
            onChange={(e) => setPatientState(e.target.value)}
          /> <br />

            <h6>Descriptions</h6>
                <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          /> <br />

                

              <h6>Contact: </h6>  <textarea
            className="singlePostDescInput"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
            </div>
          
          
        ) : (
            <div>
               
               <p> Location: {location}</p>
               <p> Date and Time: {time}</p>
               <p> Bags: {bags}</p>
               <p> Patient State: {patientState}</p>
               <p className="singlePostDesc"> Descriptions: {desc}</p>
               <p> Contact: {contact}</p>
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

export default BldSinglePost;