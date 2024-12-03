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
    id: "3",
    title: "Materi 3",
    teacher: "Ersa Meilia",
    level: "Level 3",
    description:
      "Membandingkan beberapa himpunan yang memodelkan operasi logika melibatkan analisis bagaimana elemen-elemen dari berbagai himpunan berinteraksi berdasarkan aturan logika tertentu.",
    materi:"https://youtu.be/7BznBgNH75I?si=iAci6EVcybJ-zGa0"
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
            source={{ uri: "https://img.youtube.com/vi/7BznBgNH75I/0.jpg" }} // Gambar placeholder untuk tombol video
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
          onPress={() => router.push("Pages/Soal/pg7")}
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
