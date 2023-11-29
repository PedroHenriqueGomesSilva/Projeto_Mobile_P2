import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
      flex: 1,
      textAlign: 'center',
      backgroundColor: '#954520'
    },
    texto:{
      textAlign: 'center',
      fontSize: 60,
      fontWeight:'bold'
    },
    botao:{
    backgroundColor: '#222',
    color: '#FFF',
    padding: 10,
  },
  status:{
      textAlign: 'center',
      backgroundColor: '#c76c3f',
      borderWidth: 3,
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
    dado:{
      textAlign: 'center',
      fontSize: 30,
      fontWeight:'bold',
      borderWidth: 6,
      borderRadius: 5,
      marginHorizontal: 120,
      backgroundColor: 'white',
      marginTop: 50,
      width: 100,
      height: 100,   
    },
  });

  export {styles};