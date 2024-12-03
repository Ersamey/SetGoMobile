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
      title: "Menganalisis Gerbang Logika dalam Bentuk Himpunan ",
      level: "Level 1",
      description: "Gerbang logika adalah blok dasar dalam elektronika digital yang mengoperasikan satu atau lebih input biner dan menghasilkan output biner. Ketika gerbang logika dianalisis dalam bentuk himpunan, kita memodelkan operasi logika sebagai operasi pada himpunan.",
      thumbnail: "https://img.youtube.com/vi/krAvJ6TidZM/0.jpg",
    },
    {
      id: "2",
      title: "Membandingkan Beberapa Himpunan yang Memodelkan Suatu Operasi Logika",
      level: "Level 2",
      description: "Dalam konteks gerbang logika, himpunan dapat digunakan untuk memodelkan dan memahami operasi logika dengan cara yang lebih visual dan matematika. Ketika kita membandingkan beberapa himpunan yang memodelkan suatu operasi logika, kita mengamati bagaimana elemen dalam himpunan-himpunan tersebut berinteraksi berdasarkan aturan operasi logika yang diterapkan.",
      thumbnail: "https://img.youtube.com/vi/zyoxrvnjLi8/0.jpg",
    },
    {
      id: "3",
      title: "Membandingkan Beberapa Himpunan yang Memodelkan Suatu Operasi Logika (Lanjutan)",
      level: "Level 3",
      description: "Membandingkan beberapa himpunan yang memodelkan operasi logika melibatkan analisis bagaimana elemen-elemen dari berbagai himpunan berinteraksi berdasarkan aturan logika tertentu. ",
      thumbnail: "https://img.youtube.com/vi/7BznBgNH75I/0.jpg",
    },
    {
      id: "4",
      title: "Membuat Himpunan untuk Memodelkan Persoalan Logika",
      level: "Level 4",
      description: "Membuat himpunan untuk memodelkan persoalan logika melibatkan representasi elemen-elemen dan operasi logika dalam bentuk himpunan matematika.",
      thumbnail: "https://img.youtube.com/vi/MLma4vKwcpI/0.jpg",
    },
  ];

  // Komponen untuk item kelas
  const Item = ({ title, level, description, thumbnail, id }) => (
    <TouchableOpacity
      style={styles.classContainer}
      onPress={() => {
        if (id === "1") {
          router.push("/Pages/Siswa/materi"); // Arahkan langsung ke materi2.js
        } else if (id === "2") {
          router.push(`/Pages/Siswa/materi2`); // Default untuk halaman lain
        } else if (id === "3"){
          router.push(`/Pages/Siswa/materi3`);
        }else if (id === "4"){
          router.push(`/Pages/Siswa/materi4`);
        }
      }}
    >
     <Image
          source={{ uri: thumbnail }}
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
            thumbnail={item.thumbnail}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      {/* Tombol untuk menambah materi */}
    
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
