import { getUsers, followUsers, unfollowUsers } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW_USER = "search/FOLLOW_USER";
const UNFOLLOW_USER = "search/UNFOLLOW_USER";
const SET_USER = "search/SET_USER";
const SET_CURRENT_PAGE = "search/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "search/SET_TOTAL_USERS_COUNT";
const TOGGLE_ISFETCHING = "search/TOGGLE_ISFETCHING";
const TOGGLE_FOLLOWING_INPROGRESS = "search/TOGGLE_FOLLOWING_INPROGRESS";
const FAKE = "search/FAKE";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: false,
  usersInProgress: [],
  fake: 0,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FAKE: {
      return {
        ...state,
        fake: state.fake + 1,
      };
    }
    case FOLLOW_USER: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };
    }
    case UNFOLLOW_USER: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };
    }
    case SET_USER: {
      return {
        ...state,
        users: action.users,
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    }
    case TOGGLE_ISFETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case TOGGLE_FOLLOWING_INPROGRESS: {
      return {
        ...state,
        usersInProgress: action.followingInProgress
          ? [...state.usersInProgress, action.usersInProgress]
          : state.usersInProgress.filter((id) => id != action.usersInProgress),
      };
    }
    default:
      return state;
  }
};
export const followUserSuccess = (userId) => {
  return { type: FOLLOW_USER, userId };
};
export const unfollowUserSuccess = (userId) => {
  return { type: UNFOLLOW_USER, userId };
};
export const setUsers = (users) => {
  return { type: SET_USER, users };
};
export const setCurrentPage = (currentPage) => {
  return { type: SET_CURRENT_PAGE, currentPage };
};
export const setTotalUsersCount = (totalUsersCount) => {
  return { type: SET_TOTAL_USERS_COUNT, totalUsersCount };
};
export const toggleIsFetching = (isFetching) => {
  return { type: TOGGLE_ISFETCHING, isFetching };
};
export const toggleFollowingInProgress = (
  followingInProgress,
  usersInProgress
) => {
  return {
    type: TOGGLE_FOLLOWING_INPROGRESS,
    followingInProgress,
    usersInProgress,
  };
};

export const getUsersThunkCreator =
  (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(setCurrentPage(currentPage));
  };

export const followUnfollowFlow = async (
  dispatch,
  id,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleFollowingInProgress(true, id));
  let data = await apiMethod(id);
  if (data.resultCode === 0) {
    dispatch(actionCreator(id));
  }
  dispatch(toggleFollowingInProgress(false, id));
};

export const followUsersThunkCreator = (id) => async (dispatch) => {
  followUnfollowFlow(dispatch, id, followUsers, unfollowUserSuccess);
};
export const unfollowUsersThunkCreator = (id) => async (dispatch) => {
  followUnfollowFlow(dispatch, id, unfollowUsers, followUserSuccess);
};

export default searchReducer;
