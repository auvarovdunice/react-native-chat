import {call, put, all, fork, takeEvery } from 'redux-saga/effects';
import constants from './constants';
import actions from './actions';
import socket from '../../sockets/index';

function* loginUser ({payload}) {
  try {
    socket.emit(constants.CONNECT, payload);
  } catch(err) {
    yield put(actions.loginUserError(err)); 
  }
}

function* logoutUser () {
  try {
    socket.emit(constants.LOGOUT, {});
  } catch(err) {
    console.log(err);
  }
}

function* login(){
  yield takeEvery(constants.USER_LOGIN, loginUser);
}

function* logout(){
  yield takeEvery(constants.USER_LOGOUT, logoutUser);
}

export default function* (){
  yield all([
    fork(login),
    fork(logout)
  ]);
}
