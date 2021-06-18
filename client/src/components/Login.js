import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, Switch, Route} from 'react-router-dom';
import Navigation from './navbar';
import Register from './register';


class Login extends Component {

  constructor (props) {
    super(props);

    this.state = {
      email: '',
      pwd: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className="inner">  
          <Form action="profile" method="POST">
            <h3>LogIn with Company Id</h3>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email Account</Form.Label>
              <Form.Control name="uname" type="email" value={this.state.email} onChange={this.handleInputChange} placeholder="Enter Company Mail Id" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name="pwd" type="password" value={this.state.pwd} onChange={this.handleInputChange} placeholder="Enter password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
            <Button onClick={this.handleSubmit} variant="dark" type="submit" size="lg" block>
              Sign In
            </Button>
            <p className="forgot-password text-rigth">
              Forgot <a href="/">password?</a>
            </p>
            <p className="forgot-password text-right">
              Don't have an account? <Link to={"/register"}>Sign Up</Link>
            </p>
          </Form>
        </div>
        <Switch>
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    );
  };
}

export default Login;