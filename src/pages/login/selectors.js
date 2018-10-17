export const selectUser = state => ({
    currentUser: state.authReducer.currentUser,
  });