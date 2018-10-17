import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import style from './styles';
import moment from 'moment';


export class MessageItem extends PureComponent {
    render() {
        console.log(message);
        const message = this.props.message;
        const sender = this.props.sender;
        const incoming = this.props.incoming;
        const postTime = moment(message.postTime).format('HH:MM:SS DD/MM/YYYY');
        const itemStyle = incoming ? style.itemIn : style.itemOut;
        const bubleColorStyle = incoming ? style.redColor : null;
        return (
            <View style={[style.item, itemStyle]}>
                <View style={[style.balloon, bubleColorStyle]}>
                    <Text style={style.sender}>{sender.username}</Text>
                    <Text>{message.text}</Text>
                    <Text style={style.time}>{postTime}</Text>
                </View>
            </View>
        );
    }
}