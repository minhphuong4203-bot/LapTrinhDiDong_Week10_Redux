import React, { useState, useEffect } from 'react';
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
import { addCourse, updateCourse } from './slice'; // Import cả hai thunks

const AddScreen = ({ navigation, route }) => {
  const [jobTitle, setJobTitle] = useState('');
  const dispatch = useDispatch();
  const { course } = route.params || {}; // Nhận thông tin sản phẩm từ params

  useEffect(() => {
    if (course) {
      setJobTitle(course.title); // Đặt tiêu đề nếu có sản phẩm
    }
  }, [course]);

  const handleFinish = async () => {
    if (!jobTitle) {
      Alert.alert('Please enter a job title');
      return;
    }

    try {
      if (course) {
        // Cập nhật sản phẩm
        await dispatch(updateCourse({ id: course.id, title: jobTitle })); // Dispatch update thunk
        Alert.alert('Course updated successfully!');
      } else {
        // Thêm sản phẩm mới
        await dispatch(addCourse(jobTitle)); // Dispatch the thunk
        Alert.alert('Course added successfully!');
      }
      setJobTitle(''); // Clear the input field
      navigation.goBack(); // Navigate back to the previous screen
    } catch (error) {
      console.error(error);
      Alert.alert('Error adding/updating course');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{course ? 'UPDATE YOUR JOB' : 'ADD YOUR JOB'}</Text>
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
        <Text style={styles.finishButtonText}>{course ? 'UPDATE ➔' : 'FINISH ➔'}</Text>
      </TouchableOpacity>
      <Image
        source={require('../assets/images/bookAndPencil.png')} // Điều chỉnh đường dẫn nếu cần
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
    width: 200,  // Điều chỉnh chiều rộng nếu cần
    height: 200, // Điều chỉnh chiều cao nếu cần
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