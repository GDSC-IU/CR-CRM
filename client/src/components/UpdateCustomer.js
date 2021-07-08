import { Component } from 'react';
import { Form, Container, Row, Col, InputGroup, Button } from 'react-bootstrap';

class UpdateCustomer extends Component {
  
	constructor(props) {
		super(props);

		this.state = {
			custID: this.props.garak.custID,
			compID: this.props.garak.compID,
			custName: this.props.garak.custName,
			custUsername: this.props.garak.custUsername,
			custEmail: this.props.garak.custEmail,
			dob: this.props.garak.dob,
			custPhn: this.props.garak.custPhn,
			custAdd: this.props.garak.custAdd,
			city: this.props.garak.city,
			state: this.props.garak.state,
			pincode: this.props.garak.pincode,
			custStatus: this.props.garak.custStatus,
			assignto: this.props.garak.assignto
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleReset = this.handleReset.bind(this);

	}

	handleReset() {
		this.setState(() => ({
			custName: this.props.garak.custName,
			custUsername: this.props.garak.custUsername,
			dob: this.props.garak.dob,
			custPhn: this.props.garak.custPhn,
			custAdd: this.props.garak.custAdd,
			city: this.props.garak.city,
			state: this.props.garak.state,
			pincode: this.props.garak.pincode,
			custStatus: this.props.garak.custStatus,
			assignto: this.props.garak.assignto
		}));
	}

	handleChange(e) {
		const name = e.target.name,
					value = e.target.value;
		this.setState(() => ({
			[name]: value
		}));
		// console.log(`${name}: ${value}`);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.updateDetails();
	}

	async updateDetails() {
		const {
			custName,
			custUsername,
			dob,
			custPhn,
			custAdd,
			city,
			state,
			pincode,
			custStatus,
			assignto
		} = this.state;
		try {
			const res = await fetch(`http://localhost:8080/profile/${this.state.compID}/delCust/${this.props.garak._id}`, {
				method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
					custName,
					custUsername,
					dob,
					custPhn,
					custAdd,
					city,
					state,
					pincode,
					custStatus,
					assignto
				}),
			});
			
			const result = await res.json();
			console.log(result);
			// this.params.loadData();
			alert('Customer Updated');
		}
		catch(err) {
			console.log(err);
		}
	}

	render() {
		
		return(
			<>
				<Container>
					<Row>
						<Col>
							<Form>
								{/* <Form.Group as={Row}>
									<Form.Label className="align-self-center" as={Col} md={3}>Company ID</Form.Label>
									<Col md={3}>
										<Form.Control value={this.state.compID} style={{cursor: "not-allowed"}} readOnly />
									</Col>
									<Form.Label className="align-self-center mt-2 mt-md-0" as={Col} md={3}>Customer ID</Form.Label>
									<Col md={3}>
										<Form.Control value={this.state.custID} style={{cursor: "not-allowed"}} readOnly />
									</Col>
								</Form.Group> */}
								<Form.Group as={Row}>
									<Form.Label className="align-self-center" as={Col} md={3}>Full Name</Form.Label>
									<Col md={9}>
										<Form.Control type="text" name="custName" value={this.state.custName} onChange={this.handleChange} />
									</Col>
								</Form.Group>
								<Form.Group as={Row}>
									<Form.Label className="align-self-center" as={Col} md={3}>Username</Form.Label>
									<Col md={9}>
										<Form.Control type="text" name="custUsername" value={this.state.custUsername} onChange={this.handleChange} />
									</Col>
								</Form.Group>
								<Form.Group as={Row}>
              	  <Form.Label className='align-self-center' as={Col} md={3}>Email</Form.Label>
              	  <InputGroup as={Col} md={9}>
										<InputGroup.Prepend>
        						  <InputGroup.Text>@</InputGroup.Text>
        						</InputGroup.Prepend>
              	  	{/* <Form.Control value={this.state.custEmail} type="email" name="custEmail" onChange={this.handleChange} /> */}
              	  	<Form.Control value={this.state.custEmail} type="email" style={{cursor: 'not-allowed'}} readOnly />
              	  </InputGroup>
              	</Form.Group>
								<Form.Group as={Row}>
									<Form.Label className="align-self-center" as={Col} md={3}>Date of Birth</Form.Label>
									<Col md={9}>
										<Form.Control type="date" name="dob" value={this.state.dob} onChange={this.handleChange} />
									</Col>
								</Form.Group>
								<Form.Group as={Row}>
									<Form.Label className="align-self-center" as={Col} md={3}>Phone Number</Form.Label>
									<Col md={9}>
										<Form.Control type="tel" name="custPhn" value={this.state.custPhn} onChange={this.handleChange} />
									</Col>
								</Form.Group>
								<Form.Group as={Row}>
									<Form.Label className="align-self-center" as={Col} md={3}>Address</Form.Label>
									<Col md={9}>
										<Form.Control type="text" name="custAdd" value={this.state.custAdd} onChange={this.handleChange} />
									</Col>
									<br />
									<br />
									<Col md={3}></Col>
									<Col md={3}>
										<Form.Control value={this.state.city} type="text" name="city" onChange={this.handleChange} />
									</Col>
									<Col md={3}>
										<Form.Control value={this.state.state} type="text" name="state" onChange={this.handleChange} />
									</Col>
									<Col md={3}>
										<Form.Control value={this.state.pincode} type="number" min="100000" max="999999" name="pincode" onChange={this.handleChange} />
									</Col>
								</Form.Group>
								<Form.Group as={Row}>
									<Form.Label className="align-self-center" as={Col} md={3}>Status</Form.Label>
									<Col md={4}>
										<Form.Control value={this.state.custStatus} as="select" name="custStatus" onChange={this.handleChange}>
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
										<Form.Control value={this.state.assignto} as="select" name="assignto" onChange={this.handleChange}>
											<option value="admin">Admin</option>
											<option value="employee">Employee</option>
										</Form.Control>
									</Col>
								</Form.Group>
								<Form.Group className="text-right">
									<Button variant="danger" onClick={this.handleReset} className="mr-2">Cancel</Button>
									<Button variant="success" type="submit" onClick={this.handleSubmit}>Save Changes</Button>
								</Form.Group>
							</Form>
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}

export default UpdateCustomer;