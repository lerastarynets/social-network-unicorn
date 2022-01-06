const SEND_MESSAGE = "dialogs/SEND-MESSAGE";

let initialState = {
  dialogs: [
    { name: "Elizabeth", id: 1 },
    { name: "Anastasia", id: 2 },
    { name: "Sergey", id: 3 },
    { name: "Alla", id: 4 },
    { name: "Olga", id: 5 },
    { name: "Diana", id: 6 },
    { name: "Vitaliy", id: 7 },
  ],
  messages: [
    { id: 1, message: "hi" },
    { id: 2, message: "wassup?" },
    { id: 3, message: "let's go for a walk" },
    { id: 4, message: "i like u" },
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
