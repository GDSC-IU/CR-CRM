import './App.css';
import { Component } from 'react';
import Login from './components/Login';
import Register from './components/Login';
import Dashboard from './components/Login';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        {/* <Login /> */}
        <Register />
        {/* <Dashboard /> */}
      </div>
    );
  };
}

export default App;
