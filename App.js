import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image} from 'react-native';
import CarItem from './components/CarItem/index.js';
import CarsList from './components/carsList';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarsList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  
});
