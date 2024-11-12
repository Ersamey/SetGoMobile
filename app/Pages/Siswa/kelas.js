import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
} from 'react-native';
import HeaderProfile from '../Layout/header';

const Siswa = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility
  const [kodeKelas, setKodeKelas] = useState(''); // State for class code input

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{paddingBottom: 100}}>
        <HeaderProfile />
        <View>
          <View style={styles.class}>
            <Text style={styles.clssName}>Nama Kelas</Text>
            <Text>Nama Guru</Text>
            <Text>Deskripsi Kelas</Text>
          </View>
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Masukkan Kode Kelas</Text>
            <TextInput
              style={styles.input}
              placeholder="Kode Kelas"
              value={kodeKelas}
              onChangeText={setKodeKelas} // Update the state when user types
            />
            <View style={styles.modalButtons}>
              <Button
                title="Cancel"
                color="red"
                onPress={() => setModalVisible(false)} // Close modal
              />
              <Button
                style={styles.btnJoin}
                title="Join"
                onPress={() => {
                  console.log('Kode kelas: ' + kodeKelas);
                  setModalVisible(false); // Close modal after submission
                  setKodeKelas(''); // Clear input field
                }}
              />
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.btnNew}>
        {/* Button to trigger modal */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textBtn}>Join New Class</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  btnJoin: {
    color: '#661FF8',
  },
  button: {
    backgroundColor: '#661FF8',
    padding: 10,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
  },
  textBtn: {
    color: 'white',
    fontWeight: 'bold',
  },
  btnNew: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    paddingBottom: 10,
  },
  clssName: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 17,
  },
  class: {
    backgroundColor: '#e8f4f8',
    padding: 10,
    margin: 20,
    borderRadius: 10,
    height: 100,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Dim background
  },
  modalContent: {
    width: 300,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    width: '100%',
    borderRadius: 5,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default Siswa;
