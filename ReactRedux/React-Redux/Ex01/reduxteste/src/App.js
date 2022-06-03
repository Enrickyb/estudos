import React from 'react';
import {Provider} from 'react-redux'
import './App.css';
import Counter from './components/Counter';
import HeaderCounter from './components/HeaderCounter';
import { createStore } from 'redux'
import CounterReducer from './components/Reducers/CounterReducer';

function App() {
  const store = createStore(CounterReducer)
  return (
    <div className="App">
      <Provider store={store}>
        <HeaderCounter></HeaderCounter>
        <Counter></Counter>
      </Provider>
    </div>
  );
}

export default App;
