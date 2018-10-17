
import actionTypes from './constants';

const initialState = {
  messages: [],
  chatUser: {},
  isLoading: false,
  error: {}
}

export default (state = initialState, action) => {
  
  switch (action.type) {
    case actionTypes.FETCH_CHAT:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.FETCH_CHAT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        messages: [...action.payload]
      }
    case actionTypes.FETCHED_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      }
    case actionTypes.FETCH_CHAT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case actionTypes.POST_MESSAGE: {
      return state;
    }
    case actionTypes.SET_CHAT_USER:
      return {
        ...state,
        chatUser: action.payload
      }

    default:
      return state;
  }
};