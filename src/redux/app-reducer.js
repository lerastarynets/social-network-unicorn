import { authMeThunkCreator } from "./auth-reducer";

const SET_INITIALIZED = "SET_INITIALIZED";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED: {
      return {
        ...state,
        initialized: true,
      };
    }
    default:
      return state;
  }
};
export const setInitialized = () => {
  return { type: SET_INITIALIZED };
};

export const initializeAppThunkCreator = () => (dispatch) => {
  let promise = dispatch(authMeThunkCreator());
  Promise.all([promise]).then(() => {
    dispatch(setInitialized());
  });
};

export default appReducer;
