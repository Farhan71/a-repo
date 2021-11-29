import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import BookPosts from './BookPosts';
import BookWrite from './BookWrite';

const BookPage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
          const res = await axios.get("/books");
          setPosts(res.data);
        };
        fetchPosts();
      }, []);
    return (
        <div className="row">

            <div className="col-6">
                <BookPosts  posts={posts} />
            </div>
            <div className="col-6">    
                <BookWrite></BookWrite>
            </div>
             
        </div>
    );
};

export default BookPage;