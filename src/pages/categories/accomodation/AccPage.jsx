import React from 'react';
import AccPosts from "./AccPosts"
import AccWrite from "./AccWrite"
import { useEffect, useState } from "react";
import axios from "axios";
// import { useLocation } from "react-router";
const AccPage = () => {
    const [posts, setPosts] = useState([]);
    // const { search } = useLocation();
  
    useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get("/accommodations");
        setPosts(res.data);
      };
      fetchPosts();
    }, []);
    return (
        <div className="row">
            <div className="col-6">
            <AccPosts posts={posts}></AccPosts>
            </div>
            <div className="col-6">
            <AccWrite></AccWrite>
            </div>
            
            
        </div>
    );
};

export default AccPage;