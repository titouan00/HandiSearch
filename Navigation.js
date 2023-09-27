import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from './screens/Home';  
import Map from './screens/Map';  
import Profil from './screens/Profil';  
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function getIconColor(focused){
  const color = focused ? '#FE593E' : '#9E9E9E'
  return color
}

const Tabs = () => {
  return (
    <Tab.Navigator 
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 15,
          right: 15,
          elevation: 0,
          borderRadius: 25,
          height: 70,
          backgroundColor:'#fff',
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom:0,
          flex: 1,
          justifyContent:'center',
          alignItems:'center',
        }
      }}
    >
      <Tab.Screen name='Home' component={Home} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="home" size={30} color={getIconColor(focused)}/>
            
          ),
          
        }}/>
      <Tab.Screen name='Map' component={Map} options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons name="target" size={30} color={getIconColor(focused)} />
          ),
        }}/>
      <Tab.Screen name='Profil' component={Profil} options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="user" size={30} color={getIconColor(focused)}/>
          ),
        }}/>
    </Tab.Navigator>
  );
};

export default Tabs;

// const AppNavigator = () => {
//   return (
//     <NavigationContainer> 
//       <Stack.Navigator initialRouteName="Acceuil">
//         <Stack.Screen name="Connexion" component={Login} />
//         <Stack.Screen name="Inscription" component={Signup} />
//         <Stack.Screen name="Acceuil" component={Acceuil} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default Navigator;