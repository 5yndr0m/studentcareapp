import { View, TouchableOpacity } from "react-native";
import { Card, Avatar, Divider, Text } from "react-native-paper";
import { StyleSheet } from "react-native";
import { courses, subjects, marks } from "../assets/StudentsDb";

const SubjectCard = ({ student }) => {
  const studentId = student?.id;
  const courseId = student?.course_id;
  const studentCourse = courses.find((course) => course.id === courseId);
  const courseSubject = subjects.filter(
    (subject) => subject.course_id === courseId,
  );
  const studentMarks = marks.filter((mark) => mark.student_id === studentId);

  const totalMarks = studentMarks.reduce((sum, mark) => sum + mark.marks, 0);
  const averageMarks =
    studentMarks.length > 0 ? (totalMarks / studentMarks.length).toFixed(2) : 0;

  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.container}>
          <View style={styles.overview}>
            <Text variant="headlineSmall" style={styles.name}>
              {studentCourse?.name}
            </Text>
            <Text style={styles.basicInfo}>
              {courseSubject.length} Subjects | Average: {averageMarks}
            </Text>
          </View>
          <Divider style={styles.divider} />
          <View style={styles.section}>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              Marks Information
            </Text>
            <View style={styles.headerRow}>
              <Text style={styles.headerText}>Subjects</Text>
              <Text style={styles.headerText}>Marks</Text>
            </View>
            <Divider style={styles.subDivider} />
            {courseSubject.map((subject) => {
              const mark = marks.find(
                (m) =>
                  m.subject_id === subject.id && m.student_id === studentId,
              );
              return (
                <View key={subject.id} style={styles.markRow}>
                  <Text style={styles.subjectName}>{subject.name}</Text>
                  <Text style={styles.markValue}>
                    {mark ? `${mark.marks}` : "N/A"}
                  </Text>
                </View>
              );
            })}
          </View>
          <Divider style={styles.divider} />
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    elevation: 4,
    margin: 2,
    borderRadius: 10,
  },
  container: {
    flexDirection: "column",
  },
  overview: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  name: {
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#333",
    fontSize: 24,
  },
  basicInfo: {
    fontSize: 18,
    color: "#666",
    marginBottom: 5,
    textAlign: "center",
  },
  divider: {
    marginVertical: 15,
    height: 1,
    backgroundColor: "#e2bee2",
  },
  subDivider: {
    marginVertical: 8,
    height: 1,
    backgroundColor: "#eee",
  },
  section: {
    marginVertical: 10,
    paddingHorizontal: 5,
  },
  sectionTitle: {
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
    fontSize: 20,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: "#f8f8f8",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#666",
  },
  markRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  subjectName: {
    fontSize: 16,
    flex: 1,
    color: "#444",
  },
  markValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#e2bee2",
    minWidth: 50,
    textAlign: "right",
  },
});

export default SubjectCard;