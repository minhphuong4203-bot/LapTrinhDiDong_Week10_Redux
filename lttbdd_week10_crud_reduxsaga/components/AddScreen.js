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
import { addCourseRequest } from './redux/actions'; // Import action để thêm khóa học

const AddScreen = ({ navigation }) => {
  const [jobTitle, setJobTitle] = useState('');
  const dispatch = useDispatch();

  const handleFinish = () => {
    if (!jobTitle) {
      Alert.alert('Please enter a job title');
      return;
    }

    // Gọi action với đối tượng chứa title
    dispatch(addCourseRequest({ title: jobTitle }));
    Alert.alert('Course added successfully!');
    setJobTitle(''); // Xóa trường nhập
    navigation.goBack(); // Quay lại màn hình trước
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
    width: 200,
    height: 200,
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