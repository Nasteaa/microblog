import { ADD_COMMENT, REMOVE_COMMENT, ADD_POST, REMOVE_POST } from "./actionTypes";

export function addComment(id) {
  return {
    type: ADD_COMMENT,
    id,
  };
}

export function removeComment(id) {
  return {
    type: REMOVE_COMMENT,    
    id,
  };
}

export function addPost(id) {
  return {
    type: ADD_POST,
    id,
  };
}

export function removePost(id) {
  return {
    type: REMOVE_POST,
    id,
  };
}

