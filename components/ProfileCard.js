import { View, Text, TouchableOpacity } from "react-native";
import { Card, Avatar, Divider } from "react-native-paper";

const ProfileCard = ({ student }) => {
  return (
    <Card style={{ margin: 10 }}>
      <Card.Content>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Avatar.Image size={200} source={student?.profile_pic} />
          <View>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              {student?.name}
            </Text>
            <Text style={{ fontSize: 16 }}>
              Age: {student?.age} | Gender: {student?.gender}
            </Text>
            <Divider />
            <Text>Contact Information</Text>
            <Text>Email: {student?.email}</Text>
            <Text>Phone: {student?.phone}</Text>
            <Text>Address: {student?.address}</Text>
            <Divider />
            <Text>Biological Information</Text>
            <Text>Gender: {student?.gender}</Text>
            <Text>Age: {student?.age}</Text>
            <Text>Blood Group: {student?.blood_group}</Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

export default ProfileCard;
