import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LoginForm from './components/form/index';


class LoginPageBody extends Component {
    componentDidMount() {
        
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <LoginForm />
            </View>
        );
    }
}

export default LoginPageBody;
