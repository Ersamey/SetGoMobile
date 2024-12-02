import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import HeaderProfile from "../Layout/header";
import { useRouter } from "expo-router";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import axios from "axios"; // Import axios

const BASE_URL = "http://192.168.215.151:8080";

const Esai = () => {
  const router = useRouter();

  const materi = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Materi 1",
      level: "Level 1",
    },
  ];

  const soal = [
    {
      id: "2",
      gambar: require("../../../assets/images/Image.png"),
      Soal: "Jelaskan Definisi operasi himpunan",
      jawaban: "kumpulan objek atau benda yang kemudian dapat didefinisikan dengan jelas", // Jawaban benar
      is_true: true, // Status jawaban benar
    },
  ];

  const [userAnswer, setUserAnswer] = useState(""); // Menyimpan jawaban user
  const [isSubmitted, setIsSubmitted] = useState(false); // Status apakah jawaban sudah disubmit
  const [isCorrect, setIsCorrect] = useState(null);
  
  const handleSubmit = async () => {
    // Cek apakah jawaban benar
    const correct =
      userAnswer.trim().toLowerCase() === soal[0].jawaban.toLowerCase();
    setIsCorrect(correct);
    setIsSubmitted(true); // Set status menjadi sudah disubmit

    // Data yang akan dikirim ke server
    const data = {
      id_siswa: "123", // Ganti dengan ID siswa dari login atau state global
      id_latihanSoal: soal[0].id,
      pilihan_siswa: userAnswer.trim(),
      is_true: soal[0].is_true, // Jawaban benar
    };

    try {
      // Mengirim data ke server menggunakan Axios
      const response = await axios.post(`${BASE_URL}/api/LatihanSoal/submitJawaban`, data, {
        headers: {
          "Content-Type": "application/json", // Memberitahukan server bahwa body adalah JSON
        },
      });

      // Menangani response dari server
      if (response.status === 200) {
        // Jika pengiriman berhasil, beri umpan balik kepada user
        Alert.alert("Success", "Jawaban berhasil disubmit!");
      } else {
        // Jika pengiriman gagal, beri umpan balik error
        Alert.alert("Error", "Gagal mengirim jawaban. Coba lagi.");
      }
    } catch (error) {
      // Jika terjadi error dalam proses pengiriman, tampilkan alert
      Alert.alert("Error", "Tidak dapat terhubung ke server.");
      console.error(error); // Logging error di console untuk debugging
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <HeaderProfile />
        <TouchableOpacity
          style={styles.btnNew}
          onPress={() => router.push("Pages/Soal/pg")}
        >
          <Text style={styles.textBtn}>Kembali ke Materi</Text>
        </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.judul}>
            <Text style={styles.title}>{materi[0].title}</Text>
            <Text style={styles.level}>Soal {soal[0].id}</Text>
          </View>
          <View style={styles.board}>
            <Image source={soal[0].gambar} style={styles.classImage} />
            <Text style={styles.soal}>{soal[0].Soal}</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Jawaban Anda:</Text>
            <TextInput
              style={styles.input}
              value={userAnswer}
              onChangeText={setUserAnswer}
              placeholder="Ketik jawaban Anda di sini"
              multiline
              editable={!isSubmitted} // Menonaktifkan input setelah submit
            />
          </View>

          {/* Menampilkan keterangan benar/salah dengan warna hijau/merah */}
          {isSubmitted && (
            <Text
              style={[
                styles.feedback,
                isCorrect ? styles.correct : styles.incorrect,
              ]}
            >
              {isCorrect ? "Jawaban Anda Benar!" : "Jawaban Anda Salah!"}
            </Text>
          )}

          {/* Menyembunyikan tombol submit setelah disubmit */}
          {!isSubmitted && (
            <TouchableOpacity style={styles.btnSubmit} onPress={handleSubmit}>
              <Text style={styles.textBtn}>Submit Jawaban</Text>
            </TouchableOpacity>
          )}

          {/* Menyembunyikan tombol 'Selanjutnya' sampai jawaban disubmit */}
          {isSubmitted && (
            <TouchableOpacity
              style={styles.btnNew}
              onPress={() => router.push("Pages/Soal/susun")}
            >
              <Text style={styles.textBtn}>Selanjutnya</Text>
            </TouchableOpacity>
          )}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  board: {
    backgroundColor: "lightblue",
    padding: 10,
    margin: 20,
    borderRadius: 10,
  },
  judul: {
    backgroundColor: "white",
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    color: "black",
    fontSize: 17,
  },
  level: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  soal: {
    fontSize: 14,
    color: "#666",
    marginHorizontal: 10,
    marginTop: -30,
    textAlign: "justify",
  },
  classImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    borderRadius: 10,
    marginTop: -17,
  },
  inputContainer: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    elevation: 3,
    fontSize: 16,
    color: "#333",
    textAlignVertical: "top",
    minHeight: 100,
  },
  btnNew: {
    backgroundColor: "grey",
    padding: 12,
    borderRadius: 10,
    marginHorizontal: 20,
    alignItems: "center",
    marginVertical: 10,
  },
  btnSubmit: {
    backgroundColor: "#661FF8",
    padding: 12,
    borderRadius: 10,
    marginHorizontal: 20,
    alignItems: "center",
    marginVertical: 10,
  },
  textBtn: {
    color: "white",
    fontWeight: "bold",
  },
  feedback: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  correct: {
    color: "green",
  },
  incorrect: {
    color: "red",
  },
});

export default Esai;  