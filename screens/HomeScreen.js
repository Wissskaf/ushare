// screens/HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Details')}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
  },
  text: {
    marginBottom: 20, // Space between text and button
  },
  buttonContainer: {
    position: 'absolute', // Position the button container absolutely
    bottom: 20, // Adjust as needed to position the button at the bottom
    left: 0,
    right: 0,
    justifyContent: 'center', // Center the button horizontally
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'black', // Set the button color to black
    width: 100, // Set the desired width
    height: 50, // Set the desired height
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center', // Center the text horizontally
    borderRadius: 25, // Make the button rounded
  },
  buttonText: {
    color: 'white', // Set the text color to white
    fontSize: 18, // Set the font size
  },
});

export default HomeScreen;
