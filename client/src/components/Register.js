import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Login from './login';
import { Form, Button } from 'react-bootstrap';

class Register extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            f_name: '',
            l_name: '',
            u_name: '',
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
		const {f_name, l_name, u_name, pwd} = this.state;
		try {
			const res = await fetch('http://localhost:8000/user', {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({f_name, l_name, u_name, pwd}),
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
                        <Navbar.Brand href="#home">CR-CRM</Navbar.Brand>
                        <Nav className="">
                            <Nav.Link href="#home">Sign In</Nav.Link>
                            <Nav.Link href="#features">Sign Up</Nav.Link>
                        </Nav>
                    </Navbar>
                    <div className="outer">
                    <div className="inner">
                    <Form action="/user" method="POST">
                        <h3>Register</h3>
                        <Form.Group controlId="formPlainText">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control name="f_name" type="text" value={this.state.f_name} onChange={this.handleInputChange} placeholder="First Name" />
                        </Form.Group>
                        <Form.Group controlId="formPlainText">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control name="l_name" type="text" value={this.state.l_name} onChange={this.handleInputChange} placeholder="Last Name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control name="u_name" type="email" value={this.state._uname} onChange={this.handleInputChange} placeholder="Enter username" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="pwd" type="password" value={this.state.pwd} onChange={this.handleInputChange} placeholder="Enter password" />
                        </Form.Group>
                        <Button onClick={this.handleSubmit} variant="dark" type="submit" block>
                            Sign Up
                        </Button>
                        <p className="forgot-password text-right">
                            Already registered? <Link to={"/sign-in"}>Sign In</Link>
                        </p>
                    <Switch>
                        <Route path="/sign-in" component={Login} />
                    </Switch>
                </Form>
                </div>
                </div>
            </div>
        );
    }
}

export default Register;