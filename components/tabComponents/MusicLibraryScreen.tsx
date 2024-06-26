import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import TurfCard from "../TurfCard";

export default function MusicLibraryScreen() {
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
  ];
  return (
    <View>
      <View style={styles.headingView}>
        <Text style={styles.headingText}>Booked:</Text>
      </View>
      <ScrollView>
        {areas.map((area) => (
          <TurfCard key={area.id} area={area} />
        ))}
      </ScrollView>
      <View style={styles.headingView}>
        <Text style={styles.headingText}>History:</Text>
      </View>
      <ScrollView>
        {areas.map((area) => (
          <TurfCard key={area.id} area={area} />
        ))}
      </ScrollView>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  headingView: {
    margin: 20,
    marginBottom: 0,
  },
  headingText: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
