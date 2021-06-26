import React, { Component } from 'react';
// import { Switch, Route, Link } from "react-router-dom";
import { Form, Button, Card, Col, Row, InputGroup } from 'react-bootstrap';

class Customer extends Component {
  
	constructor(props) {
		super(props);

		this.state = {
			compID: this.props.user.compID,
			custName: '',
			custUsername: '',
			dob: '',
			custAdd: '',
			city: '',
			state: '',
			pincode: '',
			custPhn: '',
			custStatus: 'active',
			joinDate: '',
			activeDate: '',
			endDate: '',
			assignto: '',
			custEmail: '',
			custPwd: ''
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
		const {
			compID,
			custName,
			custUsername,
			custPhn,
			custAdd,
			custEmail,
			dob,
			custPwd,
			custStatus,
			joinDate,
			activeDate,
			endDate,
			city,
			state,
			status,
			pincode, 
			assignto
		} = this.state;
		try {
			const res = await fetch('http://localhost:8080/addCust', {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					compID,
					custName,
					custUsername,
					custPhn,
					custAdd,
					custEmail,
					dob,
					custPwd,
					custStatus,
					joinDate,
					activeDate,
					endDate,
					city,
					state,
					status,
					pincode, 
					assignto
				}),
      });
			const result = await res.json();
			console.log(result);
			alert('Customer Registered!');

			this.setState ({
				custName: '',
				custUsername: '',
				custEmail: '',
				custPwd: '',
				dob: '',
				custAdd: '',
				city: '',
				state: '',
				pincode: '',
				custPhn: '',
				custStatus: 'active',
				joinDate: '',
				activeDate: '',
				endDate: '',
				assignTo: ''
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
          	<Card.Title>Customer Registration</Card.Title>
            <Form>
							<Form.Group as={Row}>
								<Form.Label as={Col} md={3}>Company ID</Form.Label>
								<Col md={4}>
									<Form.Control value={this.state.value} style={{cursor: "not-allowed"}} placeholder={this.props.user.compID} readOnly />
								</Col>
							</Form.Group>
              <Form.Group as={Row}>
                <Form.Label as={Col} md={3}>Full Name</Form.Label>
								<Col md={9}>
                	<Form.Control value={this.state.value} name="custName" onChange={this.handleInputChange} type="text" placeholder="First Middle Last Name" />
                </Col>
              </Form.Group>
							<Form.Group as={Row}>
                <Form.Label as={Col} md={3}>User Name</Form.Label>
								<Col md={9}>
                	<Form.Control value={this.state.value} name="custUsername" onChange={this.handleInputChange} type="text" placeholder="Enter Username" />
                </Col>
              </Form.Group>
							<Form.Group as={Row}>
                <Form.Label as={Col} md={3}>Email</Form.Label>
                <InputGroup as={Col} md={9}>
									<InputGroup.Prepend>
        					  <InputGroup.Text>@</InputGroup.Text>
        					</InputGroup.Prepend>
                	<Form.Control value={this.state.value} type="email" name="custEmail" onChange={this.handleInputChange} placeholder="Enter Email" />
                </InputGroup>
              </Form.Group>
							<Form.Group as={Row}>
                <Form.Label as={Col} md={3}>Date of Birth</Form.Label>
								<Col md={9}>
                	<Form.Control value={this.state.value} name="dob" onChange={this.handleInputChange} type="date" />
                </Col>
              </Form.Group>
							<Form.Group as={Row}>
                <Form.Label as={Col} md={3}>Phone Number</Form.Label>
              	<Col md={9}>
              		<Form.Control value={this.state.value} type="tel" name="custPhn" onChange={this.handleInputChange} placeholder="Enter Mobile number" />
              	</Col>
              </Form.Group>
							<Form.Group as={Row}>
								<Form.Label as={Col} md={3}>Address</Form.Label>
								<Col md={9}>
									<Form.Control value={this.state.value} type="text" name="custAdd" onChange={this.handleInputChange} placeholder="Enter Address" />
								</Col>
								<br />
								<br />
								<Col md={3}></Col>
								<Col md={3}>
									<Form.Control value={this.state.value} type="text" name="city" onChange={this.handleInputChange} placeholder="City" />
								</Col>
								<Col md={3}>
									<Form.Control value={this.state.value} type="text" name="state" onChange={this.handleInputChange} placeholder="State" />
								</Col>
								<Col md={3}>
									<Form.Control value={this.state.value} type="number" min="100000" max="999999" name="pincode" onChange={this.handleInputChange} placeholder="Pincode" />
								</Col>
							</Form.Group>
							<Form.Group as={Row}>
								<Form.Label as={Col} md={3}>Join/Active/End Date</Form.Label>
								<Col md={3}>
									<Form.Control value={this.state.value} type="date" name="joinDate" onChange={this.handleInputChange} placeholder="Join Date" />
								</Col>
								<Col md={3}>
									<Form.Control value={this.state.value} type="date" name="activeDate" onChange={this.handleInputChange} placeholder="Active Date" />
								</Col>
								<Col md={3}>
									<Form.Control value={this.state.value} type="date" name="endDate" onChange={this.handleInputChange} placeholder="End Date" />
								</Col>
							</Form.Group>
							<Form.Group as={Row}>
								<Form.Label as={Col} md={3}>Status</Form.Label>
								<Col md={4}>
									<Form.Control value={this.state.value} as="select" name="custStatus" onChange={this.handleInputChange} defaultValue="active">
										<option value="active">Active</option>
										<option value="inactive">Inactive</option>
										<option value="suspended">Suspended</option>
										<option value="deleted">Deleted</option>
									</Form.Control>
								</Col>
							</Form.Group>
							<Form.Group as={Row}>
								<Form.Label as={Col} md={3}>Assign To</Form.Label>
								<Col md={4}>
									<Form.Control value={this.state.value} as="select" name="assignto" onChange={this.handleInputChange} defaultValue="admin">
										<option value="admin">Admin</option>
										<option value="employee">Employee</option>
									</Form.Control>
								</Col>
							</Form.Group>
              <Form.Group as={Row}>
                <Form.Label as={Col} md={3}>Password</Form.Label>
								<Col md={9}>
                	<Form.Control value={this.state.value} name="custPwd" onChange={this.handleInputChange} type="password" placeholder="Enter Password" />
                </Col>
              </Form.Group>
              <Button onClick={this.handleSubmit} type="submit" variant="dark">Register Customer</Button>
							<br />
							<br />
              <Button type="reset">Reset Input</Button>
            </Form>
          </Card.Body>
        </Card>
			</>
		);
	};

}


export default Customer;