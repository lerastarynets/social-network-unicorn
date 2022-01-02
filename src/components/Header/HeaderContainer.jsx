import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logOutThunkCreator } from "../../redux/auth-reducer";

class HeaderAPIComponent extends React.Component {
  // componentDidMount() {
  //   this.props.authMeThunkCreator();
  //   // authMe().then(data => {
  //   //     if (data.resultCode === 0) {
  //   //         this.props.setUserData(data.data.id, data.data.login, data.data.email)
  //   //       }

  //   //   })
  // }
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    id: state.authReducer.id,
    login: state.authReducer.login,
    email: state.authReducer.email,
    isAuth: state.authReducer.isAuth,
  };
};
// let withUrlDataContainerComponent=withRouter(HeaderAPIComponent)

const HeaderContainer = connect(mapStateToProps, {
  logOut: logOutThunkCreator,
})(HeaderAPIComponent);

export default HeaderContainer;
