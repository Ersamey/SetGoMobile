import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import Axios from "axios";

const BASE_URL = "http://192.168.62.186:8080";

const HeaderProfile = () => {
  const [userData, setUserData] = useState(null); // State untuk menyimpan data pengguna
  const [loading, setLoading] = useState(true); // State untuk memantau proses loading

  // Fungsi untuk mengambil data pengguna
  const fetchUserData = async () => {
    try {
      const response = await Axios.get(`${BASE_URL}/getUserData`); // Tanpa Authorization

      if (response.data && response.data.success) {
        setUserData(response.data.data);
      } else {
        Alert.alert("Error", "User not logged in or data unavailable.");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      Alert.alert(
        "Error",
        "Failed to fetch user data. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  // Render saat data masih loading
  if (loading) {
    return (
      <View style={styles.profile}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.name}>Loading...</Text>
      </View>
    );
  }

  // Render saat data tidak ditemukan
  if (!userData) {
    return (
      <View style={styles.profile}>
        <Text style={styles.name}>User not found</Text>
      </View>
    );
  }

  return (
    <View>
      <View style={styles.profile}>
        <Image
          // source={require(`../../../assets/images/${userData.image}`)}
          source={require(`../../../assets/images/ecamey.jpg`)}
          style={styles.image}
        />
        <View style={styles.containerNama}>
          <Text style={styles.name}>Halo, {userData.full_name}</Text>
          <Text style={styles.point}>+ 0 Points</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 65,
    height: 65,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  containerNama: {
    marginLeft: 20,
  },
  point: {
    color: "green",
    fontWeight: "bold",
    fontSize: 14,
  },
  name: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
  },
});

export default HeaderProfile;
