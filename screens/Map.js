import { Button, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput,SafeAreaView, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MarkerIcon from '../assets/Point.png';

let locList = []

function CustomMarker() {
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>Tokyo</Text>
    </View>
  );
}


async function getLoc(){
    let url = 'https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?limit=-1'
    let response = await fetch(url)
    let data = await response.json()
    // const loc = data.results.map(item => item.lat_lon)
    locList = data.results
    // return data.results
}
getLoc()
console.log(locList)

function Map() {
    const [locList, setLocList] = useState([]);

    useEffect(() => {
    async function getLoc() {
      try {
        let url = 'https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?limit=-1';
        let response = await fetch(url);
        let data = await response.json();
        setLocList(data.results);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    getLoc();
  }, []);
    return (
        <View>
            <MapView 
                style={styles.map} 
                initialRegion={{
                    latitude: 48.86053167532582,
                    longitude: 2.35241,
                    latitudeDelta: 0.08,
                    longitudeDelta: 0.08
                }}
            >
             
                { locList.map((item) => {
                    if (item.lat_lon && item.lat_lon.lon !== null && item.lat_lon.lat !== null) {
                        return (
                            <Marker

                            title={item.title}
                            image={item.image}
                            lead_text={item.lead_text}
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
                            <CustomMarker/>

                            

                          </Marker>
                        );
                    } 
                })}  
                
            </MapView>
        </View>
    );
}
const styles = StyleSheet.create({
    map: { 
        width: '100%', 
        height: '100%'
    },
    marker: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#007bff",
    borderColor: "#eee",
    borderRadius: 5,
    elevation: 10,
  },
});
export default Map
