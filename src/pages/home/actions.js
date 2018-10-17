import actionTypes  from './constants';

export default {
  logout: () => {
    return {
      type: actionTypes.USER_LOGOUT,
    };
  },
  fetchAllUsers: () => {
    return {
      type: actionTypes.FETCH_ALL_USERS,
    };
  },
  fetchAllUsersSuccess: (users) => {
    return {
      type: actionTypes.FETCH_ALL_USERS_SUCCESS,
      payload: users,
    };
  },
  fetchAllUsersFail: () => {
    return {
      type: actionTypes.FETCH_USERS,
    };
  },
  fetchActiveUsers: () => {
    return {
      type: actionTypes.FETCH_ACTIVE_USERS,
    };
  },
  fetchActiveUsersSuccess: (users) => {
    return {
      type: actionTypes.FETCH_ACTIVE_USERS_SUCCESS,
      payload: users,
    };
  },
  fetchActiveUsersFail: () => {
    return {
      type: actionTypes.FETCH_ACTIVE_USERS_FAIL,
    };
  },
  selectChatUser: (user) => {
    return {
      type: actionTypes.SET_CHAT_USER,
      payload: user
    };
  },
};