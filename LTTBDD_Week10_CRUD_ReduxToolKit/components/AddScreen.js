// components/AddScreen.js
import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { addCourse } from './slice'; // Import the thunk

const AddScreen = ({ navigation }) => {
  const [jobTitle, setJobTitle] = useState('');
  const dispatch = useDispatch();

  const handleFinish = async () => {
    if (!jobTitle) {
      Alert.alert('Please enter a job title');
      return;
    }

    try {
      await dispatch(addCourse(jobTitle)); // Dispatch the thunk
      Alert.alert('Course added successfully!');
      setJobTitle(''); // Clear the input field
      navigation.goBack(); // Navigate back to the previous screen
    } catch (error) {
      console.error(error);
      Alert.alert('Error adding course');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ADD YOUR JOB</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.inputField}
          placeholder="Input your job"
          placeholderTextColor="#9095A0"
          value={jobTitle}
          onChangeText={setJobTitle}
        />
      </View>
      <TouchableOpacity style={styles.finishButton} onPress={handleFinish}>
        <Text style={styles.finishButtonText}>FINISH ➔</Text>
      </TouchableOpacity>
      <Image
        source={require('../assets/images/bookAndPencil.png')} // Adjust the path as necessary
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 200,  // Adjust width as needed
    height: 200, // Adjust height as needed
    marginTop: 100,
  },
  inputWrapper: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#9095A0',
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  inputField: {
    height: 40,
  },
  finishButton: {
    backgroundColor: '#00BFFF',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  finishButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default AddScreen;