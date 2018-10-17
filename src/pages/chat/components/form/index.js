import React, { PureComponent } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { View, KeyboardAvoidingView, Platform, ScrollView, TextInput } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { sortBy } from 'underscore';
import { MessageItem } from '../message/index'
import actions from '../../actions';
import style from '../../styles';
import { selectCurrentUser, selectMessages, selectChatUser } from '../../selectors';
import constants from '../../constants';
import socket from '../../../../sockets/index';

export class ChatForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
    }

    componentDidMount() {
        const chatUser = this.props.chatUser;
        const currentUser = this.props.currentUser;

        socket.on(constants.MESSAGE_SENT, (data) => {
            const message = data.message;
            if ((message.from === chatUser.username) || (message.from === currentUser.username)) {
                this.props.fetchedMessage(message);
            }
        });

        socket.on(constants.FULL_DIALOG_SENT, (data) => {
            let messages = data.messages;
            this.props.fetchedChat(messages);
        });

        if (chatUser.username) {
            this.props.fetchChat(chatUser);
        }
    }

    componentWillMount() {
        socket.removeAllListeners(constants.MESSAGE_SENT);
        socket.removeAllListeners(constants.FULL_DIALOG_SENT);
    }

    goBack() {
        this.props.clearChatUser();
    }

    onSend() {
        const message = this.state.message;
        const currentUser = this.props.currentUser;
        const chatUser = this.props.chatUser;
        const formatedMessage = {
            from: currentUser.username,
            to: chatUser.username,
            text: message
        };
        this.setState({ message: '' });
        this.props.postMessage(formatedMessage);
    }

    render() {
        const currentUser = this.props.currentUser;
        let messages = [...this.props.messages];
        const chatUser = this.props.chatUser;

        if (!currentUser.username) {
            return (
                <Redirect to='/login' />
            );
        }

        if (!chatUser.username) {
            return (
                <Redirect to='/' />
            );
        }

        let messagesTemplate = [];

        if (messages.length) {
            messages = sortBy(messages, 'postDate');
            messagesTemplate = messages.map((messageItem, index) => {
                const sender = (messageItem.from === currentUser.username) ? currentUser : chatUser;
                const incoming = (messageItem.from === currentUser.username) ? false : true;
                return (
                    <MessageItem key={messageItem._id} sender={sender} message={messageItem} incoming={incoming} />
                );
            });
        }

        return (
            <KeyboardAvoidingView style={style.container} behavior="padding" >
                <Header
                    outerContainerStyles={{ height: 80 }}
                    leftComponent={
                        <Icon
                            name='ios-arrow-back'
                            type='ionicon'
                            size={32}
                            color='#ffff'
                            onPress={() => this.goBack()} />
                    }
                    centerComponent={{
                        text: `Chat with ${chatUser.username}`,
                        style: { color: '#fff', fontSize: 20 }
                    }} />

                <ScrollView
                    ref={ref => this.scrollView = ref}
                    onContentSizeChange={(contentWidth, contentHeight) => {
                        this.scrollView.scrollToEnd({ animated: true });
                    }}>
                    {messagesTemplate}
                </ScrollView>
                <View style={style.footer}>
                    <View style={style.inputContainer}>
                        <TextInput style={style.inputs}
                            placeholder="Write a message..."
                            underlineColorAndroid='transparent'
                            value={this.state.message}
                            onChangeText={(message) => this.setState({ message })} />
                    </View>
                    <Icon
                        name='ios-send'
                        type='ionicon'
                        raised
                        size={24}
                        color='#bbb'
                        onPress={() => this.onSend()} />
                </View>
            </KeyboardAvoidingView>
        );
    }
}




const mapStateToProps = (state, ownProps) => {
    return {
        ...selectCurrentUser(state),
        ...selectMessages(state),
        ...selectChatUser(state),
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchedMessage: (message) => { dispatch(actions.fetchedMessage(message)); },
        fetchChat: (chatUser) => { dispatch(actions.fetchChat(chatUser)); },
        fetchedChat: (messages) => { dispatch(actions.fetchedChat(messages)); },
        postMessage: (message) => { dispatch(actions.postMessage(message)); },
        clearChatUser: () => { dispatch(actions.clearSelectedUser()); },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatForm);
