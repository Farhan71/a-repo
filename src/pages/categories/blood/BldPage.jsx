import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import BldPosts from './BldPosts';
import BldWrite from './BldWrite';
import { useLocation } from "react-router";

const BldPage = () => {
    const [posts, setPosts] = useState([]);
    let [filter, setFilter] = useState([]);
    const [filterPosts, setFilterPosts] = useState([]);
    useLocation().search = filter

    useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get("/blood");
        setPosts(res.data);
      };
      fetchPosts();
    }, []);

    useEffect(() => {
      const fetchFilterPosts = async () => {
        const res = await axios.get(`/blood/?group=${filter}`);
        console.log(res)
        setFilterPosts(res.data)
      };
      fetchFilterPosts();
    },[filter])

    // console.log (search)
    // console.log (filter)
    console.log (filterPosts)

    return (
      <>

<label for="Group">Choose Blood Group:</label>
                    <select onChange={(e) =>  {
                      filter="";
                      setFilter(e.target.value)    

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
        <div className="row">
            <div className="col-6">
              {
                filter ? (<BldPosts posts={filterPosts}></BldPosts>) : (<BldPosts posts={posts}></BldPosts>)
              }
            
            </div>
            <div className="col-6">
            <BldWrite></BldWrite>
            </div>   
        </div>
       </>
    );
};

export default BldPage;