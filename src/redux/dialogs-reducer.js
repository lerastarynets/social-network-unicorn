const SEND_MESSAGE = "dialogs/SEND-MESSAGE";

let initialState = {
  dialogs: [
    { name: "Julie", id: 1 },
    { name: "Liza", id: 2 },
    { name: "Alla", id: 3 },
    { name: "Mila", id: 4 },
    { name: "Nastya", id: 5 },
    { name: "Diana", id: 6 },
    { name: "Anaconda", id: 7 },
  ],
  messages: [
    { id: 1, message: "hi" },
    { id: 2, message: "wassup?" },
    { id: 3, message: "let's have a brunch" },
    { id: 4, message: "u bae" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newM = {
        id: state.messages.length + 1,
        message: action.newMessageText,
      };
      return {
        ...state,
        messages: [...state.messages, newM],
      };
    }
    default:
      return state;
  }
};

export const sendMessage = (newMessageText) => {
  return { type: SEND_MESSAGE, newMessageText };
};

export default dialogsReducer;
