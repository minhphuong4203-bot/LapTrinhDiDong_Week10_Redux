// ListScreen.js
import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoursesRequest, deleteCourseRequest } from './redux/actions';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { courses, loading, error } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(fetchCoursesRequest());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteCourseRequest(id));
  };

  if (loading) return <Text>Loading courses...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <View style={styles.listContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="#000" />
        </TouchableOpacity>
        <View style={styles.userInfoContainer}>
          <Icon name="user" size={24} color="#000" style={styles.logo} />
          <View>
            <Text style={styles.headerText}>Hi User</Text>
            <Text style={styles.subHeaderText}>Have a great day ahead</Text>
          </View>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#A9A9A9" style={styles.searchIcon} />
        <TextInput style={styles.searchInput} placeholder="Search" placeholderTextColor="#A9A9A9" />
      </View>
      <FlatList
        data={courses}
        renderItem={({ item }) => (
          <Item
            item={item}
            navigation={navigation}
            onDelete={handleDelete}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 80 }}
        style={{ maxHeight: 520 }}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Add')}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const Item = ({ item, navigation, onDelete }) => (
  <View style={styles.item}>
    <Text style={styles.titleItem}>{item.title}</Text>
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Add', { course: item, isUpdate: true })}>
        <Icon name="pencil" size={20} color="red" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(item.id)} style={{ marginLeft: 10 }}>
        <Icon name="times" size={20} color="red" />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10,
  },
  logo: {
    marginRight: 10,
  },
  subHeaderText: {
    fontSize: 16,
    color: '#000',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#9095A0',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    height: 40,
    flex: 1,
    color: '#000',
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
    backgroundColor: '#F9F9F9',
  },
  titleItem: {
    fontSize: 18,
    color: '#333',
  },
  addButton: {
    left: '50%',
    marginLeft: -30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#00BFFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  addButtonText: {
    fontSize: 30,
    color: '#FFFFFF',
  },
});

export default ListScreen;