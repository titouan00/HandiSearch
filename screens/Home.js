import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';


export default function Home() {

  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.texteheader}>
        <Text style={styles.greetingText}>Bonjour Barnabé </Text>
        <Text style={styles.findActivityText}>Trouvez votre activité</Text>
        </View>
        <Image
          source={require('../assets/photodeprofil.jpg')} 
          
          style={styles.profileImage}
        />
      </View>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Effectuez une recherche"
        />
        <Image
          source={require('../assets/recherche.png')} 
          style={styles.searchImage}
        />  
      </View>
      <View style={styles.buttonRow}>
        
        <TouchableOpacity style={styles.button}>
        <Image
          source={require('../assets/acotepocket.png')} 
          style={styles.CoteImage}
          /> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Atelier</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cinéma</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Parc</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Atelier</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.visite}>
      <Text style={styles.visite_text} >Les plus visités</Text>
      <Image
          source={require('../assets/directionpocket.png')} 
          style={styles.VisiteImage}
          /> 
      </TouchableOpacity>

{/* Mettre image arc de triomphe */}


      <TouchableOpacity style={styles.visite}>
      <Text style={styles.visite_text}>Coup de coeur de la semaine</Text>
      </TouchableOpacity>


    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  visite: {
  marginTop: 15,
  flexDirection: 'row',
  justifyContent: 'space-between',
  },
  visite_text: {
    fontSize: 20,
  },
  VisiteImage: {
width: 22,
height:22
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 15,
    borderColor: '#e4e4e4',
    paddingLeft: 15,
    paddingRight: 15,
  },
  buttonText: {
    color: '#9e9e9e', 
  },
  searchImage: {
    width: 30, 
    height: 30,
  },
  CoteImage: {
    width: 15,
    height: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 18,
    color: 'lightgray'
  },
  findActivityText: {
    fontSize: 18,
    fontWeight: 'dark',
    marginTop: 5
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginLeft: 'auto',    },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15
    
  },
  searchInput: {
    flex: 1,
    height: 55,
    fontSize: 16,
    paddingLeft: 10
  },
});

