import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("Class"); // Menyimpan layar aktif
  const [className, setClassName] = useState("Matematika"); // Contoh data kelas

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
              onPress={() => setCurrentScreen("ListSiswa")} // Nama layar untuk Daftar Siswa
            >
              <Text style={styles.optionText}>Daftar Siswa</Text>
              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>

            {/* Tombol menuju Materi Pembelajaran */}
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => setCurrentScreen("Detail")} // Nama layar untuk Materi Pembelajaran
            >
              <Text style={styles.optionText}>Materi Pembelajaran</Text>
              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>
          </View>
        );
      case "ListSiswa":
        return (
          <View style={styles.container}>
            <Text style={styles.title}>Daftar Siswa</Text>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => setCurrentScreen("Class")} // Kembali ke halaman Class
            >
              <Text style={styles.optionText}>Kembali</Text>
            </TouchableOpacity>
          </View>
        );
      case "Detail":
        return (
          <View style={styles.container}>
            <Text style={styles.title}>Materi Pembelajaran</Text>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => setCurrentScreen("Class")} // Kembali ke halaman Class
            >
              <Text style={styles.optionText}>Kembali</Text>
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
