import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";
import Courses from "./pages/Courses";
import Subjects from "./pages/Subjects";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: { backgroundColor: "#e2bee2" },
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: "bold",
              color: "#fff",
            },
            headerTintColor: "#fff",
          }}
        >
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{ title: "Uov Student care" }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerBackVisible: false, title: "Uov Student care" }}
          />
          <Stack.Screen name="Courses" component={Courses} />
          <Stack.Screen name="Subjects" component={Subjects} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
