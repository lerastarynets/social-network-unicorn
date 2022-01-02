import profileReducer, { addPost, deletePost } from "./profile-reducer";

let initialState = {
  posts: [
    { id: 1, message: "post1", likesCount: 0 },
    { id: 2, message: "post2", likesCount: 109 },
    { id: 3, message: "post3", likesCount: 35 },
  ],
};

test("posts length should increment", () => {
  //test data

  //action
  let action = addPost("piska");
  let newState = profileReducer(initialState, action);

  //expectation
  expect(newState.posts.length).toBe(4);
});

test("new message text should correspond", () => {
  //test data

  //action
  let action = addPost("piska");
  let newState = profileReducer(initialState, action);

  //expectation
  expect(newState.posts[3].message).toBe("piska");
});

test("after deleting length of posts should decrement", () => {
  //test data

  //action
  let action = deletePost(1);
  let newState = profileReducer(initialState, action);

  //expectation
  expect(newState.posts.length).toBe(2);
});

test("if an id don't exist of posts shouldn't be changed", () => {
  //test data

  //action
  let action = deletePost(19);
  let newState = profileReducer(initialState, action);

  //expectation
  expect(newState.posts.length).toBe(3);
});
