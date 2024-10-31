// App.js
import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './components/store';
import { setCourses } from './components/slice';
import ListScreen from './components/ListScreen'; // Đảm bảo bạn đã tách ListScreen vào file riêng
import AddScreen from './components/AddScreen'; // Đảm bảo bạn đã tách AddScreen vào file riêng

const Stack = createNativeStackNavigator();

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://66fe07bc699369308956d365.mockapi.io/course');
        const jsonData = await response.json();
        dispatch(setCourses(jsonData));
      } catch (error) {
        console.error(error);
      }
    };

    fetchCourses();
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen name="List" component={ListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Add" component={AddScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const WrappedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default WrappedApp;