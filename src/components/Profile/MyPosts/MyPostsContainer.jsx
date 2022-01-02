import { connect } from "react-redux";
import { addPost } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    posts: state.profileReducer.posts,
    newPostText: state.profileReducer.newPostText,
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  addPost,
})(MyPosts);
export default MyPostsContainer;
