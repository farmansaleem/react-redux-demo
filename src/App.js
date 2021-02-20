import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'
import Routes from "./routes"
import Header from "./components/Header";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Routes />
    </Provider>
  );
}

export default App;

