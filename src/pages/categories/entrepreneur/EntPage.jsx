import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import EntWrite from './EntWrite';
import EntPosts from './EntPosts';

const EntPage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get("/entrepreneur");
        setPosts(res.data);
      };
      fetchPosts();
    }, []);
    return (
        <div className="row">
            <div className="col-6">
            <EntPosts posts={posts}></EntPosts>
            </div>
            <div className="col-6">
            <EntWrite></EntWrite>
            </div>
            
            
        </div>
    );
};

export default EntPage;