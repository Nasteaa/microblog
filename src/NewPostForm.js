import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import { Button } from "reactstrap";


function NewPostForm({addPost, updatePost, currentPost={}}) {
  
  const history = useHistory();

  const [formData, setFormData] = useState({
    title: currentPost.title || "",
    description: currentPost.description || "",
    body: currentPost.body || "",
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    if (currentPost.id) {
      updatePost({...formData, id: currentPost.id});
    }
    else {
      addPost({...formData, id: uuid()});
      setFormData({title: "", description: "", body: ""})
      history.push("/");
    }
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  function submitButtonText() {
    if (currentPost.id) {
      return "Update Post"
    } else {
      return "Submit Post"
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
        <label>Title:</label>
          <input
        id="title" 
        onChange={handleChange}
        name="title"
        value={formData.title}
        />
        </div>
        <div>
        <label>Description:</label>
        <input
          id="description"
          onChange={handleChange}
          name="description"
          value={formData.description}
        />
        </div>
        <div>
        <label>Body:</label>
        <textarea
          id="body"
          onChange={handleChange}
          name="body"
          value={formData.body}
          type="text"
        />
        </div>
        <div className="mb-2">
        <Button color="primary" type="submit">{submitButtonText()}</Button>
        <Button variant="danger" className="link"><Link to="/" className="link">Cancel</Link></Button>
        </div>
      </form>
    </div>
  )
}

export default NewPostForm;