import {call, put, all, fork, takeEvery } from 'redux-saga/effects';
import constants from './constants';
import actions from './actions';
import socket from '../../sockets/index';

function* getFullDialog ({payload}) {
  try {
    socket.emit(constants.FULL_DIALOG_GET, payload);
  } catch(err) {
    console.log(err);
    yield put(actions.fetchChatError(err)) ;
  }
}

function* sendMessage ({payload}) {
  try {
    socket.emit(constants.SEND_MESSAGE, payload);
  } catch(err) {
    console.log(err);
    yield put(actions.postMessageError(err)) ;
  }
}


function* fetchChat(){
  yield takeEvery(constants.FETCH_CHAT, getFullDialog);
}

function* postMessage(){
  yield takeEvery(constants.POST_MESSAGE, sendMessage);
}


export default function* (){
  yield all([
    fork(fetchChat),
    fork(postMessage),
  ]);
}
