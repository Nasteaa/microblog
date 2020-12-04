import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import { Button } from "reactstrap";


function CommentForm({ posts, addComment }) {

  const [formData, setFormData] = useState({
    comment: ""
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    addComment({...formData, id: uuid()});
    // addComment(formData.comment);
    setFormData({ comment: "" })
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Comment:</label>
        <input
          id="comment"
          name="comment"
          onChange={handleChange}
          value={formData.comment}
        />
        <Button color="primary" type="submit" onClick={handleSubmit}>Add</Button>
      </form>
    </div>
  )

}


export default CommentForm;