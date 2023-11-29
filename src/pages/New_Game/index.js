import React, { useState } from 'react'
import {View, Text,TouchableOpacity} from 'react-native'
import {styles} from './styles.js';
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function App(){

    function salvar(){
    AsyncStorage.setItem('forca', 0);
    AsyncStorage.setItem('velocidade', 0);
    AsyncStorage.setItem('inteligencia', 0);
    AsyncStorage.setItem('agilidade', 0);
    AsyncStorage.setItem('nome', "");
    AsyncStorage.setItem('classe', "");

    alert('Personagem Apagado!');
    }



    return(
      <View style={styles.container}>
        <TouchableOpacity onPress={salvar}>
        <Text style={styles.dado}>APAGAR PERSONAGEM</Text>
        </TouchableOpacity>         
      </View>    
    )
  }