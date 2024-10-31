// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './components/redux/store'; // Đảm bảo đường dẫn đúng
import ListScreen from './components/ListScreen'; // Đường dẫn đến màn hình danh sách

const App = () => {
  return (
    <Provider store={store}>
      <ListScreen />
    </Provider>
  );
};

export default App;
