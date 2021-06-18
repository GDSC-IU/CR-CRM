import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Login from './login';
import { Form, Button, Navbar, Container } from 'react-bootstrap';

class Register extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
			cname: '',
			title: '',
			add: '',
			phn: '',
			website: '',
			email: '',
			pwd: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
  
	}

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});
    // console.log(`${name}: ${value}`);
  }

	handleSubmit(e) {
		e.preventDefault();
		this.sendData();
	}

	async sendData() {
		const {cname, title, add, phn, website, email, pwd} = this.state;
		try {
			const res = await fetch('http://localhost:8000/user', {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({cname, title, add, phn, website, email, pwd}),
      });
			const result = await res.json();
			console.log(result);
			alert('Data Created');
		}
		catch(err) {
			console.log(err);
		}
	}
    
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Link className="navbar-brand" to={"/"}>CR-CRM</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/login"}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/register"}>Register</Link>
                </li>
              </ul>
            </div>
          </Container>
        </Navbar>
        <div className="inner">  
          <Form action="/user" method="POST">
            <h3>Register Company</h3>
						<Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control name="cname" type="text" value={this.state.cname} onChange={this.handleInputChange} placeholder="Company Name" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control name="title" type="text" value={this.state.title} onChange={this.handleInputChange} placeholder="Company Title" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control name="add" type="text" value={this.state.add} onChange={this.handleInputChange} placeholder="Building, Street, State" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone No.</Form.Label>
              <Form.Control name="phn" type="tel" value={this.state.phn} onChange={this.handleInputChange} placeholder="6********9"></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Website</Form.Label>
              <Form.Control name="website" type="url" value={this.state.website} onChange={this.handleInputChange} placeholder="xyz.com"></Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email Account</Form.Label>
              <Form.Control name="email" type="email" value={this.state.email} onChange={this.handleInputChange} placeholder="Enter Company Mail Id" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name="pwd" type="password" value={this.state.pwd} onChange={this.handleInputChange} placeholder="Enter password" />
            </Form.Group>
            <Button onClick={this.handleSubmit} variant="dark" type="submit" size="lg" block>
              Register
            </Button>
            <p className="forgot-password text-right">
              Already Registered? <Link to={"/login"}>Sign In</Link>
            </p>
          </Form>
        </div>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch> 
      </div>
    );
  }
}

export default Register;