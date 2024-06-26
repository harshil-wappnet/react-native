import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const TurfCard = ({ area }) => {
  const truncateAddress = (address) => {
    if (address.length > 15) {
      return address.substring(0, 15) + "...";
    }
    return address;
  };

  return (
    <View style={styles.card}>
      <Image
        source={area.image} // replace with the actual image URL
        style={styles.image}
      />
      <View style={styles.cardContent}>
        <View style={styles.cardInfo}>
          <Text style={{ fontWeight: "bold" }}>Name: </Text>
          <Text style={styles.name}>{area.name}</Text>
        </View>
        <View style={styles.cardInfo}>
          <Text style={{ fontWeight: "bold" }}>Address: </Text>
          <Text style={styles.name}>{truncateAddress(area.address)}</Text>
        </View>
        <View style={styles.cardInfo}>
          <Text style={{ fontWeight: "bold" }}>Date: </Text>
          <Text style={styles.name}>10-04-2003</Text>
        </View>
        <View style={styles.cardInfo}>
          <Text style={{ fontWeight: "bold" }}>Time- </Text>
          <Text style={styles.name}>10 : 00 - 12 : 00</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#d9d9d9",
    borderRadius: 10,
    overflow: "hidden",
    width: "90%",
    margin: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    // marginTop: 30,
  },
  image: {
    width: 150,
    height: 150,
  },
  cardContent: {
    flex: 1,
    padding: 10,
    justifyContent: "space-evenly",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  address: {
    fontSize: 14,
    color: "#555",
    marginVertical: 5,
  },
  date: {
    fontSize: 14,
    color: "#000",
  },
  time: {
    fontSize: 14,
    color: "#000",
  },
  cardInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default TurfCard;
