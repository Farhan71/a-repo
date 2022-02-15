import React from 'react';
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import {Context} from "../../../context/Context"

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
        <div>
             <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={group}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setLocation(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {group}
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
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

                <textarea
            className="singlePostDescInput"
            value={patientState}
            onChange={(e) => setPatientState(e.target.value)}
          />

                <textarea
            className="singlePostDescInput"
            value={bags}
            onChange={(e) => setBags(e.target.value)}
          />

                <textarea
            className="singlePostDescInput"
            value={time}
            onChange={(e) => setTime(e.target.value)}
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
               <p>{location}</p>
               <p>{time}</p>
               <p>{bags}</p>
               <p>{group}</p> 
               <p>{contact}</p>
               <p>{patientState}</p>
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