import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, Button } from "react-native-paper";
import UOV_Banner from "../components/UOV_Banner";

export default function LoginPage() {
  const [text, setText] = useState("");

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <UOV_Banner />
        </View>
        <View style={styles.title}>
          <Text variant="displaySmall" style={styles.titleText}>
            STUDENT LOGIN
          </Text>
        </View>
        <View style={styles.container2}>
          <TextInput
            mode="outlined"
            label="Username"
            value={text}
            onChangeText={(text) => setText(text)}
          />
          <TextInput
            mode="outlined"
            label="Password"
            value={text}
            onChangeText={(text) => setText(text)}
          />
          <Button mode="contained" onPress={() => console.log("Pressed")}>
            Login
          </Button>
        </View>
        <View style={styles.footer}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    flex: 2,
    backgroundColor: "#fff",
  },
  titleText: {
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  container2: {
    flex: 3,
    backgroundColor: "red",
  },
  footer: {
    flex: 1,
    backgroundColor: "#e2bee2",
  },
});
