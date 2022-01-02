import { stopSubmit } from "redux-form";
import { authMe, getCaptchaUrl, logIn, logOut } from "../api/api";

const SET_USER_DATA = "auth/SET_USER_DATA";
const SET_CAPTCHA = "auth/SET_CAPTCHA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
      };
    }
    case SET_CAPTCHA: {
      return {
        ...state,
        captchaUrl: action.captchaUrl,
      };
    }
    default:
      return state;
  }
};
export const setUserData = (id, login, email, isAuth) => {
  return { type: SET_USER_DATA, data: { id, login, email, isAuth } };
};
export const setCaptchaUrl = (captchaUrl) => {
  return { type: SET_CAPTCHA, captchaUrl };
};
export const authMeThunkCreator = () => async (dispatch) => {
  let data = await authMe();
  if (data.resultCode === 0) {
    dispatch(setUserData(data.data.id, data.data.login, data.data.email, true));
  }
};

export const logInThunkCreator =
  (email, password, rememberMe, captcha) => async (dispatch) => {
    let data = await logIn(email, password, rememberMe, captcha);
    if (data.resultCode === 0) {
      dispatch(authMeThunkCreator());
    } else {
      if (data.resultCode === 10) {
        dispatch(getCaptchaThunkCreator());
      }
      let message =
        data.messages.length > 0 ? data.messages[0] : "Kakaya-to hueta happend";
      let action = stopSubmit("login", {
        _error: message,
      });
      dispatch(action);
    }
  };
export const logOutThunkCreator = () => async (dispatch) => {
  let data = await logOut();
  if (data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false));
  }
};
export const getCaptchaThunkCreator = () => async (dispatch) => {
  let data = await getCaptchaUrl();
  let captchaUrl = data.url;
  dispatch(setCaptchaUrl(captchaUrl));
};

export default authReducer;
