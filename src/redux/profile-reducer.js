import {
  getProfile,
  getStatus,
  updateStatus,
  updatePhoto,
  saveProfile,
} from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = "profile/ADD_POST";
const DELETE_POST = "profile/DELETE_POST";
const SET_PROFILE = "profile/SET_PROFILE";
const SET_STATUS = "profile/SET_STATUS";
const SET_PHOTOS = "profile/SET_PHOTOS";

let initialState = {
  posts: [
    { id: 1, message: "post1", likesCount: 0 },
    { id: 2, message: "post2", likesCount: 109 },
    { id: 3, message: "post3", likesCount: 35 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newP = {
        id: state.posts.length + 1,
        message: action.newPostText,
        likesCount: Math.floor(100 * Math.random()),
      };
      return { ...state, posts: [...state.posts, newP], newPostText: "" };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts
          .slice(0, action.postId)
          .concat(state.posts.slice(action.postId + 1, state.posts.length)),
        newPostText: "",
      };
    }
    case SET_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    case SET_PHOTOS: {
      return { ...state, profile: { ...state.profile, photos: action.photos } };
    }
    default:
      return state;
  }
};
export const addPost = (newPostText) => {
  return { type: ADD_POST, newPostText };
};

export const deletePost = (postId) => {
  return { type: DELETE_POST, postId };
};

export const setProfile = (profile) => {
  return {
    type: SET_PROFILE,
    profile,
  };
};
export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};
export const setPhotos = (photos) => {
  return {
    type: SET_PHOTOS,
    photos,
  };
};

export const getUserProfileThunkCreator = (userId) => async (dispatch) => {
  let data = await getProfile(userId);
  dispatch(setProfile(data));
};

export const getUserStatusThunkCreator = (userId) => async (dispatch) => {
  let data = await getStatus(userId);
  dispatch(setStatus(data));
};
export const updateUserStatusThunkCreator = (status) => async (dispatch) => {
  let data = await updateStatus(status);
  if (data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
export const updatePhotoThunkCreator = (photos) => async (dispatch) => {
  let data = await updatePhoto(photos);
  if (data.resultCode === 0) {
    dispatch(setPhotos(data.photos));
  }
};
export const saveProfileThunkCreator =
  (profile) => async (dispatch, getState) => {
    let userId = getState().authReducer.id;
    let data = await saveProfile(profile);
    if (data.resultCode === 0) {
      dispatch(getUserProfileThunkCreator(userId));
    } else {
      let message =
        data.messages.length > 0 ? data.messages[0] : "Kakaya-to hueta happend";
      let action = stopSubmit("profile-data", {
        _error: message,
      });
      dispatch(action);
    }
  };
export default profileReducer;
