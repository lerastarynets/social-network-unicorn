import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  addPost,
  getUserProfileThunkCreator,
  getUserStatusThunkCreator,
  updateUserStatusThunkCreator,
  updatePhotoThunkCreator,
  saveProfileThunkCreator,
} from "../../redux/profile-reducer";
import { compose } from "redux";

class ProfileAPIComponent extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfileThunkCreator(userId);
    this.props.getUserStatusThunkCreator(userId);
  }
  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }
  render() {
    return <Profile {...this.props} owner={!this.props.match.params.userId} />;
  }
}

let mapStateToProps = (state) => {
  return {
    posts: state.profileReducer.posts,
    newPostText: state.profileReducer.newPostText,
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
    authorizedUserId: state.authReducer.id,
    isAuth: state.authReducer.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, {
    addPost,
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    updateUserStatusThunkCreator,
    updatePhotoThunkCreator,
    saveProfileThunkCreator,
  }),
  withRouter
)(ProfileAPIComponent);

// let AuthRedirectComponent = withAuthRedirect(ProfileAPIComponent)

// let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)

// const ProfileContainer = connect(mapStateToProps,
//  {
//    addPost,
//    updateNewPostText,
//    getUserProfileThunkCreator,
//   })(withUrlDataContainerComponent);
