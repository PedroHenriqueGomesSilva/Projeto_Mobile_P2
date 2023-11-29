import React, { useState, useEffect } from 'react'
import { View, Text, Image,ScrollView} from 'react-native';
import {styles} from './styles.js';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Sobre() {

  const [nome, setNome] = useState()
  const [classe, setClasse] = useState()
  const [forca, setForca] = useState(1)
  const [velocidade, setVelocidade] = useState(1)
  const [inteligencia, setInteligencia] = useState(1)
  const [agilidade, setAgilidade] = useState(1)

  useEffect( () => {

    const getNome = async () => {
      const nome = await AsyncStorage.getItem('nome')
      setNome(nome)    
    };

    const getClasse = async () => {
      const classe = await AsyncStorage.getItem('classe')
      setClasse(classe)    
    };

    const getForca = async () => {
      const forca = await AsyncStorage.getItem('forca')
      setForca(forca)    
    };

    const getVelocidade = async () => {
      const velocidade = await AsyncStorage.getItem('velocidade')
      setVelocidade(velocidade)    
    };

    const getInteligencia = async () => {
      const inteligencia = await AsyncStorage.getItem('inteligencia')
      setInteligencia(inteligencia)    
    };

    const getAgilidade = async () => {
      const agilidade = await AsyncStorage.getItem('agilidade')
      setAgilidade(agilidade)    
    };

    getNome();
    getClasse();
    getForca();
    getVelocidade();
    getInteligencia();
    getAgilidade();
  });

 return (

    <ScrollView>

   <View  style = {styles.container}>
    <View style = {styles.avatar}> 
    <Image source={{uri:'https://jovemnerd.com.br/wp-content/uploads/2021/03/NC_767-classes-rpg-WALLPAPER.jpg'}} style={styles.image}/>
    </View>

    <View style = {styles.info}> 
    <Text style = {styles.name}>NOME: {nome}</Text>
    <Text style = {styles.classe}>CLASSE: {classe}</Text>
    </View>

    <View style = {styles.stats}>
    <Text style = {styles.status}> STATUS</Text> 
    <Text style = {styles.status}> FORÇA: {forca} </Text>
    <Text style = {styles.status}> VELOCIDADE: {velocidade}</Text>
    <Text style = {styles.status}> INTELIGÊNCIA: {inteligencia} </Text>
    <Text style = {styles.status}> AGILIDADE: {agilidade} </Text>
    </View>


   </View>

  </ScrollView>
  );
}
