import s from "./Search.module.css";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/img/user.png";
import { followUsers, unfollowUsers } from "../../api/api";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Search = ({
  onPageChanged,
  pageSize,
  totalUsersCount,
  currentPage,
  ...props
}) => {
  return (
    <div>
      <Paginator
        onPageChanged={onPageChanged}
        pageSize={pageSize}
        totalItemsCount={totalUsersCount}
        currentPage={currentPage}
        portionSize={7}
      />
      {/* <button onClick={getUsers}>Get Users</button> */}
      {props.users.map((u) => {
        return (
          <User
            unfollow={props.unfollow}
            follow={props.follow}
            usersInProgress={props.usersInProgress}
            user={u}
            key={u.id}
          />
        );
      })}
    </div>
  );
};

export default Search;
