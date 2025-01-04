import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const UOV_Banner = () => {
  return (
    <View style={styles.banner}>
      <Image
        source={require("../assets/UoV_Logo.png")}
        style={{ width: 100, height: 100, marginTop: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    width: "100%",
    height: 200,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bannerImage: {
    width: "100%",
    height: 200,
  },
});

export default UOV_Banner;
