import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import './Blogs.css';

function Blogs() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const response = await Axios.get('https://jsonplaceholder.typicode.com/posts');

    console.log('Blog posts:', response);

    setPosts(response);
  };

  return (
    <div className='blogs'>
        <h1>Blogs</h1>
      {posts && posts.data.map((post, index) => (
        <div
          className='post'

          key={index}
        >
          <h1>{post.title}</h1>

          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Blogs;