import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
  FlatList,
  StatusBar,
} from "react-native";
import HeaderProfile from "../Layout/header";
import { useRouter } from "expo-router";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const Siswa = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [kodeKelas, setKodeKelas] = useState("");
  const router = useRouter();

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "X RPL 1",
      teacher: "Ersa Meilia",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "X RPL 2",
      teacher: "Siti Nuraeni",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "X RPL 3",
      teacher: "Yasmn Hafidah",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d73",
      title: "X RPL 4",
      teacher: "Utria Evaludini",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d74",
      title: "X RPL 5",
      teacher: "Hikmah Nurarifah",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d75",
      title: "X RPL 6",
      teacher: "Rizki Fauzi",
    },
  ];

  const Item = ({ title, teacher, id }) => (
    <TouchableOpacity
      onPress={() => router.push(`/Pages/Siswa/detail?id=${id}`)}
    >
      <View style={styles.class}>
        <Text style={styles.clssName}>{title}</Text>
        <Text>{teacher}</Text>
        <Text>Deskripsi Kelas</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <HeaderProfile />
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <Item title={item.title} teacher={item.teacher} id={item.id} />
            )}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </SafeAreaProvider>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Masukkan Kode Kelas</Text>
            <TextInput
              style={styles.input}
              placeholder="Kode Kelas"
              value={kodeKelas}
              onChangeText={setKodeKelas}
            />
            <View style={styles.modalButtons}>
              <Button
                title="Cancel"
                color="red"
                onPress={() => setModalVisible(false)}
              />
              <Button
                title="Join"
                onPress={() => {
                  console.log("Kode kelas: " + kodeKelas);
                  setModalVisible(false);
                  setKodeKelas("");
                }}
              />
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.btnNew}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textBtn}>Join New Class</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginBottom: 100,
  },
  btnJoin: {
    color: "#661FF8",
  },
  button: {
    backgroundColor: "#661FF8",
    padding: 10,
    borderRadius: 10,
    margin: 20,
    alignItems: "center",
  },
  textBtn: {
    color: "white",
    fontWeight: "bold",
  },
  btnNew: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    paddingBottom: 10,
  },
  clssName: {
    fontWeight: "bold",
    color: "black",
    fontSize: 17,
  },
  class: {
    backgroundColor: "#e8f4f8",
    padding: 10,
    margin: 20,
    borderRadius: 10,
    height: 100,
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: 300,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    width: "100%",
    borderRadius: 5,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default Siswa;
