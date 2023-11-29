import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
      flex: 1,
      textAlign: 'center',
      backgroundColor: '#954520'
    },
    texto:{
      textAlign: 'center',
      fontSize: 15,
      fontWeight:'bold'
    },
    botao:{
    backgroundColor: '#222',
    color: '#FFF',
    padding: 10
      },
  status:{
      textAlign: 'center',
      backgroundColor: '#c76c3f',
      borderWidth: 3,
      borderBottomWidth: 0,
      borderColor: 'black',
      fontSize: 30,
      fontWeight:'bold',
      fontFamily: 'cursive'
    },
    stats:{
      textAlign: 'center',
      marginTop: 10,
      backgroundColor: '#c76c3f',
      borderWidth: 3,
      borderColor: 'black',
    },
    input:{
    backgroundColor: 'white',
    height: 20,
    padding: 10,
    borderTopWidth: 3,
    borderColor: 'black',
    alignContent: 'center'
      },
  });




  export {styles};
