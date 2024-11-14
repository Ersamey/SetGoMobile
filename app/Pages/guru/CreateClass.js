import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Modal, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";


const generateClassCode = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code;
};

export default function CreateClass() {
  const navigation = useNavigation();
  const [classCreatedVisible, setClassCreatedVisible] = useState(false);
  const [className, setClassName] = useState("");
  const [classCode, setClassCode] = useState("");

  const handleAddClass = () => {
    const generatedCode = generateClassCode();
    setClassCode(generatedCode);
    setClassCreatedVisible(true);
    setClassName("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.label}>Kelas</Text>
        <TextInput placeholder="Masukkan nama kelas" onChangeText={(text) => setClassName(text)} value={className} style={styles.input} />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleAddClass}>
        <Text style={styles.buttonText}>Create Class</Text>
      </TouchableOpacity>

      <Modal animationType="fade" transparent={true} visible={classCreatedVisible} onRequestClose={() => setClassCreatedVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Image source={require("../../../assets/images/success.png")} style={styles.successIcon} />
            <Text style={styles.modalText}>Berhasil Membuat Kelas</Text>
            <Text style={styles.classCode}>({classCode})</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                setClassCreatedVisible(false);
                setTimeout(() => {
                  // Mengirimkan data nama kelas dan kode kelas ke halaman 'Class'
                  navigation.navigate("Pages/guru/Class", { className });
                });
              }}
            >
              <Text style={styles.closeButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  textContainer: {
    width: "90%",
    marginTop: 30,
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 5,
    backgroundColor: "#F5F5F5",
  },
  button: {
    width: "90%",
    backgroundColor: "#6E44FF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  successIcon: {
    width: 40,
    height: 40,
    marginBottom: 15,
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  classCode: {
    fontSize: 16,
    color: "#6E44FF",
    marginBottom: 20,
  },
  closeButton: {
    width: "100%",
    padding: 10,
    alignItems: "center",
    backgroundColor: "#6E44FF",
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
