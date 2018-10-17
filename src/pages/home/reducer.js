
import actionTypes from './constants';

const initialState = {
  users: [],
  activeUsers: [],
  isLoading: false,
  error: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_USERS:
    return {
      ...state,
      isLoading: true
    };
    case actionTypes.FETCH_ALL_USERS_SUCCESS:
    return {
      ...state,
      isLoading: false,
      users: action.payload
    };
    case actionTypes.FETCH_ALL_USERS_ERROR:
    return {
      ...state,
      isLoading: false,
      error: action.payload
    };
    case actionTypes.FETCH_ACTIVE:
    return {
      ...state,
      isLoading: true,
    };
    case actionTypes.FETCH_ACTIVE_USERS_SUCCESS:
    return {
      ...state,
      isLoading: false,
      activeUsers: action.payload
    };
    case actionTypes.FETCH_ACTIVE_USERS_FAIL:
    return {
      ...state,
      isLoading: false,
      error: action.payload
    };

    default:
      return state;
  }
};