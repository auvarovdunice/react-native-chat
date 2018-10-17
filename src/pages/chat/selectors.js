export const selectCurrentUser = state => ({
  currentUser: state.authReducer.currentUser,
});

export const selectMessages = state =>  ({
  messages: state.chatReducer.messages,
});

export const selectChatUser = state => ({
  chatUser: state.chatReducer.chatUser,
});
