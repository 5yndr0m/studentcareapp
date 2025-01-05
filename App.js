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

function MainTabs({ route }) {
  const student = route.params?.student;
  
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#4a148c",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "white" },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{ student }}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons name={focused ? "account" : "account-outline"} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Courses"
        component={Courses}
        initialParams={{ student }}
        options={{
          tabBarLabel: "Cources",
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons name={focused ? "school" : "school-outline"} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Subjects"
        component={Subjects}
        initialParams={{ student }}
        options={{
          tabBarLabel: "Subjects",
          tabBarIcon: ({ focused,color, size }) => (
            <MaterialCommunityIcons
              name={focused ? "book-open" : "book-open-outline"}
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
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: { backgroundColor: "#4a148c" },
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
              // headerBackVisible: false,
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
