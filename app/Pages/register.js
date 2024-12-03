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
import Axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const role = "siswa"; // Role default diatur sebagai 'siswa'

  const router = useRouter();

  const handleRegister = async () => {
    if (!username || !password) {
      Alert.alert("Error", "All fields are required!");
      return;
    }

    try {
      const response = await Axios.post("http://192.168.148.186:8080/login", {
        username,
        password,
        role,
      });

      if (response.status === 201) {
        Alert.alert("Success", "Registration successful!", [
          { text: "OK", onPress: () => router.push("Pages/login") },
        ]);
      }
    } catch (error) {
      console.error("Error:", error.response || error.message);
      Alert.alert(
        "Error",
        error.response?.data?.message || "Failed to register. Please try again."
      );
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
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            style={styles.input}
          />
          <View style={styles.btnTengah}>
            <TouchableOpacity style={styles.btn} onPress={handleRegister}>
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
