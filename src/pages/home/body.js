import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HomeForm from './components/form/index';


class HomePageBody extends Component {
    componentDidMount() {
        
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <HomeForm />
            </View>
        );
    }
}

export default HomePageBody;
