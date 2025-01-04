import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const UOV_Banner = () => {
  return (
    <View style={styles.banner}>
      <Image
        source={require("../assets/UoV_Logo.png")}
        style={{ width: 340, height: 90 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    width: 350,
    height: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  bannerImage: {
    width: "100%",
    height: 200,
  },
});

export default UOV_Banner;
