import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/img/user.png";
import React, { useState } from "react";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({
  profile,
  updatePhotoThunkCreator,
  updateUserStatusThunkCreator,
  status,
  owner,
  saveProfileThunkCreator,
}) => {
  let [editMode, setEditMode] = useState(false);
  if (!profile) {
    return <Preloader />;
  }
  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
  };
  const onSubmit = (formData) => {
    saveProfileThunkCreator(formData);
    deactivateEditMode();
  };
  const onPhotoSelected = (e) => {
    if (e.target.files.length) {
      updatePhotoThunkCreator(e.target.files[0]);
    }
  };
  return (
    <div>
      <div className={s.description}>
        <div className={s.descriptionItem}>
          <img
            className={s.profilePhoto}
            src={profile.photos.large || userPhoto}
          />
        </div>
        {owner && (
          <div className={s.descriptionItem}>
            <label htmlFor="uploadBtn" className={s.profileInfoBtn}>
              Change Photo
            </label>
            <input id={"uploadBtn"} type={"file"} onChange={onPhotoSelected} />
          </div>
        )}
        <div className={s.descriptionItem}>
          <ProfileStatusWithHooks
            updateStatus={updateUserStatusThunkCreator}
            status={status}
          />
        </div>
        {editMode ? (
          <div className={s.descriptionItem}>
            <ProfileDataForm
              initialValues={profile}
              onSubmit={onSubmit}
              profile={profile}
            />
          </div>
        ) : (
          <div className={s.descriptionItem}>
            <ProfileData
              profile={profile}
              owner={owner}
              activateEditMode={activateEditMode}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const ProfileData = ({ profile, owner, activateEditMode }) => {
  return (
    <div>
      {owner && (
        <button className={s.profileInfoBtn} onClick={activateEditMode}>
          Edit profile
        </button>
      )}
      <div>{profile.fullName}</div>
      <div>{profile.aboutMe}</div>
      <div>Looking for a job: {profile.lookingForAJob ? "Yes" : "No"}</div>
      {/* {profile.lookingForAJobDescription && (
        <div>Skills: {profile.lookingForAJobDescription}</div>
      )} */}
      <div>Skills: {profile.lookingForAJobDescription}</div>
      <div>Contacts: </div>
      {Object.keys(profile.contacts).map((key) => {
        if (profile.contacts[key]) {
          return (
            <Contact key={key} title={key} value={profile.contacts[key]} />
          );
        }
      })}
    </div>
  );
};

const Contact = ({ title, value }) => {
  return (
    <div>
      {title}: {value}
    </div>
  );
};

export default ProfileInfo;
