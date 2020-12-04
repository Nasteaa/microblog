import React, { useState } from "react"
import {
  ListGroup,
  ListGroupItem,
  Button,
} from "reactstrap";

function Comment({ comment, removeComment }) {

  // let comment = comments.find(c => c.id === c.key)

  function remove() {
    console.log("comment --->", comment);
    removeComment(comment.id)
  }

  return (
    <div>
      <Button color="danger" onClick={remove} key={comment.id}>X</Button>
      <p>{comment.comment}</p>
    </div>
  )
}

      // {/* <ListGroup>
      //   {comments.map(comment => (
      //     <div className="lineBlock">
      //       <ListGroupItem style={{ listStyle: 'none' }}>
      //         <p>{comment}</p>
      //         <Button color="danger" onClick={remove} key={comment.id}>X</Button>
      //       </ListGroupItem>
      //     </div>
      //   ))}
      // </ListGroup> */}

export default Comment;