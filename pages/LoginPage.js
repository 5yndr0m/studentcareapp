import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, Button } from "react-native-paper";
import UOV_Banner from "../components/UOV_Banner";

const { height: screenHeight } = Dimensions.get('window');

export default function LoginPage() {
  const [text, setText] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
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
            style={styles.txtInput}
          />
          <TextInput
            mode="outlined"
            label="Password"
            value={text}
            onChangeText={(text) => setText(text)}
            style={styles.txtInput}
          />
          <Button mode="contained" onPress={() => console.log("Pressed")} style={styles.logBtn}>
            Login
          </Button>
        </View>
        <View style={styles.footer} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    flexDirection: "column",
  },
  scrollView: {
      flexGrow: 1,
    },
  header: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleText: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  container2: {
    flex: 2,
    backgroundColor: "#fff",
    padding: 20,
  },
  footer: {
    flex: 1,
    backgroundColor: "#e2bee2",
  },
  logBtn: {
    backgroundColor: "#e2bee2",
    marginTop: 20,
  },
  txtInput: {
    marginBottom: 10,
  }
});
