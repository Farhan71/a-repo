import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import BldPosts from './BldPosts';
import BldWrite from './BldWrite';

const BldPage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get("/blood");
        setPosts(res.data);
      };
      fetchPosts();
    }, []);
    return (
        <div className="row">
            <div className="col-6">
            <BldPosts posts={posts}></BldPosts>
            </div>
            <div className="col-6">
            <BldWrite></BldWrite>
            </div>
            
            
        </div>
    );
};

export default BldPage;