import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BoxInfo from "../../components/tabComponents/BoxInfo"; // Adjust the path as needed
import MusicLibraryScreen from "../../components/tabComponents/MusicLibraryScreen"; // Adjust the path as needed
import BooksScreen from "../../components/tabComponents/BooksScreen"; // Adjust the path as needed
import NewsScreen from "../../components/tabComponents/NewsScreen"; // Adjust the path as needed

const Tab = createBottomTabNavigator();

const TabIcon = ({ icon }) => (
  <View style={styles.iconContainer}>
    <Text style={styles.footerIcon}>{icon}</Text>
  </View>
);

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarButton: (props) => {
          if (route.name === "BoxInfo") {
            return (
              <TouchableOpacity {...props}>
                <TabIcon icon="🏟️" />
              </TouchableOpacity>
            );
          } else if (route.name === "MusicLibrary") {
            return (
              <TouchableOpacity {...props}>
                <TabIcon icon="📅" />
              </TouchableOpacity>
            );
          } else if (route.name === "Books") {
            return (
              <TouchableOpacity {...props}>
                <TabIcon icon="🏆" />
              </TouchableOpacity>
            );
          } else if (route.name === "News") {
            return (
              <TouchableOpacity {...props}>
                <TabIcon icon="🌐" />
              </TouchableOpacity>
            );
          }
        },
        tabBarStyle: { backgroundColor: "#fff" },
      })}
    >
      <Tab.Screen name="BoxInfo" component={BoxInfo} />
      <Tab.Screen
        name="MusicLibrary"
        component={MusicLibraryScreen}
        options={{ title: "My Music Library" }}
      />
      <Tab.Screen name="Books" component={BooksScreen} />
      <Tab.Screen name="News" component={NewsScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabNavigator: {
    backgroundColor: "#fff",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  footerIcon: {
    color: "#fff",
    fontSize: 24,
  },
  container: {
    flex: 1,
    backgroundColor: "#333",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#444",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profileName: {
    color: "#fff",
    fontSize: 18,
  },
  appLogo: {
    width: 40,
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
});

export default MyTabs;
