import {
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  toggleFollowingInProgress,
  getUsersThunkCreator,
  followUsersThunkCreator,
  unfollowUsersThunkCreator,
} from "../../redux/search-reducer";
import { connect } from "react-redux";
import React from "react";
import Search from "./Search";
import Preloader from "../common/Preloader/Preloader";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsAuth,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
  getUsersInProgress,
} from "../../redux/search-selectors";

class SearchAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.currentPage,
      this.props.pageSize
    );
  }
  onPageChanged = (pageNum) => {
    this.props.getUsersThunkCreator(pageNum, this.props.pageSize);
  };
  render() {
    if (!this.props.isAuth) {
      return <Redirect to={"/login"} />;
    }

    return (
      <div>
        {this.props.isFetching ? <Preloader /> : null}

        <Search
          users={this.props.users}
          currentPage={this.props.currentPage}
          pageSize={this.props.pageSize}
          totalUsersCount={this.props.totalUsersCount}
          onPageChanged={this.onPageChanged}
          followingInProgress={this.props.followingInProgress}
          usersInProgress={this.props.usersInProgress}
          follow={this.props.followUsersThunkCreator}
          unfollow={this.props.unfollowUsersThunkCreator}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    usersInProgress: getUsersInProgress(state),
    isAuth: getIsAuth(state),
  };
};
// let mapDispatchToProps = (dispatch) => {
//   return {
//     followUser: (userId) => {
//       dispatch(followUser(userId))
//     },
//     unfollowUser: (userId) => {
//       dispatch(unfollowUser(userId))
//       },
//     setUsers:(users) => {
//       dispatch(setUsers(users))
//     },
//     setCurrentPage: (currentPage) => {
//       dispatch(setCurrentPage(currentPage))
//     },
//     setTotalUsersCount: (totalUsersCount) => {
//       dispatch(setTotalUsersCount(totalUsersCount))
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetching(isFetching))
//     },
//   }
// }

export default compose(
  connect(mapStateToProps, {
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingInProgress,
    getUsersThunkCreator,
    followUsersThunkCreator,
    unfollowUsersThunkCreator,
  })
)(SearchAPIComponent);
