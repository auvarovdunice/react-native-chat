export const selectCurrentUser = state => ({
  currentUser: state.authReducer.currentUser,
});

export const selectUsers= state => ({
  users: state.usersReducer.users,
  activeUsers: state.usersReducer.activeUsers,
  chatUser: state.chatReducer.chatUser
});
