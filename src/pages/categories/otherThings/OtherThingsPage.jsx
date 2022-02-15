import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import OtherThingsPosts from './OtherThingsPosts';
import OtherThingsWrite from './OtherThingsWrite';


const OtherThingsPage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get("/otherThings");
        setPosts(res.data);
      };
      fetchPosts();
    }, []);
    return (
        <div className="row">
            <OtherThingsPosts posts={posts}></OtherThingsPosts>
        <div className="col-6">

        </div>
        <div className="col-6">
            <OtherThingsWrite></OtherThingsWrite>
        </div>

        </div>
    );
};

export default OtherThingsPage;