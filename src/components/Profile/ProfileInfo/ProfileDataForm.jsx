import {
  createField,
  Input,
  Textarea,
} from "../../common/FormsControls/FormsControls";
import s from "../../common/FormsControls/FormsControls.module.css";
import { reduxForm } from "redux-form";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <button className={s.formInfoBtn}>Save</button>
      <div>{createField("text", "Full name", "fullName", [], Input)}</div>
      <div>{createField("text", "About me", "aboutMe", [], Input)}</div>
      <div>
        Looking for a job:{" "}
        {createField("checkbox", null, "lookingForAJob", [], Input)}
      </div>
      <div>
        Skills:{" "}
        {createField(
          "text",
          "Skills",
          "lookingForAJobDescription",
          [],
          Textarea
        )}
      </div>
      <div>Contacts: </div>
      {error && <div className={s.formSummaryError}>{error}</div>}
      <ul>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <li>
              {key}: {createField("text", key, "contacts." + key, [], Input)}
            </li>
          );
        })}
      </ul>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({ form: "profile-data" })(
  ProfileDataForm
);

export default ProfileDataReduxForm;
