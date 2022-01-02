import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import searchReducer from "./search-reducer";
import sidebarReducer from "./sidebar-reducer";

export let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "post1", likesCount: 0 },
        { id: 2, message: "post2", likesCount: 109 },
        { id: 3, message: "post3", likesCount: 35 },
      ],
      newPostText: "lol",
    },
    dialogsPage: {
      dialogs: [
        { name: "Julie", id: 1 },
        { name: "Liza", id: 2 },
        { name: "Alla", id: 3 },
        { name: "Mila", id: 4 },
        { name: "Nastya", id: 5 },
        { name: "Diana", id: 6 },
        { name: "Anaconda", id: 7 },
      ],
      messages: [
        { id: 1, message: "hi" },
        { id: 2, message: "wassup?" },
        { id: 3, message: "let's have a brunch" },
        { id: 4, message: "u bitch" },
      ],
      newMessageText: "",
    },
    searchPage: {},
    sidebar: {
      friends: [{ id: 1, ava: "" }],
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber(state) {},
  // addPost() {
  //   let newP = {
  //     id: this._state.profilePage.posts.length + 1,
  //     message: this._state.profilePage.newPostText,
  //     likesCount: Math.floor(100 * Math.random()),
  //   };
  //   this._state.profilePage.posts.push(newP);
  //   this._state.profilePage.newPostText = "";
  //   this._callSubscriber(this._state);
  // },
  // updateNewPostText(txt) {
  //   this._state.profilePage.newPostText = txt;
  //   this._callSubscriber(this._state);
  // },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.searchPage = searchReducer(this._state.searchPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

window.state = store;

// let rerenderEntireTree = (state) => {};

// export let state = {
//   profilePage: {
//     posts: [
//       { id: 1, message: "post1", likesCount: 0 },
//       { id: 2, message: "post2", likesCount: 109 },
//       { id: 3, message: "post3", likesCount: 35 },
//     ],
//     newPostText: "lol",
//   },
//   dialogsPage: {
//     dialogs: [
//       { name: "Julie", id: 1 },
//       { name: "Liza", id: 2 },
//       { name: "Alla", id: 3 },
//       { name: "Mila", id: 4 },
//       { name: "Nastya", id: 5 },
//       { name: "Diana", id: 6 },
//       { name: "Anaconda", id: 7 },
//     ],
//     messages: [
//       { id: 1, message: "hi" },
//       { id: 2, message: "wassup?" },
//       { id: 3, message: "let's have a brunch" },
//       { id: 4, message: "u bitch" },
//     ],
//   },
//   sidebar: {
//     friends: [{ id: 1, ava: "" }],
//   },
// };
// window.state = state;
// export const addPost = () => {
//   let newP = {
//     id: state.profilePage.posts.length + 1,
//     message: state.profilePage.newPostText,
//     likesCount: Math.floor(100 * Math.random()),
//   };
//   state.profilePage.posts.push(newP);
//   state.profilePage.newPostText = "";
//   rerenderEntireTree(state);
// };
// export const updateNewPostText = (txt) => {
//   state.profilePage.newPostText = txt;
//   rerenderEntireTree(state);
// };
// export const subscribe = (observer) => {
//   rerenderEntireTree = observer;
// };
