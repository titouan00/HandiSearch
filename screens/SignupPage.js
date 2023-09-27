
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Inscription() {
  // const navigation = useNavigation();
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInscription = () => {
    // Ajoutez ici la logique d'inscription avec les informations saisies
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo_pocketparis.png')} style={{ width: 175, height: 175 }}/>

      <TextInput
        style={styles.input}
        placeholder="Nom"
        onChangeText={(text) => setNom(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Prénom"
        onChangeText={(text) => setPrenom(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Adresse e-mail"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.signupButton} onPress={handleInscription}>
        <Text style={styles.signupButtonText}>Inscription</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Acceuil')}
      >
        <Text style={styles.backButtonText}>Retour à la page d'accueil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    marginBottom: 15,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  signupButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  signupButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 20,
  },
  backButtonText: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
