import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import HeaderProfile from "../Layout/header";
import { useRouter } from "expo-router";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const Materi = () => {
  const router = useRouter();

  const DATA = {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Materi 1",
    teacher: "Ersa Meilia",
    level: "Level 1",
    description:
      "Deskripsi Materi 1 lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <HeaderProfile />
        <Text style={styles.clssName}>{DATA.title}</Text>
        <View style={styles.class}>
          <Image
            source={require("../../../assets/images/Image.png")} // Assuming image is in the correct path
            style={styles.classImage}
          />
          <Text style={styles.teacherName}>{DATA.teacher}</Text>
          <Text style={styles.level}>{DATA.level}</Text>
          <Text style={styles.description}>{DATA.description}</Text>
        </View>
      </ScrollView>

      <View style={styles.btnNew}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("Pages/Siswa/quiz")}
        >
          <Text style={styles.textBtn}>Kerjakan Latihan Soal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#fff",
  },
  clssName: {
    fontWeight: "bold",
    color: "black",
    marginTop: 10,
    fontSize: 20,
    textAlign: "center",
  },
  teacherName: {
    fontSize: 17,
    color: "#555",
    textAlign: "justify",
    marginVertical: 5,
  },
  level: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginHorizontal: 20,
    marginTop: 10,
    textAlign: "justify",
  },
  class: {
    backgroundColor: "#e8f4f8",
    padding: 15,
    margin: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  classImage: {
    width: 340,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#661FF8",
    padding: 12,
    borderRadius: 10,
    marginHorizontal: 20,
    alignItems: "center",
  },
  textBtn: {
    color: "white",
    fontWeight: "bold",
  },
  btnNew: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    paddingBottom: 20,
  },
});

export default Materi;
