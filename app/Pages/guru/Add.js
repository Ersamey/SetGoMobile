import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

const Tambah = () => {
  const [title, setTitle] = useState("");
  const [level, setLevel] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    if (!title || !level || !description) {
      Alert.alert("Peringatan", "Semua kolom harus diisi!");
      return;
    }

    // Simpan data di sini (misalnya, kirim ke server)
    Alert.alert("Sukses", "Data berhasil disimpan!");
    // Reset input setelah disimpan
    setTitle("");
    setLevel("");
    setDescription("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tambah Materi Baru</Text>

      <TextInput
        style={styles.input}
        placeholder="Judul Materi"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={styles.input}
        placeholder="Level Materi"
        value={level}
        onChangeText={setLevel}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Deskripsi Materi"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Simpan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#6E44FF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Tambah;
