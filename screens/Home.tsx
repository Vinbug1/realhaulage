
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import styles from '../constants/MainStyles'

export default function Home({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
    </View>
  );
}

