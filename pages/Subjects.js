import { StyleSheet, View, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import SubjectCard from "../components/SubjectCard";
import UOV_Banner from "../components/UOV_Banner";

export default function Subjects({ route }) {
  const student = route.params?.student;

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.header}>
          <UOV_Banner />
        </View>
        <View style={styles.container2}>
          <SubjectCard student={student} />
        </View>
        <View style={styles.footer}>
          <Text variant="titleMedium" style={styles.footerText}>
            UoV {"\u00A9"} 2024
          </Text>
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
    fontWeight: "bold",
  },
  scrollView: {
    flexGrow: 1,
  },
});
