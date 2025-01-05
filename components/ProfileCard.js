import { View, TouchableOpacity } from "react-native";
import { Card, Avatar, Divider, Text } from "react-native-paper";
import { StyleSheet } from "react-native";

const ProfileCard = ({ student }) => {
  return (
    <Card>
      <Card.Content>
        <View style={styles.container}>
          <View style={styles.overview}>
            <Avatar.Image
              size={200}
              source={student?.profile_pic}
              style={styles.avatar}
            />
            <Text variant="headlineSmall" style={styles.name}>
              {student?.name}
            </Text>
            <Text style={styles.basicInfo}>
              Age: {student?.age} | Gender: {student?.gender}
            </Text>
          </View>
          <Divider style={styles.divider} />
          <View style={styles.section}>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              Contact Information
            </Text>
            <Text style={styles.infoText}>Email: {student?.email}</Text>
            <Text style={styles.infoText}>Phone: {student?.phone}</Text>
            <Text style={styles.infoText}>Address: {student?.address}</Text>
          </View>
          <Divider style={styles.divider} />
          <View style={styles.section}>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              Biological Information
            </Text>
            <Text style={styles.infoText}>Gender: {student?.gender}</Text>
            <Text style={styles.infoText}>Age: {student?.age}</Text>
            <Text style={styles.infoText}>
              Blood Group: {student?.blood_group}
            </Text>
          </View>
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

export default ProfileCard;
