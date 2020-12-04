import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Post from "./Post";
import NewPost from "./NewPostForm";
import PostList from "./PostList";

function Routes({posts, comments, addPost, removePost, addComment, removeComment, editPost}) {
  return (
    <Switch>
      <Route exact path="/">
        <PostList posts={posts}/>
      </Route>
      <Route exact path="/new">
        <NewPost addPost={addPost} removePost={removePost} />
      </Route>
      <Route exact path="/posts/:postId">
        <Post 
          posts={posts}
          comments={comments}
          removePost={removePost} 
          editPost={editPost}
          addComment={addComment}
          removeComment={removeComment}
        />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;