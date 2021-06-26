import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Login from './Login';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Navigation from './Navigation';

class Register extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
			compName: '',
			compTitle: '',
			compAdd: '',
			compPhn: '',
			website: '',
			compEmail: '',
			pwd: '',
      roleID: 1,
      firstName: "Admin",
      lastName: "Admin",
      userName: "Admin",
      email: '',
      phone: '',
      status: "Active"
    };

    this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
  
	}

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});
    if (name === 'compEmail')
      this.setState({email: value});
    else if (name === 'compPhn')
      this.setState({phone: value});
    // console.log(`${name}: ${value}`);
  }

	handleSubmit(e) {
		e.preventDefault();
		this.sendData();
	}

	async sendData() {
		const {compName, compTitle, compAdd, compPhn, website, compEmail, status} = this.state;
		try {
			const res = await fetch('http://localhost:8080/comp', {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({compName, compTitle, compAdd, compPhn, website, compEmail, status}),
      });
			const result = await res.json();
			console.log(result);
			alert('Company Registered!');

      const { roleID, firstName, lastName, userName, pwd, email, phone } = this.state;
      const res2 = await fetch('http://localhost:8080/emp', {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({compID: result.compID, roleID, firstName, lastName, userName, pwd, email, phone, status}),
      });
      const result2 = await res2.json();
      console.log(result2);
      alert('Admin Created!!');
      this.setState ({
        compName: '',
        compTitle: '',
        compAdd: '',
        compPhn: '',
        website: '',
        compEmail: '',
        pwd: '',
        email: '',
        phone: ''
      });
		}
		catch(err) {
			console.log(err);
		}
	}
    
  render() {
    return (
      <div>
        <Navigation />
        <div className="inner">  
          <Form action="/user" method="POST">
            <h3>Register Company</h3>
						<Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control name="compName" type="text" value={this.state.compName} onChange={this.handleInputChange} placeholder="Company Name" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control name="compTitle" type="text" value={this.state.compTitle} onChange={this.handleInputChange} placeholder="Company Title" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control name="compAdd" type="text" value={this.state.compAdd} onChange={this.handleInputChange} placeholder="Building, Street, State" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone No.</Form.Label>
              <Form.Control name="compPhn" type="tel" value={this.state.compPhn} onChange={this.handleInputChange} placeholder="6********9"></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Website</Form.Label>
              <Form.Control name="website" type="url" value={this.state.website} onChange={this.handleInputChange} placeholder="xyz.com"></Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email Account</Form.Label>
              <Form.Control name="compEmail" type="email" value={this.state.compEmail} onChange={this.handleInputChange} placeholder="Enter Company Mail Id" />
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
        <Container>
          <Row className="mt-3">
            <footer as={Col} className="mx-auto">
              <p className="text-center text-secondary font-weight-bold mt-2">&copy; 2021 Bhavesh @OverseasITSolutions</p>
            </footer>
          </Row>
        </Container>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch> 
      </div>
    );
  }
}

export default Register;