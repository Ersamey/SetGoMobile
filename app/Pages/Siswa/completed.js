import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { ProgressChart } from "react-native-chart-kit";
import BottomNavbar from "../Layout/BottomNavbar"; // Import BottomNavbar
import HeaderProfile from "../Layout/header"; // Import HeaderProfile

const screenWidth = Dimensions.get("window").width;

const Completed = () => {
  // Data untuk Progress
  const progress1 = 0.75; // 75% untuk level 1
  const progress2 = 0.5; // 50% untuk level 2
  const progress3 = 0.48; // 48% untuk level 3
  const progress4 = 0.22; // 22% untuk level 4

  // Komponen progress chart yang dikustomisasi
  const renderProgressChart = (progress) => (
    <View style={styles.progressContainer}>
      <ProgressChart
        data={{
          labels: ["Task"], // Opsional
          data: [progress], // Progress dalam format desimal
        }}
        width={70} // Diameter lingkaran
        height={60} // Diameter lingkaran
        strokeWidth={8} // Ketebalan lingkaran
        radius={25} // Radius lingkaran
        chartConfig={{
          backgroundGradientFrom: "#f3d4fe",
          backgroundGradientTo: "#f3d4fe",
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // Warna lingkaran
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        hideLegend={true} // Menyembunyikan legenda
        style={{
          backgroundColor: "transparent",
        }}
      />
      {/* Teks di tengah lingkaran */}
      <Text style={styles.progressText}>{Math.round(progress * 100)}%</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Box profil */}
        {/* HeaderProfile diubah menjadi full-width dan fixed at the top */}
        <View style={styles.headerContainer}>
          <HeaderProfile />
        </View>

        {/* Box untuk progress */}
        <View style={styles.outerBox}>
          <Text style={styles.sectionTitle}>Completed Task</Text>

          {/* Progress Task */}
          <View style={styles.box}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>
                Menganalisis Gerbang Logika dalam Bentuk Himpunan
              </Text>
              <Text style={styles.level}>Level 1</Text>
            </View>
            {renderProgressChart(progress1)}
          </View>

          <View style={styles.box}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>
                Membandingkan Beberapa Himpunan yang Memodelkan Suatu Operasi
                Logika
              </Text>
              <Text style={styles.level}>Level 2</Text>
            </View>
            {renderProgressChart(progress2)}
          </View>

          <View style={styles.box}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>
                Membandingkan Beberapa Himpunan yang Memodelkan Suatu Operasi
                Logika (Lanjutan)
              </Text>
              <Text style={styles.level}>Level 3</Text>
            </View>
            {renderProgressChart(progress3)}
          </View>

          <View style={styles.box}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>
                Membuat Himpunan untuk Memodelkan Persoalan Logika
              </Text>
              <Text style={styles.level}>Level 4</Text>
            </View>
            {renderProgressChart(progress4)}
          </View>
        </View>
      </ScrollView>
      {/* Navbar bawah */}
      <BottomNavbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    width: "100%", // Pastikan header selebar layar
    paddingTop: 0, // Menghapus padding yang tidak diinginkan
    marginBottom: 20, // Menambahkan jarak di bawah header
  },
  scrollContainer: {
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
  profileBox: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    backgroundColor: "#f6f7fb",
    borderRadius: 10,
    padding: 30,
    marginBottom: 20,
    alignSelf: "center",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileTextContainer: {
    marginLeft: 20,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  profileStatus: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  outerBox: {
    width: "90%",
    backgroundColor: "#f6f7fb",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 30,
    alignSelf: "center",
    marginBottom: 70,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  box: {
    width: "100%",
    backgroundColor: "#f3d4fe",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  textContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  title: {
    fontSize: 14,
    color: "#333",
  },
  level: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#555",
    marginTop: 5,
  },
  progressContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  progressText: {
    position: "absolute",
    fontSize: 14,
    fontWeight: "bold",
    color: "#616161",
  },
});

export default Completed;
