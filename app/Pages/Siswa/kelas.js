import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
  FlatList,
  StatusBar,
  Alert,
} from "react-native";
import HeaderProfile from "../Layout/header";
import axios from "axios";
import { useRouter } from "expo-router";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const BASE_URL = "http://192.168.215.151:8080";

const Siswa = () => {
  const [kelas, setKelas] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [kodeKelas, setKodeKelas] = useState("");
  const router = useRouter();

  // Fungsi untuk mengambil kelas
  const fetchKelas = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getKelas`, {
        withCredentials: true,
      });
      if (response.data.success) {
        setKelas(response.data.data);
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

  const Item = ({ nama_kelas, guru, id_kelas }) => (
    <TouchableOpacity
      onPress={() => router.push(`/Pages/Siswa/detail?id=${id_kelas}`)}
      style={styles.class}
    >
      <View style={styles.Class}>
        <Text style={styles.clssName}>{nama_kelas}</Text>
        <Text style={styles.teacher}>Guru: {guru}</Text>
        <Text style={styles.description}>Klik untuk detail</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <HeaderProfile />
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={kelas}
            renderItem={({ item }) => (
              <Item
                nama_kelas={item.nama_kelas}
                guru={item.guru}
                id_kelas={item.id_kelas}
              />
            )}
            keyExtractor={(item) => item.id_kelas.toString()}
          />
        </SafeAreaView>
      </SafeAreaProvider>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Masukkan Kode Kelas</Text>
            <TextInput
              style={styles.input}
              placeholder="Kode Kelas"
              value={kodeKelas}
              onChangeText={setKodeKelas}
            />
            <View style={styles.modalButtons}>
              <Button
                title="Cancel"
                color="red"
                onPress={() => {
                  setModalVisible(false);
                  setKodeKelas("");
                }}
              />
              <Button
                title="Join"
                onPress={async () => {
                  if (!kodeKelas.trim()) {
                    Alert.alert("Peringatan", "Kode kelas tidak boleh kosong.");
                    return;
                  }

                  console.log("Kode Kelas yang dikirim:", kodeKelas.trim());

                  try {
                    const response = await axios.post(
                      `${BASE_URL}/addClass`,
                      { kode_kelas: kodeKelas.trim() },
                      {
                        headers: {
                          "Content-Type": "application/json",
                        },
                        withCredentials: true,
                      }
                    );

                    console.log("Response dari server:", response.data);
                    if (response.data.success) {
                      Alert.alert("Berhasil", response.data.message);
                      setModalVisible(false);
                      setKodeKelas(""); // Reset hanya jika sukses
                      fetchKelas(); // Panggil ulang untuk memuat data kelas yang baru
                    } else {
                      Alert.alert("Gagal", response.data.message);
                    }
                  } catch (error) {
                    console.error("Error joining class:", error);
                    if (error.response) {
                      console.log("Error Response:", error.response.data);
                      Alert.alert(
                        "Error",
                        error.response.data.message || "Terjadi kesalahan."
                      );
                    } else {
                      Alert.alert(
                        "Error",
                        "Gagal menghubungi server. Coba lagi."
                      );
                    }
                  }
                }}
              />
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.btnNew}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textBtn}>Join New Class</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginBottom: 100,
  },
  btnJoin: {
    color: "#661FF8",
  },
  button: {
    backgroundColor: "#661FF8",
    padding: 10,
    borderRadius: 10,
    margin: 20,
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
    paddingBottom: 10,
  },
  clssName: {
    fontWeight: "bold",
    color: "black",
    fontSize: 17,
  },
  class: {
    backgroundColor: "#e8f4f8",
    padding: 10,
    margin: 20,
    borderRadius: 10,
    height: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  teacher: {
    color: "#333",
    fontSize: 15,
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: 300,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    width: "100%",
    borderRadius: 5,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default Siswa;
