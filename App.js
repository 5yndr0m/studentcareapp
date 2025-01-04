import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
});
