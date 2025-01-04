import { View, Text, TouchableOpacity } from 'react-native';
import { Card, Avatar } from 'react-native-paper';

const ProfileCard = ({ student }) => {
  return (
    <Card style={{ margin: 10 }}>
      <Card.Content>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Avatar.Image
            size={100}
            source={student?.profile_pic}
            style={{ marginRight: 10 }}
          />
          <View>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
              {student?.name}
            </Text>
            <Text style={{ fontSize: 16 }}>{student?.email}</Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

export default ProfileCard;         