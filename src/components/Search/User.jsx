import s from "./Search.module.css";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/img/user.png";

let User = ({ user, usersInProgress, follow, unfollow }) => {
  let u = user;
  return (
    <div>
      <div key={u.id}>
        <div>
          <NavLink to={"/profile/" + u.id}>
            <img
              src={u.photos.small !== null ? u.photos.small : userPhoto}
              className={s.userImg}
            />
          </NavLink>
        </div>
        <div>{u.name}</div>
        <div>{u.status}</div>
        <div>
          {u.followed ? (
            <button
              disabled={usersInProgress.some((id) => id === u.id)}
              onClick={() => {
                follow(u.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={usersInProgress.some((id) => id === u.id)}
              onClick={() => {
                unfollow(u.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
