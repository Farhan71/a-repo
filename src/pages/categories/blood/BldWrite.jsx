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
          userId:user._id, 
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
          <img className="writeImg" style={{height: '200px', width: '200px'}} src={URL.createObjectURL(file)} alt="" />
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
            {/* <input
               placeholder="Tell group"
               type="text"
              className="writeInput"
              autoFocus={true}
              onChange={e=>setGroup(e.target.value)}
            /> */}
          </div>
          {/* <div className="writeFormGroup"> */}


          <label for="Group">Blood Group:</label>
                    <select onChange={(e) =>  {setGroup(e.target.value)    

                    }
                    
                    } name="Group" id="Group">
                      <option value="A Positive">A+</option>
                      <option value="A Negative">A-</option>
                      <option value="B Positive">B+</option>
                      <option value="B Negative">B-</option>
                      <option value="AB Positive">AB+</option>
                      <option value="AB Negative">AB-</option>
                      <option value="O Positive">O+</option>
                      <option value="O Negative">O-</option>
                    </select> 


          <input
             
              type="text"
              placeholder="Location"
              onChange={e=>setLocation(e.target.value)}
            ></input>
            <input
              placeholder="Tell time"
              type="text"
              // className="writeInput writeText"
              onChange={e=>setTime(e.target.value)}
            ></input> <br />
            <input
              placeholder="Tell Bags"
              type="text"
              // className="writeInput writeText"
              onChange={e=>setBags(e.target.value)}
            ></input>
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

              <input
              placeholder="Tell contact"
              type="text"
              // className="writeInput writeText"
              onChange={e=>setContact(e.target.value)}
            ></input> <br />
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