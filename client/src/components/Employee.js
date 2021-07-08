import React, { Component } from 'react';
// import { Switch, Route, Link } from "react-router-dom";
import { Form, Button, Card, Row, Col, InputGroup } from 'react-bootstrap';

class Employee extends Component {
  
	constructor(props) {
		super(props);

		this.state = {
			compID: this.props.user.compID,
			roleID: 1,
			firstName: '',
			lastName: '',
			userName: '',
			email: '',
			phone: '',
			status: 'active',
			pwd: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleChange(event) {
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
		const { compID, roleID, firstName, lastName, userName, pwd, email, phone, status } = this.state;
		try {
      const res = await fetch('http://localhost:8080/emp', {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({compID, roleID, firstName, lastName, userName, pwd, email, phone, status}),
      });
      const result = await res.json();
      console.log(result);
      alert('Employee Created!');

      this.setState ({
        firstName: '',
				lastName: '',
				userName: '',
				email: '',
				phone: '',
				status: 'active',
				pwd: ''
      });
		}
		catch(err) {
			console.log(err);
		}
	}

	render() {

		return (
			<>
				<Card>
					<Card.Body>
						<Card.Title>Employee Registration</Card.Title>
						<Form>
							{/* <Form.Group as={Row}>
								<Form.Label as={Col} md={3}>Company ID</Form.Label>
								<Col md={4}>
									<Form.Control value={this.state.value} style={{cursor: "not-allowed"}} placeholder={this.props.user.compID} readOnly />
								</Col>
							</Form.Group> */}
							<Form.Group as={Row}>
								<Form.Label as={Col} md={3}>Full Name</Form.Label>
								<Col md={4}>
                	<Form.Control value={this.state.value} name="firstName" onChange={this.handleChange} type="text" placeholder="First Name" />
                </Col>
								<Col md={1}></Col>
								<Col md={4}>
                	<Form.Control value={this.state.value} name="lastName" onChange={this.handleChange} type="text" placeholder="Last Name" />
                </Col>
							</Form.Group>
							<Form.Group as={Row}>
                <Form.Label as={Col} md={3}>User Name</Form.Label>
								<Col md={9}>
                	<Form.Control value={this.state.value} name="userName" onChange={this.handleChange} type="text" placeholder="Enter Username" />
                </Col>
              </Form.Group>
							<Form.Group as={Row}>
                <Form.Label as={Col} md={3}>Phone Number</Form.Label>
              	<Col md={9}>
              		<Form.Control value={this.state.value} type="tel" name="phone" onChange={this.handleChange} placeholder="Enter Mobile number" />
              	</Col>
              </Form.Group>
							<Form.Group as={Row}>
								<Form.Label as={Col} md={3}>Status</Form.Label>
								<Col md={4}>	
									<Form.Control value={this.state.value} as="select" name="status" onChange={this.handleChange} defaultValue="active">
										<option value="active">Active</option>
										<option value="inactive">Inactive</option>
										<option value="suspended">Suspended</option>
										<option value="deleted">Deleted</option>
									</Form.Control>
								</Col>
							</Form.Group>
							<Form.Group as={Row}>
                <Form.Label as={Col} md={3}>Email</Form.Label>
                <InputGroup as={Col} md={9}>
									<InputGroup.Prepend>
        					  <InputGroup.Text>@</InputGroup.Text>
        					</InputGroup.Prepend>
                	<Form.Control value={this.state.value} type="email" name="email" onChange={this.handleChange} placeholder="Enter Email" />
                </InputGroup>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label as={Col} md={3}>Password</Form.Label>
								<Col md={9}>
                	<Form.Control value={this.state.value} name="pwd" onChange={this.handleChange} type="password" placeholder="Enter Password" />
                </Col>
              </Form.Group>
							<Button onClick={this.handleSubmit} type="submit" variant="dark">Register Employee</Button>
							<br />
							<br />
              <Button onClick={this.handleReset} type="reset">Reset Input</Button>
						</Form>
					</Card.Body>
				</Card>
			</>
		);
	};

}


export default Employee;