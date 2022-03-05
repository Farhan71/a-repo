import React from 'react';
import CommentAll from './CommentAll';
import CommentWrite from './CommentWrite';
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";

const CommentBlock = () => {
    const [comments, setComments] = useState([]); 
    const loc = useLocation();
    const path = loc.pathname.split("/")[2];
    console.log(path)
    useEffect(() =>{
        const fetchComments = async () => {
            const res = await axios.get(`/comment?postID=${path}`);
            setComments(res.data)
        };
        fetchComments();
    },[])
    return (
        <div style={{border: '1px solid red', height: '800px', width: '400px', marginTop:"100px"}}>
            <CommentWrite postID={path} ></CommentWrite>
            <div >
            <CommentAll comments={comments}></CommentAll>
            </div>
            
        </div>
    );
};

export default CommentBlock;