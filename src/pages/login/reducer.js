import actionTypes from './constants';

const initialState = {
  currentUser: {},
  isLoading: false,
  error: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      return {
        ...state,
        isLoading: true
      }
    case actionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: action.payload
      }
    case actionTypes.USER_LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case actionTypes.USER_LOGOUT:
      return {
        ...state,
        isLoading: false,
        currentUser: {}
      }
      case actionTypes.USER_LOGOUT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state;
  }
};