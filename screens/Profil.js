import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Profil() {
  const navigation = useNavigation();
  const [nom, setNom] = useState('John');
  const [prenom, setPrenom] = useState('Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [description, setDescription] = useState('Bienvenue sur mon profil !');
  const [editable, setEditable] = useState(false);

  const handleSaveProfile = () => {
    setEditable(false);
    // Ajoutez ici la logique pour enregistrer les modifications du profil
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo_pocketparis.png')} style={styles.image} />

      <View style={styles.profileInfo}>
        <TextInput
          style={[styles.input, { marginBottom: 15 }]}
          placeholder="Nom"
          onChangeText={(text) => setNom(text)}
          value={nom}
          editable={editable}
        />
        <TextInput
          style={[styles.input, { marginBottom: 15 }]}
          placeholder="Prénom"
          onChangeText={(text) => setPrenom(text)}
          value={prenom}
          editable={editable}
        />
        <TextInput
          style={[styles.input, { marginBottom: 15 }]}
          placeholder="Adresse e-mail"
          onChangeText={(text) => setEmail(text)}
          value={email}
          editable={editable}
        />
        <TextInput
          style={[styles.input, { marginBottom: 15 }]}
          placeholder="Description"
          onChangeText={(text) => setDescription(text)}
          value={description}
          editable={editable}
        />
      </View>

      {!editable ? (
        <TouchableOpacity style={styles.editButton} onPress={() => setEditable(true)}>
          <Text style={styles.editButtonText}>Modifier le profil</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveProfile}>
          <Text style={styles.saveButtonText}>Enregistrer</Text>
        </TouchableOpacity>
      )}

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
    backgroundColor: '#ffffff',
    padding: 20,
  },
  avatar: {
    width: 175,
    height: 175,
    borderRadius: 87.5,
    marginBottom: 20,
  },
  profileInfo: {
    width: '100%',
    marginBottom: 20,
  },
  image: {
    width: 175,
    height: 175,
    marginBottom: 100
  },
  input: {
    marginBottom: 30,
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 10,

  },
  editButton: {
    backgroundColor: '#fe593e',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  editButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 20,
  },
  backButtonText: {
    color: '#fe593e',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
