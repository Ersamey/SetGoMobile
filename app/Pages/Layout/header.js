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
import images from "../imageMapping.js"; // Import file imageMapping.js

const BASE_URL = "http://192.168.88.151:8080";

const HeaderProfile = () => {
  const [user, setUser] = useState(null); // State untuk menyimpan data user
  const [loading, setLoading] = useState(true); // State untuk loading indikator

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await Axios.get(`${BASE_URL}/getUserData`, {
          withCredentials: true,
        });
        console.log("Axios Response:", response);
        if (response.data.success) {
          setUser(response.data.data); // Menyimpan data user ke state
        } else {
          Alert.alert(
            "Error",
            response.data.message || "Failed to fetch user data."
          );
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        Alert.alert("Error", "Could not fetch user data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []); // Dependency array kosong berarti hanya berjalan sekali setelah komponen dipasang

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  // Mengakses user.image langsung dari state user
  const imageSource =
    user && user.image ? images[user.image] : images["default.jpg"];

  return (
    <View>
      <View style={styles.profile}>
        <Image source={imageSource} style={styles.image} />
        <View style={styles.containerNama}>
          <Text style={styles.name}>
            Halo, {user ? user.full_name : "Guest"}
          </Text>
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
