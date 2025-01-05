import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, Button, HelperText, MD2Colors } from "react-native-paper";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import UOV_Banner from "../components/UOV_Banner";
import { students } from "../assets/StudentsDb";

const { height: screenHeight } = Dimensions.get("window");

export default function LoginPage({ navigation }) {
  const [text, setText] = useState("");
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (field, value) => {
    setUser((preUser) => ({ ...preUser, [field]: value }));
    setError("");
  };

  const handleLogin = () => {
    const student = students.find(
      (s) => s.username === user.username && s.password === user.password,
    );
    if (student) {
      navigation.replace("MainTabs", { student });
    } else {
      setError("Invalid username or password");
    }
  };

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
            name="username"
            value={user.username}
            onChangeText={(value) => handleInputChange("username", value)}
            style={styles.txtInput}
            activeOutlineColor="#4a148c" 
          />
          <TextInput
            mode="outlined"
            label="Password"
            name="password"
            value={user.password}
            onChangeText={(value) => handleInputChange("password", value)}
            style={styles.txtInput}
            secureTextEntry={!showPassword}
            activeOutlineColor="#4a148c" 
            right={
              <TextInput.Icon
                icon={showPassword ? "eye-off" : "eye"}
                onPress={() => setShowPassword(!showPassword)}
                forceTextInputFocus={false}
                color={showPassword ? "#4a148c" : "#757575"}
              />
            }
          />
          <Button 
            mode="contained" 
            onPress={handleLogin} 
            style={styles.logBtn}
            buttonColor="#4a148c"
          >
            Login
          </Button>
          {error ? (
            <View style={styles.errorContainer}>
              <MaterialCommunityIcons name="alert-circle" size={20} color="white" />
              <Text style={styles.errorText}>{error}</Text>
            </View>
          ) : null}
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
    backgroundColor: "#4a148c", 
  },
  logBtn: {
    marginTop: 20,
  },
  txtInput: {
    marginBottom: 10,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1976d2', 
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  errorText: {
    color: 'white',
    marginLeft: 10,
  },
});