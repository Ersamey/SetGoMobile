import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import HeaderProfile from "../Layout/header";
import { useRouter } from "expo-router";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const DetailKelas = () => {
  const router = useRouter();

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Materi 1",
      level: "Level 1",
      description: "Deskripsi Materi 1 lorem ipsum dolor sit amet",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Materi 2",
      level: "Level 2",
      description: "Deskripsi Materi 2 lorem ipsum dolor sit amet",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Materi 3",
      level: "Level 3",
      description: "Deskripsi Materi 3 lorem ipsum dolor sit amet",
    },
  ];

  const Item = ({ title, level, description, id }) => (
    <TouchableOpacity
      onPress={() => router.push(`/Pages/Siswa/materi?id=${id}`)}
    >
      <View style={styles.class}>
        <Image
          source={require("../../../assets/images/Image.png")} // Assuming image is in the correct path
          style={styles.classImage}
        />
        <Text style={styles.clssName}>{title}</Text>
        <Text>{level}</Text>
        <Text>{description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <HeaderProfile />
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            <FlatList
              data={DATA}
              renderItem={({ item }) => (
                <Item
                  title={item.title}
                  level={item.level}
                  description={item.description}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
        </SafeAreaProvider>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#fff", // Set background color for the whole container
  },
  clssName: {
    fontWeight: "bold",
    color: "black",
    marginTop: 10,
    fontSize: 17,
  },
  class: {
    backgroundColor: "lightblue",
    padding: 10,
    margin: 20,
    borderRadius: 10,
    height: 220,
    justifyContent: "center", // Center content inside the class container
  },
  classImage: {
    width: 340,
    height: 100,
    alignSelf: "center",
    borderRadius: 10, // Added rounded corners for the image
  },
});

export default DetailKelas;
