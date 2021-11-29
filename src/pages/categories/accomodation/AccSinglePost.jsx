import React from 'react';
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import {Context} from "../../../context/Context"

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
        location,
        desc, rent, member, contact, locationDetails
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
            value={location}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setLocation(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {location}
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
            value={locationDetails}
            onChange={(e) => setLocationDetails(e.target.value)}
          />

                <textarea
            className="singlePostDescInput"
            value={rent}
            onChange={(e) => setRent(e.target.value)}
          />

                <textarea
            className="singlePostDescInput"
            value={member}
            onChange={(e) => setMember(e.target.value)}
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
               <p>{rent}</p>
               <p>{member}</p>
               <p>{contact}</p>
               <p>{locationDetails}</p>
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