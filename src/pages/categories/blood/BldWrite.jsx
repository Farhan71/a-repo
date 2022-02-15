import React from 'react';
import { useContext, useState } from "react";
import axios from "axios";
import {Context } from '../../../context/Context';

const BldWrite = () => {
    const [location, setLocation] = useState("");
    const [group, setGroup] = useState("");
    const [bags, setBags] = useState(""); 
    const [time, setTime] = useState("");
    const [contact, setContact] = useState("");
    const [patientState, setPatientState] = useState("");
    const [desc, setDesc] = useState("");

    const [file, setFile] = useState(null);
    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
          username: user.username,
          location,
          desc, group, time, bags, patientState, contact
        };
        if (file) {
          const data =new FormData();
          const filename = Date.now() + file.name;
          data.append("name", filename);
          data.append("file", file);
          newPost.photo = filename;
          try {
            await axios.post("/upload", data);
          } catch (err) {}
        }
        try {
          await axios.post("/blood", newPost);
          window.location.reload();
        } catch (err) {}
      };
    return (
        <div className="write container">
        {file && (
          <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
        )}
        <form className="writeForm" onSubmit={handleSubmit}>
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <input
              type="text"
              placeholder="Location"
              className="writeInput"
              autoFocus={true}
              onChange={e=>setLocation(e.target.value)}
            />
          </div>
          {/* <div className="writeFormGroup"> */}
          <input
              placeholder="Tell group"
              type="text"
              onChange={e=>setGroup(e.target.value)}
            ></input>
            <input
              placeholder="Tell Bags"
              type="text"
              // className="writeInput writeText"
              onChange={e=>setBags(e.target.value)}
            ></input>
            <input
              placeholder="Tell contact"
              type="text"
              // className="writeInput writeText"
              onChange={e=>setContact(e.target.value)}
            ></input> <br />
            <input
              placeholder="Tell time"
              type="text"
              // className="writeInput writeText"
              onChange={e=>setTime(e.target.value)}
            ></input> <br />
          <textarea
              placeholder="Tell patient State"
              type="text"
              // className="writeInput writeText"
              onChange={e=>setPatientState(e.target.value)}
            ></textarea>  <br />
            <textarea
              placeholder="Tell description"
              type="text"
              // className="writeInput writeText"
              onChange={e=>setDesc(e.target.value)}
            ></textarea> <br />
          {/* </div> */}
          {/* <button className="writeSubmit" type="submit"> */}
  
          <button  type="submit">
            Publish
          </button>
        </form>
      </div>
    );
};

export default BldWrite;