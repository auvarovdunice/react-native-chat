import actionTypes from './constants';

export default {
  loginUser: (userData) => {
    return {
      type: actionTypes.USER_LOGIN,
      payload: userData,
    };
  },
  loginUserSuccess: (user) => {
    return {
      type: actionTypes.USER_LOGIN_SUCCESS,
      payload: user,
    };
  },
  loginUserError: (error) => {
    return {
      type: actionTypes.USER_LOGIN_FAIL,
      payload: error,
    };
  },
  logOut: () => {
    return {
      type: actionTypes.User,
    };
  }
};