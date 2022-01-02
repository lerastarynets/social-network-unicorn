import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

class Profile extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps !== this.props || nextState !== this.state;
  }
  render() {
    return (
      <main>
        <ProfileInfo {...this.props} />
        <MyPostsContainer />
      </main>
    );
  }
}
export default Profile;
