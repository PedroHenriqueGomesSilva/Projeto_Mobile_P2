import React, { useState } from 'react'
import {View, Text,TouchableOpacity} from 'react-native'
import api from './services/api'
import {styles} from './styles.js';


export default function App(){
  const [dados, setDados] = useState(0)

  const chamarDados = async () => {
    const response = await api.get();
    setDados(response.data)
  }


    return(
      <View style={styles.container}>
        <TouchableOpacity onPress={chamarDados}>
      <View style={styles.dado}>
        <Text style={styles.texto}>{dados}</Text>
      </View>
        </TouchableOpacity>         
      </View>    
    )
  }