import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './LoginPage'; 
import Signup from './SignupPage';  
import Acceuil from './Accueil';  
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Acceuil">
        <Stack.Screen name="Connexion" component={Login} />
        <Stack.Screen name="Inscription" component={Signup} />
        <Stack.Screen name="Acceuil" component={Acceuil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;