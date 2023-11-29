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
    salvar:{
    backgroundColor: '#635858',
    color: '#FFF',
    height: 50,
    padding: 10,
    alignContent: 'center',
    marginTop: 30
      },
  });




  export {styles};