import React, { useState, useEffect } from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard, Label} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {styles} from './styles.js';


export default function App(){
  const [nome, setNome] = useState()
  const [classe, setClasse] = useState()

  const [input, setInput] = useState()
  const [input2, setInput2] = useState()

    const gravar = async () => {
    setNome(input)
    await AsyncStorage.setItem('nome', input);

    setClasse(input2)
    await AsyncStorage.setItem('classe', input2);

    Keyboard.dismiss();
    alert('Salvo com sucesso!');
    }

    return(
      <View style={styles.container}>
      <View style={styles.status}>
      <Text style = {styles.texto}> NOME</Text>
        <TextInput
        style={styles.input}
        value={input}
        onChangeText={(texto) => setInput(texto)}
        underlineColorAndroid="transparent"
        />
      </View>

      <View style={styles.status}>
      <Text style = {styles.texto}> CLASSE</Text>
        <TextInput
        style={styles.input}
        value={input2}
        onChangeText={(texto) => setInput2(texto)}
        underlineColorAndroid="transparent"
        />
      </View>

        <TouchableOpacity onPress={gravar}>
          <Text style={styles.botao}>SALVAR</Text>
        </TouchableOpacity>

      </View>    
   )
  }