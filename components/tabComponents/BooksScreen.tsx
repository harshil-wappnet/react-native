import React from "react";
import { Text, View, StyleSheet } from 'react-native';

export default function BooksScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Books Screen</Text>
      </View>
    );
  }

// Styles
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    welcomeText: {
      fontSize: 24,
      fontWeight: 'bold',
    },
  });