import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './components/redux/store'; // Đảm bảo đường dẫn đúng
import ListScreen from './components/ListScreen'; // Đường dẫn đến màn hình danh sách
import AddScreen from './components/AddScreen'; // Đường dẫn đến màn hình thêm khóa học

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="List">
          <Stack.Screen
            name="List"
            component={ListScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Add"
            component={AddScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
