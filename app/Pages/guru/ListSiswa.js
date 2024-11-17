import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

export default function ListSiswa() {
  const route = useRoute();
  const navigation = useNavigation();
  const [className, setClassName] = useState("");

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

  useEffect(() => {
    if (route.params?.className) {
      setClassName(route.params.className);
    }
  }, [route.params?.className]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate("DashboardSiswa", { nama: item.nama })}
    >
      <View style={styles.itemContent}>
        <Text style={styles.itemText}>{item.nama}</Text>
        <Text style={styles.arrow}>›</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Daftar Siswa Kelas {className || "Tidak Ditemukan"}
      </Text>
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
    flexDirection: "row", // Menyusun secara horizontal
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
  },
  itemContent: {
    flex: 1, // Membuat View mengambil ruang penuh
    flexDirection: "row", // Menyusun teks dan ikon secara horizontal
    justifyContent: "space-between", // Menyebarkan teks dan panah
    alignItems: "center",
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
  arrow: {
    fontSize: 20,
    color: "#333",
  },
});
