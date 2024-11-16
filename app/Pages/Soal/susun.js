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

const Susun = () => {
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
      id: "3",
      gambar: require("../../../assets/images/Image.png"), // Menggunakan gambar dinamis
      Soal: "Susunlah blok berikut sehingga membentuk jawaban yang benar!",
      blok: [
        { id: "1", text: "i", correct: true },
        { id: "2", text: "love", correct: true },
        { id: "3", text: "coding", correct: true },
        { id: "4", text: "you", correct: false },
        { id: "5", text: "hate", correct: false },
        { id: "6", text: "me", correct: false },
      ],
      jawaban: ["i", "love", "coding"], // Jawaban benar dalam urutan
    },
  ];

  const [availableBlocks, setAvailableBlocks] = useState(soal[0].blok);
  const [selectedBlocks, setSelectedBlocks] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission status
  const [isCorrect, setIsCorrect] = useState(null); // Track if the answer is correct

  const handleBlockPress = (block) => {
    if (isSubmitted) return; // Prevent block interaction after submission

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
      setIsCorrect(true); // Answer is correct
    } else {
      setIsCorrect(false); // Answer is incorrect
    }
    setIsSubmitted(true); // Set submission to true
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
            <Image source={soal[0].gambar} style={styles.classImage} />
            <Text style={styles.soal}>{soal[0].Soal}</Text>
          </View>
          <View style={styles.board}>
            <Text style={styles.label}>Blok Tersedia:</Text>
            <View style={styles.blocksContainer}>
              {availableBlocks.map((block) => (
                <TouchableOpacity
                  key={block.id}
                  style={styles.block}
                  onPress={() => handleBlockPress(block)}
                  disabled={isSubmitted} // Disable blocks after submission
                >
                  <Text style={styles.blockText}>{block.text}</Text>
                </TouchableOpacity>
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
                  disabled={isSubmitted} // Disable blocks after submission
                >
                  <Text style={styles.blockText}>{block.text}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Feedback for Correct/Incorrect Answer */}
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

          {/* Submit Button */}
          {!isSubmitted && (
            <TouchableOpacity style={styles.btnSubmit} onPress={handleSubmit}>
              <Text style={styles.textBtn}>Submit Jawaban</Text>
            </TouchableOpacity>
          )}

          {/* Show 'Selanjutnya' Button After Submission */}
          {isSubmitted && (
            <TouchableOpacity
              style={styles.btnNew}
              onPress={() => router.push("Pages/Soal/pgimg")}
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

export default Susun;
