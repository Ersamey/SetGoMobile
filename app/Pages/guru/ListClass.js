import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const ListKelas = () => {
  const router = useRouter();

  const DATA = [
    {
      id: "1",
      title: "Kelas Matematika",
      description: "Kelas ini membahas materi matematika dasar dan lanjutan.",
    },
    {
      id: "2",
      title: "Kelas Fisika",
      description: "Kelas ini membahas dasar-dasar fisika dan konsep lanjutan.",
    },
  ];

  // Komponen item kelas
  const Item = ({ title, description, id }) => (
    <TouchableOpacity
      onPress={() => router.push(`/Pages/Guru/Class?id=${id}`)} // Navigasi ke halaman detail kelas
    >
      <View style={styles.class}>
        <Image
          source={require("../../../assets/images/Image.png")}
          style={styles.classImage}
          resizeMode="cover"
        />
        <Text style={styles.className}>{title}</Text>
        <Text style={styles.classDescription}>{description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            {/* Daftar Kelas yang Dibuat oleh Guru */}
            <FlatList
              data={DATA}
              renderItem={({ item }) => (
                <Item
                  title={item.title}
                  description={item.description}
                  id={item.id}
                />
              )}
              keyExtractor={(item) => item.id}
            />
            {/* Tombol untuk Menambahkan Kelas Baru */}
            <View style={styles.newClassButtonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => router.push("Pages/Guru/CreateClass")}
              >
                <Text style={styles.buttonText}>New Class</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </SafeAreaProvider>
      </ScrollView>
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
    // Sesuaikan nama menjadi `button` bukan `Button`
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
