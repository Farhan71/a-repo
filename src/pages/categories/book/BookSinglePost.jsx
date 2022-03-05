import React from 'react';
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import {Context} from "../../../context/Context"
import CommentBlock from '../../comment/CommentBlock';

const BookSinglePost = () => {
    const loc = useLocation();
  const path = loc.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);

    const [bookName, setBookName] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");
    const [quantity, setQuantity] = useState("");
    const [department, setDepartment] = useState("");
    const [price, setPrice] = useState("");
    const [contact, setContact] = useState("");
    const [desc, setDesc] = useState("");

  const [updateMode, setUpdateMode] = useState(false);
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/books/" + path);
      setPost(res.data);
      setBookName(res.data.bookName);
      setBookAuthor (res.data.bookAuthor);
      setQuantity(res.data.quantity)
      setContact(res.data.contact);
      setDepartment (res.data.department);
      setPrice (res.data.price);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/books/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/books/${post._id}`, {
        username: user.username,
        bookName, bookAuthor, department, price, quantity,
        desc,  contact
      });
      setUpdateMode(false)
    } catch (err) {}
  };
    return (
        <div style={{border: '1px solid red', height: '600px', width: '400px'}}>
             <div className="singlePostWrapper">
             {post.photo ? 
        (<img src={PF + post.photo} style={{height: '200px', width: '200px'}} alt="" className="singlePostImg" /> ):
          <img src="https://www.wantedinrome.com/i/preview/storage/uploads/2017/05/Acc-Vacant-in_light.jpg" style={{height: '200px', width: '200px'}} alt="" /> }
        {updateMode ? (
          <div>
            <h1>Book Name: </h1>
            <input
            type="text"
            value={bookName}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setBookName(e.target.value)}
          />
          </div>
        ) : (
          <h1 className="singlePostTitle">
            Book Name : {bookName}
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
              

              <h6>Book Author: </h6>  <textarea
            className="singlePostDescInput"
            value={bookAuthor}
            onChange={(e) => setBookAuthor(e.target.value)}
          /> <br />

<h6>Department: </h6>  <textarea
            className="singlePostDescInput"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          /> <br />

              <h6>Quantity: </h6>  <textarea
            className="singlePostDescInput"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          /> <br />

              <h6>Price: </h6>  <textarea
            className="singlePostDescInput"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          /> <br />


          <h6>Description: </h6>  <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          /> <br />
              

              <h6>Contact: </h6>  <textarea
            className="singlePostDescInput"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          /> <br />
            </div>
          
          
        ) : (
            <div>
               
               <p>Book Author: {bookAuthor}</p>
               <p>Department: {department}</p>
               <p>Quantity: {quantity}</p>
               <p>Price: {price}</p>
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

export default BookSinglePost;