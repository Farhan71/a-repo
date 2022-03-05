import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import BookPosts from './BookPosts';
import BookWrite from './BookWrite';
import { useLocation } from "react-router";

const BookPage = () => {
    const [posts, setPosts] = useState([]);
    let [filter, setFilter] = useState([]);
    const [filterPosts, setFilterPosts] = useState([]);

    useLocation().search = filter
    useEffect(() => {
        const fetchPosts = async () => {
          const res = await axios.get("/books");
          setPosts(res.data);
        };
        fetchPosts();
      }, []);

      useEffect(() => {
        const fetchFilterPosts = async () => {
          const res = await axios.get(`/books/?department=${filter}`);
          console.log(res)
          setFilterPosts(res.data)
        };
        fetchFilterPosts();
      },[filter])

      console.log (filterPosts)

    return (
        <>

                <label for="Department">Choose a department:</label>
                    <select onChange={(e) =>  {
                      filter="";
                      setFilter(e.target.value)    

                    }
                    
                    } name="Department" id="Department">
                      <option value="CSTE">CSTE</option>
                      <option value="FIMS">FIMS</option>
                      <option value="Pharmacy">Pharmacy</option>
                      <option value="ACCE">ACCE</option>
                      <option value="Microbiology">Microbiology</option>
                      <option value="English">English</option>
                      <option value="BBA">BBA</option>
                      <option value="ICE">ICE</option>
                      <option value="FTNS">FTNS</option>
                      <option value="ESDM">ESDM</option>
                      <option value="Economics">Economics</option>
                      <option value="Agriculture">Agriculture</option>
                      <option value="Applied Math">Applied Math</option>
                      <option value="EEE">EEE</option>
                      <option value="SWE">SWE</option>
                    </select> 
        
          <div className="row">

            <div className="col-6">
                {
                    filter ? (<BookPosts  posts={filterPosts} /> ) : (<BookPosts  posts={posts} />)
                }
                
            </div>
            <div className="col-6">    
                <BookWrite></BookWrite>
            </div>
             
        </div>
        
        </>
        
    );
};

export default BookPage;