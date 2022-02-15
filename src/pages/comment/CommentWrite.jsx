import React from 'react';
import { useContext, useState } from "react";
import axios from "axios";
import {Context } from "../../context/Context";

const CommentWrite = ({postID}) => {
    const [desc, setDesc] = useState("");
    const { user } = useContext(Context);
    console.log(postID)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
          username: user.username,
          desc, postID: postID,  
        };
        try {
          await axios.post("/comment", newPost);
          window.location.reload();
        } catch (err) {}
      };
    return (
        // <div>
        //     <label htmlFor="">Write Comment</label>
        //     <input type="text" />
        //     <input type="submit" value="Submit" />
        // </div>

        <div className="write container">
      <form className="writeForm" onSubmit={handleSubmit}>
          <textarea
            placeholder="Write Comment"
            type="text"
            onChange={e=>setDesc(e.target.value)}
          ></textarea> <br />

        <button  type="submit">
          Publish
        </button>
      </form>
    </div>



    );
};

export default CommentWrite;