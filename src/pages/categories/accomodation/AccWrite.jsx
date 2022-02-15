import React from 'react';
import { useContext, useState } from "react";
import axios from "axios";
import {Context } from '../../../context/Context';


const AccWrite = () => {
  const [location, setLocation] = useState("");
  const [rent, setRent] = useState("");
  const [member, setMember] = useState("");
  const [contact, setContact] = useState("");
  const [locationDetails, setLocationDetails] = useState("");
  const [desc, setDesc] = useState("");
  
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      userId:user._id, 
      location,
      desc, rent, member, contact, locationDetails
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
      await axios.post("/accommodations", newPost);
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
          {/* <input
            type="text"
            placeholder="Location"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setLocation(e.target.value)}
          /> */}
        </div>


        <label for="Location">Choose a location:</label>
  <select onChange={e=>setLocation(e.target.value)} name="Location" id="Location">
    <option value="Sonapur">Sonapur</option>
    <option value="Dotter Hat">Dotter Hat</option>
    <option value="Roshid Colony">Roshid Colony</option>
    <option value="Fokirpur">Fokirpur</option>
    <option value="Garage">Garage</option>
    <option value="Pouro Bajar">Pouro Bajar</option>
    <option value="Boro Mosjid">Boro Mosjid</option>
    <option value="Town Hall">Town Hall</option>
    <option value="Housing">Housing</option>
    <option value="Hospital Road">Hospital Road</option>
    <option value="Bus Stand">Bus Stand</option>
    <option value="Maijdee Bajar">Maijdee Bajar</option>
  </select> 
        
      
 

        {/* <div className="writeFormGroup"> */}
        <input
            placeholder="Tell rent"
            type="text"
            onChange={e=>setRent(e.target.value)}
          ></input>
          <input
            placeholder="Tell member"
            type="text"
            // className="writeInput writeText"
            onChange={e=>setMember(e.target.value)}
          ></input>
          <input
            placeholder="Tell contact"
            type="text"
            // className="writeInput writeText"
            onChange={e=>setContact(e.target.value)}
          ></input> <br />
        <textarea
            placeholder="Tell location details"
            type="text"
            // className="writeInput writeText"
            onChange={e=>setLocationDetails(e.target.value)}
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

export default AccWrite;