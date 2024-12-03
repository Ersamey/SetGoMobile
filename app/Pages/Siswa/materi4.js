import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  Linking
} from "react-native";
import HeaderProfile from "../Layout/header";
import { useRouter } from "expo-router";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const Materi = () => {
  const router = useRouter();

  const DATA = {
    id: "4",
    title: "Materi 4",
    teacher: "Ersa Meilia",
    level: "Level 4",
    description:
      "Membuat himpunan untuk memodelkan persoalan logika melibatkan representasi elemen-elemen dan operasi logika dalam bentuk himpunan matematika",
    materi:"https://www.canva.com/design/DAGYAByHyuI/Gz4Ch_mll3rxPFcproMmxA/view?utm_content=DAGYAByHyuI&utm_campaign=designshare&utm_medium=link&utm_source=editor"
  };

  const openMateri = () => {
    Linking.openURL(DATA.materi);
  };

  return (
    <View style={styles.container}>
      <HeaderProfile />
      <Text style={styles.clssName}>{DATA.title}</Text>
      <Text style={styles.level}>Silahkan akses materi, dengan klik gambar yang ada dibawah!</Text>
      <View style={styles.class}>
      <TouchableOpacity onPress={openMateri}>
          <Image
            source={{ uri: "https://img.youtube.com/vi/MLma4vKwcpI/0.jpg" }} // Gambar placeholder untuk tombol video
            style={styles.classImage}
          />
        </TouchableOpacity>
        <Text style={styles.teacherName}>{DATA.teacher}</Text>
        <Text style={styles.level}>{DATA.level}</Text>
        <Text style={styles.description}>{DATA.description}</Text>
      </View>
      <View style={styles.btnNew}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("Pages/Soal/pg10")}
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
    height: 180,
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
