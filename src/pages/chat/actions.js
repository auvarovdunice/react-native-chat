import actionTypes  from './constants';

export default {
  clearSelectedUser: () => {
    return {
      type: actionTypes.SET_CHAT_USER,
      payload: {}
    };
  },
  fetchedMessage: (message) => {
    return {
      type: actionTypes.FETCHED_MESSAGE,
      payload: message
    };
  },
  fetchChat: (chatUser) => {
    return {
      type: actionTypes.FETCH_CHAT,
      payload: chatUser
    };
  },
  fetchedChat: (messages) => {
    return {
      type: actionTypes.FETCH_CHAT_SUCCESS,
      payload: messages
    };
  },
  fetchChatError: (error) => {
    return {
      type: actionTypes.FETCH_CHAT_ERROR,
      payload: error
    };
  },
  postMessage: (message) => {
    return {
      type: actionTypes.POST_MESSAGE,
      payload: message
    };
  },
  postMessageError: (error) => {
      return {
        type: actionTypes.POST_MESSAGE_ERROR,
        payload: error
      };
  },
};