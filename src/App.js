import "./App.css";
import store from "./redux/redux-store";
import Aside from "./components/Aside/Aside";
import { Route, withRouter, BrowserRouter, HashRouter } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React, { Component, Suspense } from "react";
import { connect, Provider } from "react-redux";
import { initializeAppThunkCreator } from "./redux/app-reducer";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import { Redirect, Switch } from "react-router";

const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const SearchContainer = React.lazy(() =>
  import("./components/Search/SearchContainer")
);
const Bonus = React.lazy(() => import("./components/Bonus/Bonus"));
const Settings = React.lazy(() => import("./components/Settings/Settings"));
const News = React.lazy(() => import("./components/News/News"));

class App extends Component {
  catchAllUnhendeldErrors = (promiseRejectionEvent) => {
    alert("something bad happend");
    //console.log(promiseRejectionEvent)
  };
  componentDidMount() {
    this.props.initializeAppThunkCreator();
    window.addEventListener("unhandledrejection", this.catchAllUnhendeldErrors);
  }
  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.catchAllUnhendeldErrors
    );
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="App">
        <HeaderContainer />
        <div className="page">
          <Aside />
          <div className="pageContent">
            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                  return <Redirect to={"/profile"} />;
                }}
              />
              <Route
                exact
                path="/profile/:userId?"
                render={() => {
                  return (
                    <Suspense fallback={<div>Zagruzhayus, blyat</div>}>
                      <ProfileContainer />
                    </Suspense>
                  );
                }}
              />
              <Route
                path="/dialogs"
                render={() => {
                  return (
                    <Suspense fallback={<div>Zagruzhayus, blyat</div>}>
                      <DialogsContainer />
                    </Suspense>
                  );
                }}
              />
              <Route
                path="/news"
                render={() => {
                  return (
                    <Suspense fallback={<div>Zagruzhayus, blyat</div>}>
                      <News />
                    </Suspense>
                  );
                }}
              />
              <Route
                path="/settings"
                render={() => {
                  return (
                    <Suspense fallback={<div>Zagruzhayus, blyat</div>}>
                      <Settings />
                    </Suspense>
                  );
                }}
              />
              <Route
                path="/search"
                render={() => {
                  return (
                    <Suspense fallback={<div>Zagruzhayus, blyat</div>}>
                      <SearchContainer />
                    </Suspense>
                  );
                }}
              />
              <Route
                path="/bonus"
                render={() => {
                  return (
                    <Suspense fallback={<div>Zagruzhayus, blyat</div>}>
                      <Bonus />
                    </Suspense>
                  );
                }}
              />
              <Route path="/login" render={() => <Login />} />
              <Route path="*" render={() => <div>404 not found</div>} />
            </Switch>
            {/* <Route exact path="" component={} />
          <Route exact path="" component={} />
          <Route exact path="" component={} /> */}
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: state.appReducer.initialized,
  };
};

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeAppThunkCreator })
)(App);

const MainApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};
export default MainApp;
