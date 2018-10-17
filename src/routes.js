
import React from 'react';
import { View } from 'react-native';
import { Redirect, Route, Switch } from 'react-router-native';
import HomePage from './pages/home/index';
import ChatPage from './pages/chat/index';
import LoginPage from './pages/login/index';

const routes = [
  {
    path: '/',
    component: HomePage,
    exact: true,
  },
  {
    path: '/chat',
    component: ChatPage,
    exact: true,
  },
  {
    path: '/login',
    component: LoginPage,
    exact: true,
  }
];

const RouteMap = () => (
    <View style={{flex: 1}}>
      <Switch>
        {routes.map((item, index) => <Route {...item} key={index} />)}
        <Redirect exact from="*" to="/" />
      </Switch>
    </View>
);

export default RouteMap;