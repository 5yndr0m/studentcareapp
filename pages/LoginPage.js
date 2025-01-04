import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import UOV_Banner from '../components/UOV_Banner';

export default function LoginPage() {
  return (
      <ScrollView>
        
        <View style={styles.container}>
        <View style={styles.header}>
          <UOV_Banner />
        </View>
        <View style={styles.banner}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    flex: 1,
    backgroundColor: 'red',
  },
  banner: {
    flex: 1,
    backgroundColor: 'blue',
  },
  container2: {
    flex: 3,
    backgroundColor: 'red',
  },
  footer: {
    flex: 1,
    backgroundColor: 'blue',
  },
  safe: {
    flex: 1,
  }
});
