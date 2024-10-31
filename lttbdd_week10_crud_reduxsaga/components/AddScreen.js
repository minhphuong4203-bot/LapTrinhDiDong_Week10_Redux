// AddScreen.js
import React, { useEffect, useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { addCourseRequest } from './redux/actions';

const AddScreen = ({ navigation, route }) => {
  const { course, isUpdate } = route.params || {};
  const [jobTitle, setJobTitle] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (isUpdate && course) {
      setJobTitle(course.title);
    }
  }, [isUpdate, course]);

  const handleFinish = () => {
    if (!jobTitle) {
      Alert.alert('Please enter a job title');
      return;
    }

    dispatch(addCourseRequest({ id: course?.id, title: jobTitle }));
    Alert.alert(isUpdate ? 'Course updated successfully!' : 'Course added successfully!');
    setJobTitle('');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isUpdate ? 'UPDATE YOUR JOB' : 'ADD YOUR JOB'}</Text>
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