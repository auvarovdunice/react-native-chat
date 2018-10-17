import { combineReducers } from 'redux';

import usersReducer from '../pages/home/reducer';
import authReducer from '../pages/login/reducer';
import chatReducer from '../pages/chat/reducer';

export const state = combineReducers({
  authReducer: authReducer,
  usersReducer: usersReducer,
  chatReducer: chatReducer
});