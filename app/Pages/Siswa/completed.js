import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const Completed = () => {
  // Data untuk Progress
  const progress1 = 0.75; // 75% untuk Materi Pemrograman
  const progress2 = 0.50; // 50% untuk Materi Basis Data

  return (
    <View style={styles.container}>
      {/* Outer box untuk profil */}
      <View style={styles.profileBox}>
        <Image
          source={require("../../../assets/images/ecamey.jpg")}
          style={styles.profileImage}
        />
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>Ersa Meilia</Text>
          <Text style={styles.profileStatus}>+ 0 Points</Text>
        </View>
      </View>

      {/* Outer box untuk membungkus teks dan dua box progress */}
      <View style={styles.outerBox}>
        {/* Menambahkan teks di atas dua kotak progress */}
        <Text style={styles.sectionTitle}>Completed Task</Text>

        {/* Kotak pertama: Materi Pemrograman */}
        <View style={styles.box}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Judul Materi 1</Text>
            <Text style={styles.level}>Level 1</Text>
          </View>
          <View style={styles.progressContainer}>
            <ProgressChart
              data={{
                labels: ['Task'], // Opsional
                data: [progress1], // Progress 75% (0.75)
              }}
              width={70} // Sesuaikan dengan diameter lingkaran
              height={60} // Sesuaikan dengan diameter lingkaran
              strokeWidth={8} // Stroke width of the circle (smaller)
              radius={25} // Radius of the circle (smaller)
              chartConfig={{
                backgroundGradientFrom: 'transparent', // Tidak ada background putih
                backgroundGradientTo: 'transparent', // Tidak ada background putih
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // Warna chart
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Warna label
              }}
              hideLegend={true} // Menyembunyikan legend
              style={{
                marginVertical: 8,
              }}
            />
            {/* Teks di tengah circle */}
            <Text style={styles.progressText}>{progress1 * 100}%</Text>
          </View>
        </View>

        {/* Kotak kedua: Materi Basis Data */}
        <View style={styles.box}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Judul Materi 2</Text>
            <Text style={styles.level}>Level 2</Text>
          </View>
          <View style={styles.progressContainer}>
            <ProgressChart
              data={{
                labels: ['Task'], // Opsional
                data: [progress2], // Progress 50% (0.50)
              }}
              width={70} // Sesuaikan dengan diameter lingkaran
              height={60} // Sesuaikan dengan diameter lingkaran
              strokeWidth={8} // Stroke width of the circle (smaller)
              radius={25} // Radius of the circle (smaller)
              chartConfig={{
                backgroundGradientFrom: 'transparent', // Tidak ada background putih
                backgroundGradientTo: 'transparent', // Tidak ada background putih
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // Warna chart
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Warna label
              }}
              hideLegend={true} // Menyembunyikan legend
              style={{
                marginVertical: 8,
              }}
            />
            {/* Teks di tengah circle */}
            <Text style={styles.progressText}>{progress2 * 100}%</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Warna kuning pastel untuk container utama
    paddingVertical: 30, // Menambahkan padding vertikal untuk memberi ruang pada outerBox
    paddingHorizontal: 15, // Mengurangi padding horizontal untuk mengurangi jarak kanan dan kiri
  },
  profileBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#f6f7fb', // Warna ungu pastel muda untuk outer box profil
    borderRadius: 10,
    padding: 30,
    marginBottom: 20, // Memberikan jarak antara profileBox dan outerBox
    alignSelf: 'center', // Mengatur posisi ke tengah
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
    fontWeight: 'bold',
    color: '#333',
  },
  profileStatus: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  outerBox: {
    flex: 1, // Set flex untuk outer box agar menempati sisa ruang
    width: '90%', // Set width untuk outer box (lebih besar dari box di dalamnya)
    backgroundColor: '#f6f7fb', // Warna ungu pastel muda untuk outer box
    borderRadius: 10,
    paddingVertical: 20, // Menambahkan padding vertikal untuk ruang antara outer box dan inner box
    paddingHorizontal: 30, // Mengurangi padding horizontal untuk mengurangi jarak kanan dan kiri
    alignSelf: 'center', // Mengatur posisi ke tengah
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20, // Memberikan jarak antara judul dan box progress
    textAlign: 'left', // Menengahkan teks
  },
  box: {
    width: '100%', // Set width untuk inner box agar memenuhi lebar outer box
    backgroundColor: '#f3d4fe',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15, // Add margin between boxes
    flexDirection: 'row', // Align text and progress horizontally
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Add shadow for Android
  },
  textContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 14,
    color: '#333',
  },
  level: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    marginTop: 5,
  },
  progressContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    position: 'absolute',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#616161',
  },
});

export default Completed;
