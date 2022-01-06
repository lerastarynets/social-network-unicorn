import s from "./Search.module.css";
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
      <div className={s.userPaginator}>
        <Paginator
          onPageChanged={onPageChanged}
          pageSize={pageSize}
          totalItemsCount={totalUsersCount}
          currentPage={currentPage}
          portionSize={7}
        />
      </div>
      {/* <button onClick={getUsers}>Get Users</button> */}
      {props.users.map((u) => {
        return (
          <div className={s.userItem}>
            <User
              unfollow={props.unfollow}
              follow={props.follow}
              usersInProgress={props.usersInProgress}
              user={u}
              key={u.id}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Search;
