import s from  "./Post.module.css";
const Post = (props) => {
    return (
          <div className={`${s.item} ${s.active}`}>
            <div><img src='https://pbs.twimg.com/profile_images/1056599856452722689/FKXXa2UL_400x400.jpg'/>
          {props.message}
        </div>
        <span>like {props.likesCount}</span>
          </div>    
    );
}
export default Post