import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import HeaderProfile from "../Layout/header";
import { useRouter } from "expo-router";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, { Easing } from "react-native-reanimated";

const Relasi = () => {
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
      id: "4",
      Soal: "Mereka membuat permainan bergilir, dimana mereka akan terbagi kedalam dua kelompok. Kemudian nantinya tiap orang perlu menghubungkan antar kelompok dengan sebuah hubungan. Dimana hubungan tersebut harus menyertai semua siswa yang ada.",
      blok: [
        { id: "1", text: "Ersa", correct: true },
        { id: "2", text: "Yasmin", correct: true },
        { id: "3", text: "Eni", correct: true },
        { id: "4", text: "Hikmah", correct: false },
        { id: "5", text: "Utria", correct: false },
        { id: "6", text: "Danis", correct: false },
      ],
      jawaban: ["Ersa", "Yasmin", "Eni"], // Jawaban benar dalam urutan
    },
  ];

  const [availableBlocks, setAvailableBlocks] = useState(soal[0].blok);
  const [selectedBlocks, setSelectedBlocks] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleBlockPress = (block) => {
    if (isSubmitted) return;

    if (selectedBlocks.includes(block)) {
      setSelectedBlocks(selectedBlocks.filter((item) => item !== block));
      setAvailableBlocks([...availableBlocks, block]);
    } else {
      setSelectedBlocks([...selectedBlocks, block]);
      setAvailableBlocks(availableBlocks.filter((item) => item !== block));
    }
  };

  const handleSubmit = () => {
    const selectedTexts = selectedBlocks.map((block) => block.text);
    if (JSON.stringify(selectedTexts) === JSON.stringify(soal[0].jawaban)) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setIsSubmitted(true);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <HeaderProfile />
        <TouchableOpacity
          style={styles.btnNew}
          onPress={() => router.push("Pages/Soal/essay")}
        >
          <Text style={styles.textBtn}>Kembali ke Materi</Text>
        </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.judul}>
            <Text style={styles.title}>{materi[0].title}</Text>
            <Text style={styles.level}>Soal {soal[0].id}</Text>
          </View>
          <View style={styles.board}>
            {/* <Image source={soal[0].gambar} style={styles.classImage} /> */}
            <Text style={styles.soal}>{soal[0].Soal}</Text>
          </View>
          <View style={styles.board}>
            <Text style={styles.label}>Blok Tersedia:</Text>
            <View style={styles.blocksContainer}>
              {availableBlocks.map((block) => (
                <PanGestureHandler key={block.id}>
                  <Animated.View style={styles.block}>
                    <TouchableOpacity
                      onPress={() => handleBlockPress(block)}
                      disabled={isSubmitted}
                    >
                      <Text style={styles.blockText}>{block.text}</Text>
                    </TouchableOpacity>
                  </Animated.View>
                </PanGestureHandler>
              ))}
            </View>
          </View>
          <View style={styles.board}>
            <Text style={styles.label}>Susunan Jawaban:</Text>
            <View style={styles.blocksContainer}>
              {selectedBlocks.map((block) => (
                <TouchableOpacity
                  key={block.id}
                  style={styles.blockSelected}
                  onPress={() => handleBlockPress(block)}
                  disabled={isSubmitted}
                >
                  <Text style={styles.blockText}>{block.text}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
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
          {!isSubmitted && (
            <TouchableOpacity style={styles.btnSubmit} onPress={handleSubmit}>
              <Text style={styles.textBtn}>Submit Jawaban</Text>
            </TouchableOpacity>
          )}
          {isSubmitted && (
            <TouchableOpacity
              style={styles.btnNew}
              onPress={() => router.push("Pages/Siswa/detail")}
            >
              <Text style={styles.textBtn}>Selesai</Text>
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
  classImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    borderRadius: 10,
    marginTop: -17,
  },
  blocksContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  block: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 10,
    margin: 5,
    elevation: 3,
  },
  blockSelected: {
    backgroundColor: "#661FF8",
    padding: 10,
    borderRadius: 10,
    margin: 5,
    elevation: 3,
  },
  blockText: {
    color: "black",
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
  btnSubmit: {
    backgroundColor: "#661FF8",
    padding: 12,
    borderRadius: 10,
    marginHorizontal: 20,
    alignItems: "center",
    marginVertical: 10,
  },
  btnNew: {
    backgroundColor: "grey",
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
});

export default Relasi;
