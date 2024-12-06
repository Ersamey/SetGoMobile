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

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const BASE_URL = "http://192.168.88.151:8080"; // IP server backend

  const login = async () => {
    if (!username.trim() || !password.trim()) {
      Alert.alert("Error", "Username and Password are required!");
      return;
    }

    try {
      const response = await Axios.post(
        `${BASE_URL}/masuk`,
        {
          username,
          password,
        },
        { withCredentials: true }
      );

      const { success, message, data } = response.data;

      if (success) {
        Alert.alert("Success", message);

        // Redirect berdasarkan role user
        router.push(
          data.role === "guru" ? "/Pages/guru/ListClass" : "/Pages/Siswa/kelas"
        );
      } else {
        Alert.alert("Error", message);
      }
    } catch (error) {
      console.error("Login Error:", error);
      Alert.alert("Error", "Terjadi kesalahan saat login. Coba lagi nanti.");
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
          <Text style={styles.desc}>Please Login Here</Text>
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
            <TouchableOpacity style={styles.btn} onPress={login}>
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
            <Text style={{ color: "#661FF8" }}>Forgot Password?</Text>
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
              <Text style={{ color: "#8C8C8C" }}>Don't have an account? </Text>
              <Text
                style={{ color: "#661FF8" }}
                onPress={() => router.push("Pages/register")}
              >
                Sign Up
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
  },
  desc: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
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

export default Login;
