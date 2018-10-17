import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  contentcontainer: {
    flex: 4,
  },

  emptycontent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  nocontenttext: {
    textAlign: 'center',
    fontSize: 32,
    margin: 20
  }

});

export default style;