// HomeScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {
  const [name, setName] = useState('');

  const handleGetStarted = () => {
    navigation.navigate('List', { userName: name });
  };

  return (
    <View style={styles.homeContainer}>
      <Text style={styles.homeTitle}>MANAGE YOUR</Text>
      <Text style={styles.homeTitle}>TASK</Text>
      <View style={styles.homeInputContainer}>
        <Icon name="envelope" size={20} color="#8A2BE2" style={styles.icon} />
        <TextInput
          style={styles.homeInput}
          placeholder="Enter your name"
          placeholderTextColor="#9095A0"
          value={name}
          onChangeText={setName}
        />
      </View>
      <TouchableOpacity style={styles.homeButton} onPress={handleGetStarted}>
        <Text style={styles.homeButtonText}>GET STARTED ➔</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  homeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8A2BE2',
    marginBottom: 20,
  },
  homeInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderColor: '#9095A0',
  },
  icon: {
    marginRight: 10,
  },
  homeInput: {
    height: 43,
    flex: 1,
  },
  homeButton: {
    backgroundColor: '#00BFFF',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  homeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default HomeScreen;