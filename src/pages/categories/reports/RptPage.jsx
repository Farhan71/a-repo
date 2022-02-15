import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import RptPosts from './RptPosts';
import RptWrite from './RptWrite';

const RptPage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get("/reports");
        setPosts(res.data);
      };
      fetchPosts();
    }, []);
    return (
        <div className="row">
            <div className="col-6">
            <RptPosts posts={posts}></RptPosts>
            </div>
            <div className="col-6">
            <RptWrite></RptWrite>
            </div>
        </div>
    );
};

export default RptPage;