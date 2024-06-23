import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import AreaCard from "../AreaCard";
// import BoxTurf from "../../assets/images/box-turf.jpg";
import Icon from "react-native-vector-icons/FontAwesome";

export default function BoxInfo() {
  const areas = [
    {
      id: 1,
      image: require("../../assets/images/box-turf.jpg"),
      name: "Free Hit",
      location: "katargam",
      address: "Neque porro quisquam est qui dolorem ipsum quia dolor",
    },
    {
      id: 2,
      image: require("../../assets/images/box-turf-1.jpg"),
      name: "Dugoutt Box Cricket",
      location: "Pal",
      address: "Neque porro quisquam est qui dolorem ipsum quia dolor",
    },
    {
      id: 3,
      image: require("../../assets/images/box-turf-1.jpg"),
      name: "ViWon box arena",
      location: "Ved-Gam",
      address: "Neque porro quisquam est qui dolorem ipsum quia dolor",
    },
    {
      id: 4,
      image: require("../../assets/images/box-turf.jpg"),
      name: "Masti Box Cricket",
      location: "Piplod",
      address: "Neque porro quisquam est qui dolorem ipsum quia dolor",
    },
    {
      id: 5,
      image: require("../../assets/images/box-turf.jpg"),
      name: "SwingZone Box Cricket",
      location: "Varachha",
      address: "Neque porro quisquam est qui dolorem ipsum quia dolor",
    },
    {
      id: 6,
      image: require("../../assets/images/box-turf-1.jpg"),
      name: "Time out box cricket",
      location: "katargam",
      address: "Neque porro quisquam est qui dolorem ipsum quia dolor",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileHeader}>
          <Icon
            name="user"
            size={30}
            color="#FFF"
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Harshil</Text>
        </View>
        <View>
          <Image
            source={require("../../assets/images/wappnet-log.png")}
            style={styles.appLogo}
          />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.grid}>
        {areas.map((area) => (
          <AreaCard key={area.id} area={area} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
  },
  profileHeader: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 5,
    backgroundColor: "#fff",
  },
  profileImage: {
    width: 40,
    height: 50,
    borderRadius: 20,
    borderColor: "#000",
    color: "#000",
    padding: 10,
  },
  profileName: {
    color: "#000",
    fontSize: 18,
    // marginLeft: 7,
  },
  appLogo: {
    width: 130,
    height: 40,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#444",
  },
  footerIcon: {
    color: "#fff",
    fontSize: 24,
  },
});
