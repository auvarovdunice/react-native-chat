import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    itemIn: {
        alignSelf: 'flex-start',
        backgroundColor:"seashell",
      },
      itemOut: {
        alignSelf: 'flex-end',
        backgroundColor:"lavenderblush",
      },
      time: {
        alignSelf: 'flex-end',
        margin: 3,
        fontSize:10,
        color:"#808080",
      },
      sender: {
        margin: 3,
        fontSize:16,
        color:"darkblue",
      },
      item: {
        marginVertical: 14,
        flex: 1,
        flexDirection: 'row',
        borderRadius:300,
        padding:3,
      },
      balloon: {
        maxWidth: 250,
        padding: 10,
        borderRadius: 20,
      },
});

export default style;