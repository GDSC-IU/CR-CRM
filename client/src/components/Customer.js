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
			custEmail: '',
			custPwd: '',
			dob: '',
			custAdd: '',
			city: '',
			state: '',
			pincode: '',
			custPhn: '',
			custStatus: '',
			joinDate: '',
			activeDate: '',
			endDate: '',
			assignTo: ''
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleReset = this.handleReset.bind(this);

	}

	handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});
    // if (name === 'compEmail')
    //   this.setState({email: value});
    // else if (name === 'compPhn')
    //   this.setState({phone: value});
    // console.log(`${name}: ${value}`);
  }

	handleSubmit(e) {
		e.preventDefault();
		this.sendData();
	}

	async sendData() {
		const {} = this.state;
		try {
			const res = await fetch('http://localhost:8080/add-Cust', {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({}),
      });
			const result = await res.json();
			console.log(result);
			alert('Customer Registered!');
			
      this.setState ({
        
      });
		}
		catch(err) {
			console.log(err);
		}
	}

	handleReset(e) {
		e.preventDefault();
		this.setState({
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
			custStatus: '',
			joinDate: '',
			activeDate: '',
			endDate: '',
			assignTo: '',
			custStatus: ''
		});
	}

	render() {

		return (
			<>
				<Card>
          <Card.Body>
          	<Card.Title className="h2">Customer Registration</Card.Title>
            <Form>
							<Form.Group as={Row}>
								<Form.Label as={Col} md={3}>Company ID</Form.Label>
								<Col md={9}>
									<Form.Control style={{cursor: "not-allowed"}} placeholder={this.props.user.compID} readOnly />
								</Col>
							</Form.Group>
              <Form.Group as={Row}>
                <Form.Label as={Col} md={3}>Full Name</Form.Label>
								<Col md={9}>
                	<Form.Control name="custName" onChange={this.handleInputChange} type="text" placeholder="First name  Middle Name  Last Name" />
                </Col>
              </Form.Group>
							<Form.Group as={Row}>
                <Form.Label as={Col} md={3}>User Name</Form.Label>
								<Col md={9}>
                	<Form.Control name="custUsername" onChange={this.handleInputChange} type="text" placeholder="Enter Username" />
                </Col>
              </Form.Group>
							<Form.Group as={Row}>
                <Form.Label as={Col} md={3}>Date of Birth</Form.Label>
								<Col md={9}>
                	<Form.Control name="dob" onChange={this.handleInputChange} type="date" />
                </Col>
              </Form.Group>
							<Form.Group as={Row}>
                <Form.Label as={Col} md={3}>Phone Number</Form.Label>
              	<Col md={9}>
              		<Form.Control type="tel" name="custPhn" onChange={this.handleInputChange} placeholder="Enter Mobile number" />
              	</Col>
              </Form.Group>
							<Form.Group as={Row}>
								<Form.Label as={Col} md={3}>Address</Form.Label>
								<Col md={9}>
									<Form.Control type="text" name="custAdd" onChange={this.handleInputChange} placeholder="Enter Address" />
								</Col>
								<br />
								<br />
								<Col md={3}></Col>
								<Col md={3}>
									<Form.Control type="text" name="city" onChange={this.handleInputChange} placeholder="City" />
								</Col>
								<Col md={3}>
									<Form.Control type="text" name="state" onChange={this.handleInputChange} placeholder="State" />
								</Col>
								<Col md={3}>
									<Form.Control type="number" min="100000" max="999999" name="pincode" onChange={this.handleInputChange} placeholder="Pincode" />
								</Col>
							</Form.Group>
							<Form.Group as={Row}>
								<Form.Label as={Col} md={3}>Join/Active/End Date</Form.Label>
								<Col md={3}>
									<Form.Control type="date" name="joinDate" onChange={this.handleInputChange} placeholder="Join Date" />
								</Col>
								<Col md={3}>
									<Form.Control type="date" name="activeDate" onChange={this.handleInputChange} placeholder="Active Date" />
								</Col>
								<Col md={3}>
									<Form.Control type="date" name="endDate" onChange={this.handleInputChange} placeholder="End Date" />
								</Col>
							</Form.Group>
							<Form.Group as={Row}>
								<Form.Label as={Col} md={3}>Status</Form.Label>
								<Col md={9}>	
									<Form.Control as="select" name="custStatus" onChange={this.handleInputChange} defaultValue="active">
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
                	<Form.Control type="email" name="custEmail" onChange={this.handleInputChange} placeholder="Enter Email" />
                </InputGroup>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label as={Col} md={3}>Password</Form.Label>
								<Col md={9}>
                	<Form.Control name="custPwd" onChange={this.handleInputChange} type="text" placeholder="Enter Password" />
                </Col>
              </Form.Group>
              <Button onClick={this.handleSubmit} type="submit" variant="dark">Register Customer</Button>
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


export default Customer;