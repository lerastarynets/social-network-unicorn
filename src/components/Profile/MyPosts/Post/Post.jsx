import s from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={s.item}>
      <div>
        <div>
          <img src="https://pbs.twimg.com/profile_images/1056599856452722689/FKXXa2UL_400x400.jpg" />
        </div>
        <div>{props.message}</div>
      </div>
      <span>
        Likes <b>{props.likesCount}</b>
      </span>
    </div>
  );
};
export default Post;
