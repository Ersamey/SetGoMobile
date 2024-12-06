import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

export default function ListSiswa() {
  // Contoh data siswa
  const DATA = [
    { id: "1", nama: "Ersa Meilia" },
    { id: "2", nama: "Siti Nuraeni" },
    { id: "3", nama: "Ade Surya" },
    { id: "4", nama: "Dede Suryadi" },
    { id: "5", nama: "Rina Sari" },
    { id: "6", nama: "Utria Efaludini" },
    { id: "7", nama: "Hikmah Nurarifah" },
    { id: "8", nama: "Yasmin Hafidah" },
    { id: "9", nama: "Danis Keysara S" },
    { id: "10", nama: "Albiana" },
    { id: "11", nama: "Arianti" },
    { id: "12", nama: "Galvin EKa N" },
    { id: "13", nama: "Wicheriani" },
    { id: "14", nama: "Kaisar Setio" },
    { id: "15", nama: "Erdeatha R.I.P" },
    { id: "16", nama: "Rizki Fauzan" },
    { id: "17", nama: "Rizki Ramadhan" },
    { id: "18", nama: "Rizki Ramadhan" },
    { id: "19", nama: "Rizki Ramadhan" },
    { id: "20", nama: "Rizki Ramadhan" },
  ];

  // Render setiap item (siswa) dalam daftar
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <View style={styles.itemContent}>
        <Text style={styles.itemText}>{item.nama}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Siswa</Text>
      {/* Menampilkan daftar siswa */}
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
  },
  itemContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
});
