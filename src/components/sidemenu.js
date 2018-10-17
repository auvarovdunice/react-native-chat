import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';


const style = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    textlabel : {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 20,
        backgroundColor: 'red'
    }
  });

class SideMenuForm extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text>
                    Sidemenu
                </Text>
                <Link to="/">
                    <Text>Home</Text>
                </Link>
                <Link to="/details">
                    <Text>Details</Text>
                </Link>
            </View>
        );
    }
}

export default SideMenuForm;
