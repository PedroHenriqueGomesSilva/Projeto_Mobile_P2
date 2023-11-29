import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Dados from './src/pages/Dados';
import Detalhes from './src/pages/Detalhes';
import Personagem from './src/pages/Personagem';
import Status from './src/pages/Status';
import New_Game from './src/pages/New_Game';


const Tab = createBottomTabNavigator();


export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Personagem" component={Personagem} />
        <Tab.Screen name="Status" component={Status} />
        <Tab.Screen name="Detalhes" component={Detalhes} />
        <Tab.Screen name="Dados" component={Dados} />
        <Tab.Screen name="New Game" component={New_Game} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
