import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import HeaderComponent from './components/HeaderComponent';
import BodyComponent from './components/BodyComponent';
import ConfigComponent from './components/ConfigComponent';

function App() {
  return(
      <Provider store={store}>
        <HeaderComponent />
        <ConfigComponent />
        <BodyComponent />
      </Provider>
  );
}

export default App;