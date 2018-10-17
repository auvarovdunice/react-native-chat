import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { Redirect } from 'react-router';
import { Header, Icon, List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import actions from '../../actions';
import style from '../../styles';
import { selectCurrentUser, selectUsers } from '../../selectors';
import constants from '../../constants';
import socket from '../../../../sockets/index';


export class HomeForm extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        socket.on(constants.ALL_USERS, (data) => {
            this.props.fetchAllUsersSuccess(data.users);
        });
        socket.on(constants.ACTIVE_USERS, (data) => {
            this.props.fetchActiveUsersSuccess(data.activeUsers);
        });
        this.props.fetchActiveUsers();
        this.props.fetchAllUsers();
    }

    logoutUser() {
        this.props.logout();
    }

    userClicked(user) {
        this.props.setChatUser(user);
    }

    render() {
        const user = this.props.currentUser;
        const activeUsers = this.props.activeUsers;
        const chatUser = this.props.chatUser;

        if (!user.username)
            return (
                <Redirect to='/login' />
            );

        if (chatUser.username)
            return (
                <Redirect to='/chat' />
            );

        let usersTemplate = (<View style={style.emptycontent}>
            <Text style={style.nocontenttext}>
                No users
            </Text>
        </View>);


        if (activeUsers) {
            usersTemplate = activeUsers.map((userItem, index) => {
                return (<ListItem
                    key={userItem.username}
                    title={userItem.username}
                    subtitle={(userItem.username === user.username)? 'You': ''}
                    onPress={() => this.userClicked(userItem)}
                />);
            })
        }

        return (
            <View style={style.container} >
                <Header
                outerContainerStyles={{ height: 80 }}
                    leftComponent={
                        <Icon
                            name='sign-out'
                            type='font-awesome'
                            size={30}
                            color='#ffff'
                            onPress={() => this.logoutUser()} />
                    }
                    centerComponent={{
                        text: 'Users page',
                        style: { color: '#fff', fontSize: 20 }
                    }}
                />
                <View style={style.contentcontainer}>
                    <List>
                        {usersTemplate}
                    </List>
                </View>
            </View >
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...selectCurrentUser(state),
        ...selectUsers(state),
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => { dispatch(actions.logout()); },
        fetchAllUsers: () => { dispatch(actions.fetchAllUsers()); },
        fetchActiveUsers: () => { dispatch(actions.fetchActiveUsers()); },
        fetchAllUsersSuccess: (users) => { dispatch(actions.fetchAllUsersSuccess(users)); },
        fetchActiveUsersSuccess: (users) => { dispatch(actions.fetchActiveUsersSuccess(users)); },
        setChatUser: (user) => { dispatch(actions.selectChatUser(user)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeForm);
