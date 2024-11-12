import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import Svg, { Path } from "react-native-svg";

const Welcome = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.inputItems}>
        <Image
          source={require("../assets/images/logo.png")}
          style={{ width: 232, height: 85, alignSelf: "center", marginTop: 50 }}
        />
        <View style={styles.name}>
          <Text style={{ textAlign: "center", fontWeight: "900", fontSize: 50.69, color: "#661FF8" }}>Set</Text>
          <Text style={{ textAlign: "center", fontWeight: "900", fontSize: 50.69, color: "black" }}>Go!</Text>
        </View>
        <Text style={styles.desc}>Welcome to SetGo!</Text>
        <Text style={{ textAlign: "center", alignSelf: "center", flexWrap: "wrap", width: "80%", marginTop: 20 }}>
          Mobile apps for informatics education SMKN 1 M-Learning
        </Text>
        <View style={styles.btnTengah}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => router.push("Pages/login")}
          >
            <Text style={styles.btnText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.waveContainer}>
        <Svg height="100%" width="100%" viewBox="0 0 1440 320" style={{ position: "absolute", bottom: 0 }}>
          <Path
            fill="#661FF8"
            d="M0,224L60,224C120,224,240,224,360,213.3C480,203,600,181,720,154.7C840,128,960,96,1080,85.3C1200,75,1320,85,1380,90.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputItems: { flex: 1, marginTop: 100 },
  name: { flexDirection: "row", justifyContent: "center", margin: 10 },
  desc: { textAlign: "center", fontSize: 20, fontWeight: "bold", color: "black", margin: 10, marginTop: 80 },
  btn: { backgroundColor: "#661FF8", borderRadius: 5, padding: 10, margin: 10, alignItems: "center", justifyContent: "center", width: 150 },
  btnText: { color: "#FFFFFF", textAlign: "center" },
  btnTengah: { alignItems: "center", justifyContent: "center", marginTop: 80 },
  waveContainer: { width: "100%", height: 120, position: "relative", backgroundColor: "#FFFFFF", marginTop: 125 },
});

export default Welcome;
