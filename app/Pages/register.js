import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Tambahkan ini untuk menggunakan router

  const handleRegister = async () => {
    if (!name || !email || !password) {
      Alert("Error", "Semua field harus diisi");
      return;
    }

    try {
      const response = await fetch("http://localhost/SetGoMobile/Backend/api.php?op=create", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `username=${name}&email=${email}&password=${password}`,
      });

      const result = await response.json();

      if (response.ok && result.data.result === "Berhasil Melakukan Registrasi") {
        Alert.alert("Success", "Registrasi berhasil!");
        router.push("Pages/login"); // Pindah ke halaman login
      } else {
        Alert.alert("Error", result.data.result || "Terjadi kesalahan pada server");
      }
    } catch (error) {
      Alert.alert("Error", "Gagal terhubung ke server");
      console.error(error);
    }
  };

  return (
    <View>
      <ScrollView>
        <View style={styles.inputItems}>
          <Image
            source={require("../../assets/images/logo.png")}
            style={{ width: 232, height: 85, alignSelf: "center" }}
          />
          <View style={styles.name}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "900",
                fontSize: 50.69,
                color: "#661FF8",
              }}
            >
              Set
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "900",
                fontSize: 50.69,
                color: "black",
              }}
            >
              Go!
            </Text>
          </View>
          <Text style={styles.desc}>Please Register Here</Text>
          <TextInput
            placeholder="Full Name"
            values={name}
            onChangeText={(text) => setName(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Email"
            values={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            values={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            style={styles.input}
          />
          <View style={styles.btnTengah}>
            <TouchableOpacity
              style={styles.btn}
              onPress={handleRegister}
            >
              <Text style={styles.btnText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={[styles.name, { margin: 20 }]}>
              <Text style={{ color: "#8C8C8C" }}>
                By signing up you accept the{" "}
              </Text>
              <Text style={{ color: "#661FF8" }}>Terms of Service</Text>
              <Text style={{ color: "#8C8C8C" }}> and </Text>
              <Text style={{ color: "#661FF8" }}>Privacy Policy</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                margin: 10,
              }}
            >
              <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
              <Text style={{ width: 50, textAlign: "center" }}>or</Text>
              <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
            </View>
            <View style={styles.name}>
              <Text>Already have an account? </Text>
              <Text
                style={{ color: "#661FF8" }}
                onPress={() => router.push("Pages/login")}
              >
                Log In
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  inputItems: {
    flex: 1,
    marginTop: 100,
  },
  name: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
    flexWrap: "wrap",
  },
  desc: {
    textAlign: "center",
    fontSize: 20,
    color: "black",
    margin: 10,
  },
  btn: {
    backgroundColor: "#661FF8",
    borderRadius: 5,
    padding: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
  },
  btnText: {
    color: "#FFFFFF",
    textAlign: "center",
  },
  btnTengah: {
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
});

export default Register;
