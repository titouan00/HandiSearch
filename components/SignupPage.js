
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Inscription() {
  const navigation = useNavigation();

  return (
    <Button
      title="Aller à la page d'acceuil"
      onPress={() => navigation.navigate('Acceuil')}
    />
  );
}

export default Inscription;
