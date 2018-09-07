import React, { Component } from 'react';
import './App.css';
import List from './components/list';
import DropDown from './components/dropdown';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="App">
          <DropDown />
          <List />
        </div>
      </Provider>
    );
  }
}

export default App;
