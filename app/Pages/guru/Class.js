import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

export default function Class() {
  const route = useRoute(); // Dapatkan parameter dari navigasi
  const navigation = useNavigation(); // Untuk navigasi lanjut
  const [className, setClassName] = useState("");

  useEffect(() => {
    // Tangkap className dari parameter
    if (route.params?.className) {
      setClassName(route.params.className);
    }
  }, [route.params?.className]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {className || "Nama Kelas Tidak Ditemukan"}
      </Text>
      {/* Tombol Navigasi */}
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() =>
          navigation.navigate("Pages/Guru/ListSiswa", { className })
        }
      >
        <Text style={styles.optionText}>Daftar Siswa</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => alert("Materi Pembelajaran")}
      >
        <Text style={styles.optionText}>Materi Pembelajaran</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>
    </View>
  );
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
