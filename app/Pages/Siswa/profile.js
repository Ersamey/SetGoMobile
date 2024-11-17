import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Linking, Dimensions } from "react-native";
import { LineChart, ProgressChart } from "react-native-chart-kit";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

const screenWidth = Dimensions.get("window").width; // Lebar layar
const screenHeight = Dimensions.get("window").height; // Tinggi layar

export default function App() {
  const [chartWidth, setChartWidth] = useState(screenWidth * 0.9); // Ukuran chart yang responsif
  const [chartHeight, setChartHeight] = useState(screenHeight * 0.3); // Tinggi chart yang responsif

  const navigation = useNavigation(); // Access the navigation object

  const navigateToNextPage = () => {
    navigation.navigate('Pages/Siswa/completed'); // Navigasi ke halaman "Pages/Siswa/completed"
  };

  const handleButtonPress = () => {
    const url = "https://www.example.com"; // Ganti dengan link yang diinginkan
    Linking.openURL(url).catch((err) => console.error("Failed to open URL", err));
  };

  useEffect(() => {
    // Update ukuran chart saat dimensi layar berubah
    const onChange = () => {
      setChartWidth(Dimensions.get("window").width * 0.9);
      setChartHeight(Dimensions.get("window").height * 0.3);
    };

    // Tambahkan listener untuk mendeteksi perubahan ukuran layar
    Dimensions.addEventListener("change", onChange);

    // Hapus listener saat komponen unmount
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container} style={styles.scrollView}>
      {/* Outer box untuk profil */}
      <View style={styles.profileBox}>
        <Image
          source={require("../../../assets/images/ecamey.jpg")} // Ganti dengan image lokal sesuai path Anda
          style={styles.profileImage}
        />
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>Ersa Meilia</Text>
          <Text style={styles.profileStatus}>+1600 Points</Text>
        </View>
      </View>

      {/* Progress Line Chart Container */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Progress</Text>
        <LineChart
          data={{
            labels: ["Matematika", "Fisika", "Kimia", "Biologi", "Informatika"],
            datasets: [
              {
                data: [75, 80, 65, 90, 85], // Data untuk mata pelajaran
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // Warna garis
                strokeWidth: 2, // Lebar garis
              },
            ],
          }}
          width={chartWidth} // Menggunakan ukuran yang responsif
          height={chartHeight} // Menggunakan tinggi yang responsif
          yAxisSuffix="%"
          yAxisInterval={10}
          chartConfig={{
            backgroundColor: "transparent",  // Transparan
            backgroundGradientFrom: "transparent",  // Transparan
            backgroundGradientTo: "transparent",  // Transparan
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
              backgroundColor: "transparent",  // Pastikan latar belakang chart transparan
            },
            propsForDots: { r: "0" },  // Hilangkan titik bulat
          }}
          bezier
          style={{
            marginVertical: 16,
            borderRadius: 16,
            alignSelf: "center",
            backgroundColor: "transparent",  // Pastikan latar belakang chart transparan
          }}
        />
      </View>

      {/* Task Completion Progress Container */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Task Completion</Text>
        <ProgressChart
          data={{ labels: ["Task"], data: [0.75] }} // Progress 75%
          width={chartWidth} // Menggunakan ukuran yang responsif
          height={chartHeight} // Menggunakan tinggi yang responsif
          strokeWidth={16}
          radius={50}
          chartConfig={{
            backgroundGradientFrom: "transparent",  // Transparan
            backgroundGradientTo: "transparent",  // Transparan
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              backgroundColor: "transparent",  // Pastikan latar belakang chart transparan
            },
          }}
          hideLegend={true}
          style={{
            marginVertical: 16,
            alignSelf: "center",
            backgroundColor: "transparent",  // Pastikan latar belakang chart transparan
          }}
        />
      </View>

      {/* Button untuk navigasi dengan TouchableOpacity */}
      <TouchableOpacity style={styles.button} onPress={navigateToNextPage}>
        <Text style={styles.buttonText}>Completed Task</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: "#fff", paddingVertical: 30, paddingHorizontal: 15 },
  scrollView: { backgroundColor: "#fff" },
  profileBox: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    backgroundColor: "#f6f7fb",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignSelf: "center",
  },
  profileImage: { width: 60, height: 60, borderRadius: 30 },
  profileTextContainer: { marginLeft: 20 },
  profileName: { fontSize: 18, fontWeight: "bold", color: "#333" },
  profileStatus: { fontSize: 14, color: "#555", marginTop: 5 },
  chartContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
    alignSelf: "center",
    width: "90%",
  },
  chartTitle: { fontSize: 20, fontWeight: "bold", marginVertical: 10, alignSelf: "flex-start" },
  button: {
    backgroundColor: "#f6f7fb",
    padding: 16,
    borderRadius: 8,
    width: "90%",
    alignItems: "center",
    marginVertical: 16,
    alignSelf: "center",
  },
  buttonText: { color: "303030", fontSize: 16, fontWeight: "bold" },
});
