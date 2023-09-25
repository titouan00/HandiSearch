import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import CustomFonts from '@react-native-custom-fonts';

// Configurez les polices personnalisées ici
CustomFonts.setCustomFonts({
  'Abel': require('./assets/fonts/Abel-Regular.ttf'),
});

AppRegistry.registerComponent(appName, () => App);
