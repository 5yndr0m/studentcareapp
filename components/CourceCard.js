import { View, TouchableOpacity } from "react-native";
import { Card, Avatar, Divider, Text } from "react-native-paper";
import { StyleSheet } from "react-native";
import { courses } from '../assets/StudentsDb';  

const CourceCard = ({ student }) => {
  
  const courseId = student?.course_id;
  const studentCourse = courses.find(course => course.id === courseId);
  
  return (
    <Card>
      <Card.Content>
        <View style={styles.container}>
          <View style={styles.overview}>
            <Text variant="headlineSmall" style={styles.name}>
              {studentCourse?.name}
            </Text>
            <Text style={styles.basicInfo}>
              Code: {studentCourse?.course_code} | Dept: {studentCourse?.department}
            </Text>
          </View>
          <Divider style={styles.divider} />
          <View style={styles.section}>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              Course Information
            </Text>
            <Text style={styles.infoText}>Code: {studentCourse?.course_code}</Text>
            <Text style={styles.infoText}>Department: {studentCourse?.department}</Text>
            <Text style={styles.infoText}>Duration: {studentCourse?.duration}</Text>
            <Text style={styles.infoText}>Description: {studentCourse?.description}</Text>
          </View>
          <Divider style={styles.divider} />
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  overview: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },
  avatar: {
    marginBottom: 15,
  },
  name: {
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  basicInfo: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
    textAlign: "center",
  },
  divider: {
    marginVertical: 10,
    height: 1,
  },
  section: {
    marginVertical: 5,
  },
  sectionTitle: {
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  infoText: {
    fontSize: 16,
  },
});

export default CourceCard;
