import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import BoxInfoModal from "./Modals/BoxInfoModal";

const AreaCard = ({ area }) => {
  const image = area.image;
  const location = area.location;
  const [like, setLike] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const handleLike = () => {
    setLike(!like);
  };

  const handleBookmark = () => {
    setBookmark(!bookmark);
  };

  return (
    <>
      <View style={styles.cardContainer}>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <Image style={styles.areaImage} source={image} />
          <View style={styles.overlayTextContainer}>
            <Text style={styles.overlayText}>{location}</Text>
          </View>
          <View style={styles.iconLikeContainer}>
            <TouchableOpacity style={styles.iconLikeButton}>
              {like ? (
                <IconAntDesign
                  name="heart"
                  size={30}
                  color="red"
                  style={styles.icon}
                  onPress={handleLike}
                />
              ) : (
                <IconAntDesign
                  name="hearto"
                  size={30}
                  color="#FFF"
                  style={styles.icon}
                  onPress={handleLike}
                />
              )}
              <Text style={styles.likesValue}>10</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBookmarkButton}>
              {bookmark ? (
                <IconFontAwesome
                  name="bookmark"
                  size={30}
                  color="#FFF"
                  style={styles.icon}
                  onPress={handleBookmark}
                />
              ) : (
                <IconFontAwesome
                  name="bookmark-o"
                  size={30}
                  color="#FFF"
                  style={styles.icon}
                  onPress={handleBookmark}
                />
              )}
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
      <BoxInfoModal
        area={area}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 150,
    height: 200,
    backgroundColor: "#444",
    borderRadius: 10,
    overflow: "hidden",
    margin: 10,
    marginTop: 25,
    cursor: "pointer",
  },
  areaImage: {
    width: "100%",
    height: "100%",
  },
  overlayTextContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "rgba(0, 0, 255, 0.7)",
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  overlayText: {
    color: "#fff",
    fontSize: 16,
  },
  iconLikeContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconLikeButton: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: 5,
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
  },
  iconBookmarkContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconBookmarkButton: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: 5,
    borderRadius: 5,
  },
  icon: {
    color: "#fff",
    fontSize: 18,
  },
  likesValue: {
    color: "#fff",
  },
});

export default AreaCard;
