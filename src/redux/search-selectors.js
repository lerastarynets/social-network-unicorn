import { createSelector } from "reselect";

export const getUsers = (state) => {
  return state.searchReducer.users;
};
// export const getUsersSelector = (state) => {
//   return getUsers(state).filter((u) => true);
// };
// export const getUsers = createSelector(getUsersSelector, (users) => {
//   return users.filter((u) => true);
// });

export const getUsersSuperSelector = createSelector(
  getUsers,
  getIsFetching,
  (users, isFetching) => {
    return users.filter((u) => true);
  }
);

export const getPageSize = (state) => {
  return state.searchReducer.pageSize;
};
export const getTotalUsersCount = (state) => {
  return state.searchReducer.totalUsersCount;
};
export const getCurrentPage = (state) => {
  return state.searchReducer.currentPage;
};
export const getIsFetching = (state) => {
  return state.searchReducer.isFetching;
};
export const getFollowingInProgress = (state) => {
  return state.searchReducer.followingInProgress;
};
export const getUsersInProgress = (state) => {
  return state.searchReducer.usersInProgress;
};
export const getIsAuth = (state) => {
  return state.authReducer.isAuth;
};
