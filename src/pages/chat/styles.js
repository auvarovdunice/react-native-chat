import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  topcontainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'moccasin'
  },

  topcontent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 40,
    marginHorizontal: 10,
    marginBottom: 5,
  },

  contentcontainer: {
    flex: 4,
  },

  textlabel: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 20
  },

  todoItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'cornsilk',
    margin: 10,
    borderRadius: 4,
  },

  todoItem__label: {
    flex: 4,
    margin: 5,
    fontSize: 24,
  },

  todoItem__button: {
    flex: 1,
    margin: 5,
    fontSize: 10,
  },

  inputfield: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: 'white',
    width: 200,
    height: 40,
    padding: 10,
    margin: 5,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#D50000',
    borderRadius: 6,
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
  },
  list: {
    paddingHorizontal: 17,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    height: 70,
    backgroundColor: 'darkgray',
    paddingHorizontal: 10,
    padding: 5,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  inputs: {
    height: 40,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },

});

export default style;