import "./index.css";
import reportWebVitals from "./reportWebVitals";
import MainApp from "./App";
import React from "react";
import ReactDOM from "react-dom";

// setInterval(() => {
//   store.dispatch({ type: "FAKE" });
// }, 1000);

// let rerenderEntireTree = (state) => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <BrowserRouter>
//         <Provider store={store}>
//           <App />
//         </Provider>
//       </BrowserRouter>
//     </React.StrictMode>,
//     document.getElementById("root")
//   );
// };
// rerenderEntireTree(store.getState());

// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntireTree(state);
// });

ReactDOM.render(<MainApp />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
