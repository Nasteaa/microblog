import { ADD_COMMENT, REMOVE_COMMENT, ADD_POST, REMOVE_POST } from "./actionTypes";

const INITIAL_STATE = { comments: [], posts: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case ADD_COMMENT:
      return { ...state, comments: [...state.comments, action.comment] };

    case REMOVE_COMMENT:
      return { ...state, comments: state.comments.filter(comment => comment.id !== action.id) };

    case ADD_POST:
      return { ...state, posts: [...state.posts, action.post] }

    case REMOVE_POST:
      return { ...state, posts: state.posts.filter(post => post.id !== action.id) }

    default:
      return state;
  }
}

// const count = useSelector(store => store.count);
export default rootReducer;