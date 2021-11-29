import React from 'react';
import AccPost from "./AccPost"

const accPosts = ({posts}) => {
    return (
        <div> 
            {posts.map((p) => (
        <AccPost post={p} />
      ))}
        </div>
    );
};

export default accPosts;