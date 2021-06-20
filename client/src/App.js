import './App.css';
import { Component } from 'react';
import Login from './components/login';
import Register from './components/register';
import Dashboard from './components/dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile/:compID" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    );
  };
}

export default App;
