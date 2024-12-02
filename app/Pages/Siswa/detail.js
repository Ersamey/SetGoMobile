import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import HeaderProfile from "../Layout/header";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const DetailKelas = () => {
  const router = useRouter();

  // Data untuk daftar kelas
  const DATA = [
    {
      id: "1",
      title: "Pengantar",
      level: "Level 1",
      description: "Materi dasar pengenalan gerbang logika dalam bentuk himpuna",
    },
    {
      id: "2",
      title: "AND, OR, NOT ",
      level: "Level 2",
      description: "membandingkan  part 1",
    },
    {
      id: "3",
      title: "NAND, XOR, NOR, X-NOR",
      level: "Level 3",
      description: "membandingkan gerbang logika part 2",
    },
    {
      id: "4",
      title: "Hubungan logika dan himpunan",
      level: "Level 3",
      description: "memodelkan persoalan",
    },
  ];

  // Komponen untuk item kelas
  const Item = ({ title, level, description, id }) => (
    <TouchableOpacity
      style={styles.classContainer}
      onPress={() => router.push(`/Pages/Siswa/materi?id=${id}`)}
    >
      <Image
        source={require("../../../assets/images/Image.png")} // Pastikan file ini ada
        style={styles.classImage}
        resizeMode="cover"
      />
      <Text style={styles.classTitle}>{title}</Text>
      <Text style={styles.classLevel}>{level}</Text>
      <Text style={styles.classDescription}>{description}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header untuk detail kelas */}
      <HeaderProfile />

      {/* Daftar materi kelas */}
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            title={item.title}
            level={item.level}
            description={item.description}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      {/* Tombol untuk menambah materi */}
      <TouchableOpacity
        style={styles.btnAddMaterial}
        onPress={() => router.push("/Pages/Guru/Add")}
        // onPress={() => router.push("/Pages/guru/Tambah")}
      >
        <Text style={styles.btnAddText}>Tambahkan Materi Baru</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// Gaya untuk komponen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight || 0,
  },
  classContainer: {
    backgroundColor: "#f1f1f1",
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  classImage: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  classTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 10,
    color: "#333",
  },
  classLevel: {
    fontSize: 14,
    color: "#555",
    marginVertical: 5,
  },
  classDescription: {
    fontSize: 12,
    color: "#666",
  },
  btnAddMaterial: {
    backgroundColor: "#661FF8",
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    alignItems: "center",
    marginVertical: 10,
  },
  btnAddText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default DetailKelas;
