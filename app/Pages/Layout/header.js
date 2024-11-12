import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

const HeaderProfile = ({ navigation }) => {
  return (
    <View>
      <View style={styles.profile}>
        <Image
          source={require("../../../assets/images/ecamey.jpg")}
          style={styles.image}
        />
        <View style={styles.containerNama}>
          <Text style={styles.name}>Halo, Ecamey</Text>
          <Text style={styles.point}> + 0 Points</Text>
        </View>
      </View>
    </View>
  );
};

styles = StyleSheet.create({
  image: {
    width: 65,
    height: 65,
    borderRadius: 50,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  containerNama: {
    marginLeft: 20,
  },
  point: {
    color: "green",
    fontWeight: "bold",
  },
  name: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
});
export default HeaderProfile;
