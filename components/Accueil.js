import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

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
