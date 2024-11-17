import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import DocumentPicker from "react-native-document-picker";
import { useRouter } from "expo-router";

const Tambah = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [level, setLevel] = useState("");
  const [description, setDescription] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = async () => {
    try {
      const file = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setUploadedFile(file[0]);
      alert(`File berhasil diunggah: ${file[0].name}`);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log("Pemilihan file dibatalkan");
      } else {
        console.error("Terjadi kesalahan:", err);
      }
    }
  };

  const handleAddClass = () => {
    if (!title || !level || !description || !uploadedFile) {
      alert("Mohon lengkapi semua data sebelum menambahkan materi.");
      return;
    }

    // Simpan data atau kirim ke server
    const newMateri = {
      title,
      level,
      description,
      uploadedFile,
    };

    console.log("Materi Baru:", newMateri);
    alert("Materi berhasil ditambahkan!");

    // Kembali ke halaman sebelumnya
    router.push("/Pages/guru/ListClass");
  };

  return (
    <SafeAreaView style={styles.container}>
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

      <TouchableOpacity style={styles.uploadButton} onPress={handleFileUpload}>
        <Text style={styles.uploadButtonText}>
          {uploadedFile ? uploadedFile.name : "Unggah File"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleAddClass}>
        <Text style={styles.buttonText}>Simpan Materi</Text>
      </TouchableOpacity>
    </SafeAreaView>
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
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  uploadButton: {
    backgroundColor: "#ddd",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  uploadButtonText: {
    fontSize: 16,
    color: "#333",
  },
  button: {
    backgroundColor: "#6E44FF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Tambah;
