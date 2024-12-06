import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from 'expo-router'; // Pastikan import useRouter

export default function App() {
  const router = useRouter(); // Mendapatkan router untuk navigasi
  const [currentScreen, setCurrentScreen] = useState("Class"); // Menyimpan layar aktif
  const [className, setClassName] = useState("Informatika XI PPLG 1"); // Contoh data kelas

  const renderScreen = () => {
    switch (currentScreen) {
      case "Class":
        return (
          <View style={styles.container}>
            <Text style={styles.title}>
              {className ? `Kelas: ${className}` : "Pilih Kelas"}
            </Text>

            {/* Tombol menuju Daftar Siswa */}
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => router.push(`/Pages/guru/ListSiswa`)} // Navigasi ke Daftar Siswa
            >
              <Text style={styles.optionText}>Daftar Siswa</Text>
              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>

            {/* Tombol menuju Materi Pembelajaran */}
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => router.push('/Pages/Siswa/detail')} // Navigasi ke Materi Pembelajaran
            >
              <Text style={styles.optionText}>Materi Pembelajaran</Text>
              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>
          </View>
        );
      default:
        return <Text>Halaman tidak ditemukan</Text>;
    }
  };

  return <>{renderScreen()}</>;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
  arrow: {
    fontSize: 20,
    color: "#333",
  },
});
