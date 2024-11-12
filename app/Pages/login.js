import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

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
            onChangeText={(text) => setUsername(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            style={styles.input}
          />
          <View style={styles.btnTengah}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => router.push("Pages/siswa")}
            >
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
