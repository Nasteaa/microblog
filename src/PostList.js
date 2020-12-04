import React, {useState} from "react";
import { v4 as uuid} from "uuid";
import { Link, Redirect } from "react-router-dom";
import { useParams } from "react-router-dom";
import Post from "./Post";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function PostList( {posts} ) {

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Catalog
          </CardTitle>
          <ListGroup> 
            {posts.map(post => (
              <div className="lineBlock">
              <ListGroupItem style={{ listStyle: 'none' }}>
                  <Link to={`/posts/${post.id}`} key={post.id}><h3>{post.title}</h3></Link>
                  <p>Description: {post.description}</p>
              </ListGroupItem>
              </div>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
      </section>
  );
}


export default PostList;