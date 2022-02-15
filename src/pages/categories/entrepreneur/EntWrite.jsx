import React from 'react';
import { useContext, useState } from "react";
import axios from "axios";
import {Context } from '../../../context/Context';

const EntWrite = () => {
    const [locationRange, setLocationRange] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [startUpType, setStartUpType] = useState("");
    const [productType, setProductType] = useState("");
    const [contact, setContact] = useState("");
    const [startUpName, setStartUpName] = useState("");
    const [desc, setDesc] = useState("");

    const [file, setFile] = useState(null);
    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
          username: user.username,
          locationRange,
         desc, price, quantity, contact, startUpName, startUpType, productType
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
          await axios.post("/entrepreneur", newPost);
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
              placeholder="StartUp Name"
              className="writeInput"
              autoFocus={true}
              onChange={e=>setStartUpName(e.target.value)}
            />
          </div>
          {/* <div className="writeFormGroup"> */}
          <input
              placeholder="Tell startup Type"
              type="text"
              onChange={e=>setStartUpType(e.target.value)}
            ></input>
            <input
              placeholder="Tell Product Type"
              type="text"
              // className="writeInput writeText"
              onChange={e=>setProductType(e.target.value)}
            ></input>
            <input
              placeholder="Tell contact"
              type="text"
              // className="writeInput writeText"
              onChange={e=>setContact(e.target.value)}
            ></input> <br />
            <input
              placeholder="Tell price"
              type="text"
              // className="writeInput writeText"
              onChange={e=>setPrice(e.target.value)}
            ></input> <br />
            <input
              placeholder="Tell quantity"
              type="text"
              // className="writeInput writeText"
              onChange={e=>setQuantity(e.target.value)} 
            ></input> <br />
          <textarea
              placeholder="Tell location Range"
              type="text"
              // className="writeInput writeText"
              onChange={e=>setLocationRange(e.target.value)} 
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

export default EntWrite;