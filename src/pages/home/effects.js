import {call, put, all, fork, takeEvery } from 'redux-saga/effects';
import constants from './constants';
import actions from './actions';
import socket from '../../sockets/index';

function* getAllUsers () {
  try {
    socket.emit(constants.ALL_USERS_GET);
  } catch(err) {
    console.log(err);
    yield put(actions.fetchAllUsersError(err)) ;
  }
}

function* getActiveUsers () {
  try {
    socket.emit(constants.ACTIVE_USERS_GET);
  } catch(err) {
    console.log(err);
    yield put(actions.fetchActiveUsersFail(err)) ;
  }
}

function* fetchAllUsers(){
  yield takeEvery(constants.FETCH_ALL_USERS, getAllUsers);
}

function* fetchActiveUsers(){
  yield takeEvery(constants.FETCH_ACTIVE_USERS, getActiveUsers);
}

export default function* (){
  yield all([
    fork(fetchAllUsers),
    fork(fetchActiveUsers),
  ]);
}
