import React, { useState, useEffect } from 'react';
import { Button, ScrollView, View, Text, TextInput, SafeAreaView, TouchableOpacity, StyleSheet, Image, FlatList, Modal } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import MarkerIcon from '../assets/Point.png';

function Map() {
    const [locList, setLocList] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
    async function getLoc() {
        let url = 'https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?limit=-1';
        let response = await fetch(url);
        let data = await response.json();
        setLocList(data.results);
    }

    getLoc();
    }, []);

    return (
        <View>
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
            <MapView 
                style={styles.map} 
                initialRegion={{
                    latitude: 48.86053167532582,
                    longitude: 2.35241,
                    latitudeDelta: 0.08,
                    longitudeDelta: 0.08
                }}
            >
                {locList.map((item) => {
                    if (item.lat_lon && item.lat_lon.lon !== null && item.lat_lon.lat !== null) {
                        return (
                            <Marker
                                title={item.title}
                                key={item.id}
                                coordinate={{
                                  latitude: item.lat_lon.lat,
                                  longitude: item.lat_lon.lon,
                                }}
                            >
                                <Image
                                    source={MarkerIcon}
                                    style={{ width: 20, height: 20 }} 
                                />
                                <Callout style={{ width: 150, height: 50, justifyContent: 'space-between' }} onPress={() => {
                                    setSelectedItem(item);
                                    setModalVisible(true);
                                }}>
                                    <Text>{item.title}</Text>
                                </Callout>
                            </Marker>
                        );
                    } 
                })}  
            </MapView>
            {modalVisible && selectedItem && (
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(false);
                    }}
                >
                    <View style={{ marginTop: 100, flex: 1, alignItems: 'center', justifyContent: 'space-between', fontSize: 20, borderRadius: 50 }}>
                        <View>
                        <View style={styles.description}>
                            <Text>{selectedItem.title}</Text>
                            <Image source={{uri: selectedItem.cover_url}} style={styles.calloutImage} />
                            <Text>{selectedItem.lead_text}</Text>
                            <Text style={styles.adresse}>Adresse: {selectedItem.address_street} {selectedItem.address_zipcode} {selectedItem.address_city}</Text>
                            <Text></Text>
                            <Text>Prix: {selectedItem.price_detail}</Text>
                            <Text></Text>
                            <Text>Lien du site web: {selectedItem.url}</Text>
                          
                            
                        </View>    
                            <TouchableOpacity
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}
                            >
                                <View style={styles.fermerbulle}><Text style={styles.textebtn}>Cliquez ici pour fermer</Text></View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    map: { 
        width: '100%', 
        height: '100%'
    },
    description: {
      minHeight: 150
    },
    calloutStyle: {
      width: 200,  
      height: 500, 
    },
    fermerbulle: {
      alignItems: 'center',
      alignContent: 'center',
      borderWidth: 3,
      borderRadius: 20,
      minHeight: 50,
      width: 330,
      marginLeft: 20,
      marginTop: 75
    },
    textebtn: {
      color: '#fe593e',
      flex: 1,
      fontSize: 30
    },
    adresse: {
      fontSize: 15,
      marginTop: 20

    },
    searchInput: {
      flex: 1,
      height: 55,
      fontSize: 16,
      paddingLeft: 10
    },
    searchBar: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 15,
      
      
    },
    searchImage: {
      width: 30, 
      height: 30,
    },
});

export default Map;