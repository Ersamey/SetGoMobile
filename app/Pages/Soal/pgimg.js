import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
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
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Materi 1",
      level: "Level 1",
    },
  ];

  const soal = [
    {
      id: "1",
      gambar: require("../../../assets/images/Image.png"),
      Soal: "Deskripsi soal 1 pilihan ganda lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.",
      pilihan: [
        {
          id: "a",
          text: "Pilihan 1",
          correct: true,
          img: require("../../../assets/images/img1.png"),
        },
        {
          id: "b",
          text: "Pilihan 2",
          correct: false,
          img: require("../../../assets/images/img2.png"),
        },
        {
          id: "c",
          text: "Pilihan 3",
          correct: false,
          img: require("../../../assets/images/img3.png"),
        },
        {
          id: "d",
          text: "Pilihan 4",
          correct: false,
          img: require("../../../assets/images/img2.png"),
        },
      ],
    },
  ];

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerPress = (item) => {
    if (!isSubmitted) {
      setSelectedAnswer(item.id);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) {
      Alert.alert("Pilih Jawaban", "Silakan pilih jawaban terlebih dahulu.");
      return;
    }

    const isCorrect = soal[0].pilihan.find(
      (item) => item.id === selectedAnswer
    ).correct;

    setIsSubmitted(true); // Mengunci pilihan setelah submit
  };

  const handleNext = () => {
    // Here you can add the logic for moving to the next question or screen.
    console.log("Next Question or Activity");
  };

  const isNextEnabled = selectedAnswer !== null && isSubmitted;

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
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.judul}>
            <Text style={styles.title}>{materi[0].title}</Text>
            <Text style={styles.level}>Soal {soal[0].id}</Text>
          </View>
          <View style={styles.board}>
            <Text style={styles.soal}>{soal[0].Soal}</Text>
          </View>
          <View>
            {soal[0].pilihan.map((item) => (
              <TouchableOpacity
                key={item.id}
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
                <Image source={item.img} style={styles.optionImage} />
                <Text style={styles.pilihanText}>{item.text}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {!isSubmitted && (
            <TouchableOpacity style={styles.btnSubmit} onPress={handleSubmit}>
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
            <TouchableOpacity
              style={styles.btnNext}
              onPress={() => router.push("Pages/Soal/relasi")}
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
    minHeight: 50,
    flexShrink: 1,
    flexGrow: 0,
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
    textAlign: "justify",
  },
  pilihan: {
    backgroundColor: "white",
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  pilihanText: {
    fontSize: 16,
    color: "#333",
    marginLeft: 10,
  },
  optionImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
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
    backgroundColor: "#007bff",
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
  result: {
    marginVertical: 10,
    alignItems: "center",
  },
  resultText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
  },
});

export default PilihanGanda;
