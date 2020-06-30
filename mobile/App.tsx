import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// JSX: É o XML dentro do Javascript
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Expo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold'
  },
}); // TO DO 19:02
