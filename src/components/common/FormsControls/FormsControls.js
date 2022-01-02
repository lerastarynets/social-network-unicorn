import { Field } from "redux-form";
import { requiredFields } from "../../../utils/validators/validator";
import s from "./FormsControls.module.css";

export const FormControl = ({ meta: { touched, error }, children }) => {
  const showError = touched && error;
  return (
    <div className={s.formControl + " " + (showError ? s.error : "")}>
      <div>{children}</div>
      {showError && <span>{error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...Restprops } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...Restprops} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...Restprops } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...Restprops} />
    </FormControl>
  );
};

export const createField = (type, placeholder, name, validate, component) => {
  return (
    <Field
      type={type}
      placeholder={placeholder}
      name={name}
      validate={validate}
      component={component}
    />
  );
};
