import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";
import Courses from "./pages/Courses";
import Subjects from "./pages/Subjects";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#e2bee2",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "white" },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Courses"
        component={Courses}
        options={{
          tabBarLabel: "Cources",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="school" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Subjects"
        component={Subjects}
        options={{
          tabBarLabel: "Subjects",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="book-open"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
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
            name="MainTabs"
            component={MainTabs}
            options={{
              headerBackVisible: false,
              title: "Uov Student care",
            }}
          />
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
