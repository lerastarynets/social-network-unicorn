import s from "../common/FormsControls/FormsControls.module.css";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { createField, Input } from "../common/FormsControls/FormsControls";
import { requiredFields } from "../../utils/validators/validator";
import { logInThunkCreator } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {createField("text", "login", "login", [requiredFields], Input)}
      </div>
      <div>
        {createField("text", "password", "password", [requiredFields], Input)}
      </div>
      <div>
        {createField("checkbox", null, "rememberMe", [requiredFields], Input)}
        remember me
      </div>
      {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl &&
        createField("text", null, "captcha", [requiredFields], Input)}
      {error && <div className={s.formSummaryError}>{error}</div>}
      <div>
        <button>Log In</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.logIn(
      formData.login,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h1>SIGN IN, PLEASE</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
    captchaUrl: state.authReducer.captchaUrl,
  };
};

export default connect(mapStateToProps, {
  logIn: logInThunkCreator,
})(Login);
