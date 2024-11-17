import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Tambah = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Halaman Tambah Materi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});

export default Tambah;
