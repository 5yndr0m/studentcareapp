import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Avatar, Card } from "react-native-paper";
import ProfileCard from "../components/ProfileCard";
import UOV_Banner from "../components/UOV_Banner";

export default function Profile({ route }) {
  const student = route.params?.student;

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.header}>
          <UOV_Banner />
        </View>
        <View style={styles.container2}>
          <ProfileCard student={student} />
        </View>
        <View style={styles.footer}>
          <Text variant="titleMedium" style={styles.footerText}>UoV @ 2024</Text>
        </View>
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
  header: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container2: {
    flex: 2,
    backgroundColor: "#fff",
    padding: 20,
  },
  footer: {
    flex: 1,
    backgroundColor: "#e2bee2",
    justifyContent: "center", 
    alignItems: "center",
  },
  footerText: {
    color: "#fff", 
  },
  scrollView: {
    flexGrow: 1,
  },
});
