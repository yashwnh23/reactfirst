import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Register from './components/register'
import store from './store';

function App() {
  return (
    <div className="App">
    <Provider store={store}>
    <Register/>
        </Provider>
     
    </div>
  );
}

export default App;
