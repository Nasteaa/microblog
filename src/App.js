import React, { useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import './App.css';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

import NavBar from './NavBar';
import Routes from './Routes';

function App() {
  const [posts, setPosts] = useState([]);

  function addPost(newPost) {
    setPosts(posts => [...posts, newPost]);
  }

  function removePost(id) {
    setPosts(posts => posts.filter((post) => post.id !== id));
  }

  function editPost(updatedPost) {
    let updatedPosts = posts.map((post) => {
      if (post.id !== updatedPost.id) {
        return post;
      } else {
        return updatedPost;
      }
    });
    setPosts(updatedPosts);
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Routes 
        posts={posts} 
        addPost={addPost} 
        removePost={removePost} 
        editPost={editPost}
      />
    </BrowserRouter>
  );
}

// library.add(fab, faCheckSquare, faCoffee)
export default App;
