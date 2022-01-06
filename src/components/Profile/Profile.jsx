import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";

class Profile extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps !== this.props || nextState !== this.state;
  }
  render() {
    return (
      <main className={s.profileContainer}>
        <ProfileInfo {...this.props} />
        <MyPostsContainer />
      </main>
    );
  }
}
export default Profile;
