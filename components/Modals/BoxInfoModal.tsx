import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const BoxInfoModal = ({ visible, onClose, area }) => {
  const navigation = useNavigation();
  const handleBookNow = () => {
    navigation.navigate("Payment");
    // redirect mate atluj karvanu!!
    // return <Payment />;
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Image source={area.image} style={styles.image} />
          <View style={styles.detailsContainer}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={styles.detailText}>
                <Text style={styles.boldText}>Box Title:</Text>
                <Text>{area.name}</Text>
              </View>
              <View style={[styles.detailText, styles.marginRightArea]}>
                <Text style={styles.boldText}>Area:</Text>
                <Text>{area.location}</Text>
              </View>
            </View>
            <View style={styles.detailText}>
              <Text style={styles.boldText}>Address:</Text>
              <Text>{area.address}</Text>
            </View>
            <View style={styles.detailText}>
              <Text style={styles.boldText}>Price:</Text>
              <Text>1000 per Hour</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.bookButton} onPress={handleBookNow}>
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  detailsContainer: {
    marginTop: 10,
    width: "100%",
  },
  detailText: {
    fontSize: 16,
    marginVertical: 5,
  },
  boldText: {
    fontWeight: "bold",
  },
  bookButton: {
    marginTop: 20,
    width: "100%",
    padding: 15,
    backgroundColor: "blue",
    borderRadius: 10,
    alignItems: "center",
  },
  bookButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  marginRightArea: {
    marginRight: 40,
  },
});

export default BoxInfoModal;
