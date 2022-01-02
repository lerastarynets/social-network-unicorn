import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import { Redirect } from "react-router-dom";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { requiredFields } from "../../utils/validators/validator";

const DialogTextarea = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          placeholder={"write, u"}
          name={"dialogTextarea"}
          validate={[requiredFields]}
        ></Field>
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};
const DialogReduxTextarea = reduxForm({ form: "dialogTextarea" })(
  DialogTextarea
);

const Dialogs = (props) => {
  let itemsElements = props.dialogs.map((i, idx) => {
    return <DialogItem key={idx} name={i.name} id={i.id} />;
  });
  let messagesElements = props.messages.map((m, idx) => {
    return <Message key={idx} message={m.message} />;
  });

  let onSendMessage = (values) => {
    props.sendMessage(values.dialogTextarea);
  };
  if (!props.isAuth) {
    return <Redirect to={"/login"} />;
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{itemsElements}</div>
      <div className={s.dialogsMessages}>
        {messagesElements}
        <DialogReduxTextarea onSubmit={onSendMessage} />
      </div>
    </div>
  );
};
export default Dialogs;
