import homeEffects from '../pages/home/effects';
import loginEffects from '../pages/login/effects';
import chatEffects from '../pages/chat/effects';
import {all, fork} from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    fork(homeEffects),
    fork(loginEffects),
    fork(chatEffects),
  ]);
}


