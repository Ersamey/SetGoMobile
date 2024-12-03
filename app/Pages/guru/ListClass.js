import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import HeaderProfile from "../Layout/header";
import axios from "axios";

const BASE_URL = "http://192.168.88.151:8080"; // URL yang benar untuk API

const ListKelas = () => {
  const [kelas, setKelas] = useState([]); // Menyimpan data kelas
  const router = useRouter();

  // Fungsi untuk mengambil kelas yang diajarkan oleh guru
  const fetchKelas = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/kelasGuru`, {
        withCredentials: true, // Mengirim cookie jika diperlukan
      });
      if (response.data.success) {
        setKelas(response.data.data); // Menyimpan data kelas ke state
      } else {
        Alert.alert("Error", response.data.message || "Failed to fetch kelas.");
      }
    } catch (error) {
      console.error("Error fetching kelas:", error);
      Alert.alert("Error", "Could not fetch kelas. Please try again.");
    }
  };

  // Panggil fetchKelas saat pertama kali komponen dimuat
  useEffect(() => {
    fetchKelas();
  }, []);

  // Komponen item kelas
  const Item = ({ nama_kelas, guru, id_kelas }) => (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: "/Pages/guru/Class",
          params: { className: nama_kelas, id: id_kelas },
        })
      }
    >
      <View style={styles.class}>
        <Image
          source={require("../../../assets/images/Image.png")}
          style={styles.classImage}
          resizeMode="cover"
        />
        <Text style={styles.className}>{nama_kelas}</Text>
        <Text style={styles.classDescription}>{guru}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <HeaderProfile />
      <SafeAreaProvider contentContainerStyle={{ paddingBottom: 100 }}>
        <SafeAreaView style={styles.container}>
          {/* Daftar Kelas yang Diajar oleh Guru */}
          <FlatList
            data={kelas} // Menampilkan data kelas yang telah diambil
            renderItem={({ item }) => (
              <Item
                nama_kelas={item.nama_kelas}
                guru={item.guru}
                id_kelas={item.id_kelas} // Menggunakan id_kelas untuk rute
              />
            )}
            keyExtractor={(item) => item.id_kelas.toString()} // Menggunakan id_kelas sebagai key
          />
          {/* Tombol untuk Menambahkan Kelas Baru */}
          <View style={styles.newClassButtonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push("Pages/guru/CreateClass")}
            >
              <Text style={styles.buttonText}>New Class</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#fff",
  },
  class: {
    backgroundColor: "lightblue",
    padding: 10,
    margin: 20,
    borderRadius: 10,
  },
  classImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  className: {
    fontWeight: "bold",
    color: "black",
    fontSize: 17,
    marginTop: 10,
  },
  classDescription: {
    color: "#666",
    fontSize: 12,
    marginTop: 5,
  },
  newClassButtonContainer: {
    margin: 20,
  },
  button: {
    backgroundColor: "#3498db", // Mengatur warna latar belakang tombol
    paddingVertical: 12, // Mengatur tinggi tombol
    paddingHorizontal: 24, // Mengatur lebar tombol
    borderRadius: 8, // Membuat sudut tombol membulat
    alignItems: "center",
  },
  buttonText: {
    color: "#fff", // Mengatur warna teks tombol
    fontSize: 18, // Mengatur ukuran font teks
    fontWeight: "bold", // Mengatur ketebalan font
  },
});

export default ListKelas;
