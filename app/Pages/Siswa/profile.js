import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import { LineChart, ProgressChart } from "react-native-chart-kit";
import { useRouter } from "expo-router"; // Import useRouter dari expo-router
import BottomNavbar from '../Layout/BottomNavbar';

const screenWidth = Dimensions.get("window").width; // Lebar layar
const screenHeight = Dimensions.get("window").height; // Tinggi layar

export default function App() {
  const router = useRouter(); // Inisialisasi useRouter
  const [chartWidth, setChartWidth] = useState(screenWidth * 0.9); // Ukuran chart yang responsif
  const [chartHeight, setChartHeight] = useState(screenHeight * 0.3); // Tinggi chart yang responsif

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
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent} style={styles.scrollView}>
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
              backgroundColor: "#ffffff", // Transparan
              backgroundGradientFrom: "#ffffff", // Transparan
              backgroundGradientTo: "#ffffff", // Transparan
              color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: { r: "0" }, // Hilangkan titik bulat
            }}
            bezier
            style={{
              marginVertical: 16,
              borderRadius: 16,
              alignSelf: "center",
              backgroundColor: "transparent", // Pastikan latar belakang chart transparan
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
              backgroundGradientFrom: "#ffffff", // Transparan
              backgroundGradientTo: "#ffffff", // Transparan
              color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                backgroundColor: "#ffffff", // Pastikan latar belakang chart transparan
              },
            }}
            hideLegend={true}
            style={{
              marginVertical: 16,
              alignSelf: "center",
              backgroundColor: "transparent", // Pastikan latar belakang chart transparan
            }}
          />
        </View>

        {/* Button untuk membuka URL */}
        <TouchableOpacity style={styles.button} onPress={() => router.push("/Pages/Siswa/completed")}>
          <Text style={styles.buttonText}>Completed Task</Text>
        </TouchableOpacity>
      </ScrollView>
      {/* Bottom Navbar */}
      <BottomNavbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scrollView: { flex: 1, backgroundColor: "#fff" },
  scrollViewContent: { paddingVertical: 30, paddingHorizontal: 15, alignItems: 'center', paddingBottom: 100 }, // Tambahkan paddingBottom di sini
  profileBox: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    backgroundColor: "#f6f7fb",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  profileImage: { width: 60, height: 60, borderRadius: 30 },
  profileTextContainer: { marginLeft: 20 },
  profileName: { fontSize: 18, fontWeight: "bold", color: "#333" },
  profileStatus: { fontSize: 14, color: "#555", marginTop: 5 },
  chartContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
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
  },
  buttonText: { color: "#303030", fontSize: 16, fontWeight: "bold" },
});
