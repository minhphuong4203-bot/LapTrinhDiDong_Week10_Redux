// ListScreen.js
import React, { useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet,TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourses } from './courseSlice';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListScreen = ({ route }) => {
  const dispatch = useDispatch();
  const { userName } = route.params;
  const { courses, loading, error } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  if (loading) return <ActivityIndicator size="large" color="#00BFFF" />;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <View style={styles.listContainer}>
      <Text style={styles.headerText}>Hi {userName}</Text>
      <FlatList
        data={courses}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.titleItem}>{item.title}</Text>
            <TouchableOpacity>
              <Icon name="pencil" size={14} color="red" />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#E0E0E0',
    padding: 15,
    marginBottom: 10,
  },
  titleItem: {
    fontSize: 16,
    color: '#333',
  },
});

export default ListScreen;