import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Alert,
} from "react-native";
import HeaderProfile from "../Layout/header";
import { useRouter } from "expo-router";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const PilihanGanda = () => {
  const router = useRouter();

  const materi = [
    {
      id: "2",
      title: "Materi 2",
      level: "Level 2",
    },
  ];

  const soal = [
    {
      id: "3",
      Soal: `Terdapat dua kategori buku di sebuah perpustakaan

Buku yang tersedia (1) dan yang tidak tersedia (0)
serta kategori Buku yang baru datang (1) dan yang lama (0).
      
Jika operasi logika OR diterapkan pada keduanya, maka buku yang terhitung adalah yang tersedia atau baru datang.
      
Diketahui:
Kategori Buku Tersedia = {1, 0, 1, 0}
Kategori Buku Baru = {0, 1, 1, 0}
      
Berapa banyak buku yang tersedia atau baru datang?`,
      pilihan: [
        { id: "a", text: "2 buku", correct: false },
        { id: "b", text: "3 buku", correct: false },
        { id: "c", text: "4 buku", correct: false },
        { id: "d", text: "1 buku", correct: true },
      ],
    },
  ];

  const [selectedAnswer, setSelectedAnswer] = useState(null); // Jawaban yang dipilih
  const [isSubmitted, setIsSubmitted] = useState(false); // Status submit
  const [isNextEnabled, setIsNextEnabled] = useState(false); // Status untuk menampilkan tombol 'Selanjutnya'

  const handleAnswerPress = (item) => {
    setSelectedAnswer(item.id); // Menyimpan jawaban yang dipilih
  };

  const handleSubmit = () => {
    if (selectedAnswer) {
      setIsSubmitted(true); // Menandai jawaban telah disubmit
      setIsNextEnabled(true); // Menampilkan tombol 'Selanjutnya'
    } else {
      Alert.alert("Perhatian", "Silakan pilih jawaban terlebih dahulu.");
    }
  };

  const handleNext = () => {
    // Aksi untuk tombol 'Selanjutnya'
    router.push("Pages/Siswa/detail");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <HeaderProfile />
        <TouchableOpacity
          style={styles.btnNew}
          onPress={() => router.push("Pages/Siswa/materi")}
        >
          <Text style={styles.textBtn}>Kembali ke Materi</Text>
        </TouchableOpacity>
        <View style={styles.judul}>
          <Text style={styles.title}>{materi[0].title}</Text>
          <Text style={styles.level}>Soal {soal[0].id}</Text>
        </View>
        <View style={styles.board}>
          <Text style={styles.soal}>{soal[0].Soal}</Text>
        </View>
        <FlatList
          data={soal[0].pilihan}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleAnswerPress(item)}
              style={[
                styles.pilihan,
                selectedAnswer === item.id &&
                  !isSubmitted && {
                    backgroundColor: "lightgray", // Memberikan warna lebih gelap saat dipilih
                  },
                selectedAnswer === item.id &&
                  isSubmitted && {
                    backgroundColor: item.correct ? "lightgreen" : "salmon", // Memberikan warna saat sudah disubmit
                  },
              ]}
            >
              <Text style={styles.pilihanText}>{item.text}</Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.listContainer}
        />
        {!isSubmitted && (
          <TouchableOpacity style={styles.btnNext} onPress={handleSubmit}>
            <Text style={styles.textBtn}>Submit</Text>
          </TouchableOpacity>
        )}
        {isSubmitted && (
          <View style={styles.result}>
            <Text style={styles.resultText}>
              {soal[0].pilihan.find((item) => item.id === selectedAnswer)
                .correct
                ? "Jawaban Anda Benar!"
                : `Jawaban Anda Salah. Jawaban yang benar adalah ${
                    soal[0].pilihan.find((item) => item.correct).text
                  }.`}
            </Text>
          </View>
        )}
        {isNextEnabled && (
          <TouchableOpacity style={styles.btnNext} onPress={handleNext}>
            <Text style={styles.textBtn}>Selanjutnya</Text>
          </TouchableOpacity>
        )}
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
    padding: 20, // Meningkatkan padding agar lebih luas
    margin: 20,
    borderRadius: 10,
    alignItems: "center", // Mengatur teks agar berada di tengah
    justifyContent: "center", // Menjaga konten tetap berada di tengah
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
    textAlign: "center", // Mengatur agar teks berada di tengah
  },
  pilihan: {
    backgroundColor: "white",
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 3,
  },
  pilihanText: {
    fontSize: 16,
    color: "#333",
  },
  btnNew: {
    backgroundColor: "grey",
    padding: 12,
    borderRadius: 10,
    marginHorizontal: 20,
    alignItems: "center",
    marginVertical: 10,
  },
  btnNext: {
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
  listContainer: {
    marginVertical: 10,
  },
  result: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    marginHorizontal: 20,
  },
  resultText: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
  },
});

export default PilihanGanda;