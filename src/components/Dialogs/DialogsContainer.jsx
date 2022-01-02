import { sendMessage} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import React from 'react';
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class DialogsAPIComponent extends React.Component {
  render() {
      return <div>
        {this.props.isFetching ? <Preloader /> : null}
        <Dialogs {...this.props}/>
        </div>
    }
}


//let AuthRedirectComponent = withAuthRedirect(DialogsAPIComponent)



// const DialogsContainer = connect(mapStateToProps,
//  {
//    sendMessage,
//    updateNewMessageText
//   })(AuthRedirectComponent);

let mapStateToProps = (state) => {
  return {
    messages: state.dialogsReducer.messages,
    dialogs: state.dialogsReducer.dialogs,
    newMessageText: state.dialogsReducer.newMessageText,
    isAuth:state.authReducer.isAuth
  }
}

export default compose(connect(mapStateToProps,
{
  sendMessage,
}),
 )(DialogsAPIComponent);

