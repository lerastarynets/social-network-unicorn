import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import searchReducer from "./search-reducer";
import sidebarReducer from "./sidebar-reducer";
import appReducer from "./app-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { compose } from "redux";
//import {compose}

let reducers = combineReducers({
  profileReducer,
  dialogsReducer,
  searchReducer,
  sidebarReducer,
  authReducer,
  appReducer,
  form: formReducer,
});
//let store = createStore(reducers, applyMiddleware(thunkMiddleware));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
export default store;
//window.store = store;
