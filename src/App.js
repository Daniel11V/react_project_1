import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Quote from './components/Quote.jsx'

function App() {
  return (
    <Provider store={store}>
      <Quote />
    </Provider>
  );
}

export default App;