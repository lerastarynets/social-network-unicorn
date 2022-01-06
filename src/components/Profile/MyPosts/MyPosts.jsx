import s from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import {
  maxLengthThunkCreator,
  requiredFields,
} from "../../../utils/validators/validator";
import { Textarea } from "../../common/FormsControls/FormsControls";
import { PureComponent } from "react";

const maxLength50 = maxLengthThunkCreator(50);

const PostTextarea = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"write a post"}
          validate={[requiredFields, maxLength50]}
          component={Textarea}
          name={"postTextarea"}
        ></Field>
      </div>
      <button className={s.postBtn}>Add post</button>
    </form>
  );
};

const PostReduxTextarea = reduxForm({ form: "postTextarea" })(PostTextarea);

class MyPosts extends PureComponent {
  componentDidMount() {
    setTimeout(() => {
      this.setState({ a: 234 });
    }, 2000);
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps != this.props || nextState != this.state;
  // }
  render() {
    let postsElements = this.props.posts.map((p, idx) => {
      return <Post key={idx} likesCount={p.likesCount} message={p.message} />;
    });
    let onAddPost = (values) => {
      this.props.addPost(values.postTextarea);
      values.postTextarea = "";
    };
    return (
      <div className={s.posts}>
        <p className={s.postsTitle}>My posts</p>
        <PostReduxTextarea onSubmit={onAddPost} />
        <div>{postsElements}</div>
      </div>
    );
  }
}
export default MyPosts;
