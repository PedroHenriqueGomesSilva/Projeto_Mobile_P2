import React, { useState, useEffect } from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard, ScrollView} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {styles} from './styles.js';


export default function App(){

  const [forca, setForca] = useState(1)
  const [velocidade, setVelocidade] = useState(1)
  const [inteligencia, setInteligencia] = useState(1)
  const [agilidade, setAgilidade] = useState(1)


  function somarForca(){
    setForca(forca+1);
  }

  function somarVelocidade(){
    setVelocidade(velocidade+1);
  }
    function somarInteligencia(){
    setInteligencia(inteligencia+1);
  }
    function somarAgilidade(){
    setAgilidade(agilidade+1);
  }

  function subtrairForca(){
    setForca(forca-1);
  }

  function subtrairVelocidade(){
    setVelocidade(velocidade-1);
  }
    function subtrairInteligencia(){
    setInteligencia(inteligencia-1);
  }
    function subtrairAgilidade(){
    setAgilidade(agilidade-1);
  }

    function salvar(){
    AsyncStorage.setItem('forca', forca);
    AsyncStorage.setItem('velocidade', velocidade);
    AsyncStorage.setItem('inteligencia', inteligencia);
    AsyncStorage.setItem('agilidade', agilidade);
    alert('Salvo com sucesso!');
    }
  return(
    <ScrollView style={styles.container}>
    <View>
    <View style={styles.stats}>
    <Text style={styles.texto}>FORÇA</Text>
        <TouchableOpacity onPress={subtrairForca}>
          <Text style={styles.botao}>-</Text>
        </TouchableOpacity>    
        <Text style={styles.texto}>{forca}</Text>    
        <TouchableOpacity onPress={somarForca}>
          <Text style={styles.botao}>+</Text>
        </TouchableOpacity>    
    </View>

    <View style={styles.stats}>
    <Text style={styles.texto}>VELOCIDADE</Text>
        <TouchableOpacity onPress={subtrairVelocidade}>
          <Text style={styles.botao}>-</Text>
        </TouchableOpacity>    
        <Text style={styles.texto}>{velocidade}</Text>    
        <TouchableOpacity onPress={somarVelocidade}>
          <Text style={styles.botao}>+</Text>
        </TouchableOpacity>    
    </View>

        <View style={styles.stats}>
    <Text style={styles.texto}>INTELIGENCIA</Text>
        <TouchableOpacity onPress={subtrairInteligencia}>
          <Text style={styles.botao}>-</Text>
        </TouchableOpacity>    
        <Text style={styles.texto}>{inteligencia}</Text>    
        <TouchableOpacity onPress={somarInteligencia}>
          <Text style={styles.botao}>+</Text>
        </TouchableOpacity>    
    </View>

        <View style={styles.stats}>
    <Text style={styles.texto}>AGILIDADE</Text>
        <TouchableOpacity onPress={subtrairAgilidade}>
          <Text style={styles.botao}>-</Text>
        </TouchableOpacity>    
        <Text style={styles.texto}>{agilidade}</Text>    
        <TouchableOpacity onPress={somarAgilidade}>
          <Text style={styles.botao}>+</Text>
        </TouchableOpacity>    
    </View>

    <View style={styles.salvar}>
        <TouchableOpacity onPress={salvar}>
          <Text style={styles.texto}>Salvar</Text>
        </TouchableOpacity>    
    </View>

    </View>
    </ScrollView> 
  )
}