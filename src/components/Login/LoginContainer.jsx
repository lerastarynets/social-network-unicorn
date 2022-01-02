import { followUser, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollowUser, toggleFollowingInProgress,getUsersThunkCreator, followUsersThunkCreator, unfollowUsersThunkCreator} from "../../redux/search-reducer"
import { connect } from 'react-redux';
import React from 'react';
import Search from './Search';
import Preloader from "../common/Preloader/Preloader";
import { getUsers } from "../../api/api";



class SearchAPIComponent extends React.Component {
  
    // getUsers=()=>{if (this.props.users.length === 0) {
    //     axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
    //             this.props.setUsers(response.data.items)
    //     })
  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }
  onPageChanged = (pageNum) => {
    this.props.getUsersThunkCreator(pageNum, this.props.pageSize);
          //   this.props.toggleIsFetching(true);
          //   this.props.setCurrentPage(pageNum)
          //  getUsers(pageNum,this.props.pageSize).then(data => {
          //     this.props.toggleIsFetching(false);
          //    this.props.setUsers(data.items)
          //  })
          }
  // onPageChanged(pageNum) {
  //       this.props.setCurrentPage(pageNum)
  //       axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`).then(response => {
  //           this.props.setUsers(response.data.items)
  //       })
  //   }
  render() {
      return <div>
        {this.props.isFetching ? <Preloader /> : null}
        
        <Search
          users={this.props.users} currentPage={this.props.currentPage}
          pageSize={this.props.pageSize} totalUsersCount={this.props.totalUsersCount}
          onPageChanged={this.onPageChanged} followingInProgress={this.props.followingInProgress}
          usersInProgress={this.props.usersInProgress}
          follow={this.props.followUsersThunkCreator} unfollow={this.props.unfollowUsersThunkCreator}/>
        </div>
    }
}

let mapStateToProps = (state) => {
  return {
    users: state.searchReducer.users,
    pageSize: state.searchReducer.pageSize,
    totalUsersCount:  state.searchReducer.totalUsersCount,
    currentPage:  state.searchReducer.currentPage,
    isFetching:  state.searchReducer.isFetching,
    followingInProgress:  state.searchReducer.followingInProgress,
    usersInProgress:  state.searchReducer.usersInProgress,
  }
}
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
const SearchContainer = connect(mapStateToProps,
 {
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
   toggleIsFetching,
   toggleFollowingInProgress,
   getUsersThunkCreator,
   followUsersThunkCreator,
   unfollowUsersThunkCreator
  })(SearchAPIComponent);
export default SearchContainer