export default {

  //REDUX ACTIONS
  FETCH_CHAT: 'FETCH_CHAT',
  FETCH_CHAT_SUCCESS: 'FETCH_CHAT_SUCCESS',
  FETCH_CHAT_ERROR: 'FETCH_CHAT_ERROR',
  POST_MESSAGE: 'POST_MESSAGE',
  POST_MESSAGE_ERROR: 'POST_MESSAGE_ERROR',
  SET_CHAT_USER: 'SET_CHAT_USER',
  FETCHED_MESSAGE: 'FETCHED_MESSAGE',

  //SOCKET.IO
  ////Received by server
  FULL_DIALOG_GET: 'FULL_DIALOG_GET',
  SEND_MESSAGE: 'SEND_MESSAGE',

  ////Received by client
  MESSAGE_SENT: 'MESSAGE_SENT',
  FULL_DIALOG_SENT: 'FULL_DIALOG_SENT',
};