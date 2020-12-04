import React, { useState } from "react"
import { useParams, useHistory } from "react-router-dom";
import NewPostForm from "./NewPostForm";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

// REDUX IMPORT
import { useSelector, useDispatch } from "react-redux";
import { addComment, removeComment, addPost, removePost } from "./actions";

import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap";

function Post({ posts, removePost, editPost}) {

  const dispatch = useDispatch();

  const [editing, setEditing] = useState(false);
  // const [comments, setComments] = useState([]);

  const comments = useSelector(store => store.comments);
  console.log("COMMENTS ====>", comments);

  const { postId } = useParams();
  const history = useHistory();
  let post = posts.find(post => post.id === postId);

  // REACT FUNCTIONS - KEEP*
  function toggleEdit() {
    setEditing(editing => !editing);
  }

  function updatePost(formData) {
    editPost(formData);
    toggleEdit();
  }

  // REACT - removePost
  // function remove() {
  //   removePost(post.id);
  //   history.push("/");
  // }

  //REACT -ADD
  // function addComment(newComment) {
  //   setComments(comments => [...comments, newComment])
  // }

  //REACT -REMOVE
  // function removeComment(id) {
  //   setComments(comments => comments.filter(comment => comment.id !== id));
  // }

  function deletePost() {
    dispatch(removePost(post.id))
    history.push("/");
  }

  function addNewComment(newComment) {
    dispatch(addComment(newComment))
  }

  function removeNewComment(id) {
    dispatch(removeComment(id))
  }


  function renderShowOrEdit() {
    if (editing) {
      return (
        <NewPostForm updatePost={updatePost} currentPost={post}/>
      )
    } else {
      return (
          <Card>
        <CardBody>
          <CardTitle><h1>{post.title}</h1></CardTitle>
          <CardText><i>{post.description}</i></CardText>
          <CardText><p>{post.body}</p></CardText>
          <Button color="success" onClick={toggleEdit}>Edit</Button>
          <Button variant="danger" onClick={deletePost}>Delete</Button>
            <ListGroup>
              {comments.map(comment => (
                <div className="lineBlock">
                  <ListGroupItem style={{ listStyle: 'none' }}>
                    <Comment key={comment.id} comment={comment} removeComment={removeNewComment} />
                  </ListGroupItem>
                </div>
              ))}
            </ListGroup>
            {/* <Comment comments={comments} removeComment={removeComment} /> */}
            <CommentForm addComment={addNewComment}/>
        </CardBody>
        </Card>
      );
    }
  }

  return (
    <div className="alignment">
      <Card className="container" style={{ width: '28rem' }}>
        <Card variant="top"/>
        {renderShowOrEdit()}
      </Card>
    </div>
  )
}



export default Post;