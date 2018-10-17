import React, { PureComponent } from 'react';
import { KeyboardAvoidingView, Text, TextInput, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import actions from '../../actions';
import style from '../../styles';
import { selectUser } from '../../selectors';
import constants from '../../constants';
import socket from '../../../../sockets/index';



export class LoginForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    componentDidMount() {
        socket.on(constants.AUTH_ERROR, (data) => {
        });
        socket.on(constants.LOGGED_IN, (data) => {
            this.props.loginUserSuccess(data.userdata);
        });
    }

    userLogin(event) {
        if (this.state.username && this.state.password) {
            let userData = {
                username: this.state.username,
                password: this.state.password
            };
            this.props.login(userData);
        }
        event.preventDefault();
    }

    render() {
        const user = this.props.currentUser;
        if (user.username) return (
            <Redirect to="/" />
        );
        return (
            <KeyboardAvoidingView style={style.container} behavior="padding">
                <Text style={{ fontSize: 27, margin: 20 }}>LOGIN PAGE</Text>
                <TextInput
                    style={style.inputfield}
                    placeholder='Username'
                    autoCapitalize='none'
                    autoCorrect={false}
                    autoFocus={true}
                    value={this.state.username}
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setState({ username: text })} />
                <TextInput
                    style={style.inputfield}
                    placeholder='Password'
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    value={this.state.password}
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setState({ password: text })} />
                <View style={{ margin: 7 }} />
                <Button onPress={(e) => this.userLogin(e)} title='Login' />
            </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...selectUser(state),
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (userData) => { dispatch(actions.loginUser(userData)); },
        loginUserSuccess: (userData) => { dispatch(actions.loginUserSuccess(userData)); },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
