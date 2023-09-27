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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  searchImage: {
    width: 30, 
    height: 30,
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
    marginLeft: 'auto',
    borderColor: 'Black',
    },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    
  },
  searchInput: {
    flex: 1,
    height: 55,
    fontSize: 16,
    paddingLeft: 10
  },
});
