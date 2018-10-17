import React from 'react';
import { Provider } from 'react-redux';
import { NativeRouter } from 'react-router-native';
import axios from 'axios';
import RouteMap from './src/routes';
import store from './src/store';

axios.defaults.baseURL = "http://192.168.1.127:3001";

const Root = () => (
  <Provider store={store}>
    <NativeRouter>
        <RouteMap />
    </NativeRouter>
  </Provider>
);

export default class App extends React.Component {
  render() {
    return (
      <Root />
    );
  }
}
