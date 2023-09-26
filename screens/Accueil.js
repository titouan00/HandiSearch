import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import MapView from 'react-native-maps';

// <MapView style={styles.map} />
// style de la map: map: { width: '100%', height: '100%',},

function Accueil() {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        title="Aller à la page de connexion"
        onPress={() => navigation.navigate('Connexion')}
      />
      <Button
      title="Aller à la page d'inscription"
      onPress={() => navigation.navigate('Inscription')} 
      />
    </View>
  );
  }





  





export default Accueil
