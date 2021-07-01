import { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import { withRouter } from 'react-router-dom';

class UpdateCompany extends Component {
  
	constructor(props) {
		super(props);

		this.state = {
			_id: this.props.user._id,
			compID: this.props.user.compID,
			compName: this.props.user.compName,
			compTitle: this.props.user.compTitle,
			compAdd: this.props.user.compAdd,
			compPhn: this.props.user.compPhn,
			website: this.props.user.website,
			compEmail: this.props.user.compEmail
			// pwd: this.props.user.pwd
			// user: this.props.user
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleReset = this.handleReset.bind(this);

	}

	handleChange(e) {
		const name = e.target.name,
					value = e.target.value;
		this.setState({[name]: value});
		// console.log(`${name}: ${value}`);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.updateDetails();
	}

	async updateDetails() {
		const { compName, compTitle, compAdd, compPhn, website } = this.state;
		try {
			const res = await fetch(`http://localhost:8080/profile/${this.state._id}/updateCompany`, {
				method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ compName, compTitle, compAdd, compPhn, website })
			});
			
			const result = await res.json();
			console.log(result);
			this.props.history.push(`/profile/${this.state.compID}`);

		}
		catch(err) {
			console.log(err);
		}
	}

	handleReset() {
		this.setState(() => ({
			compName: this.props.user.compName,
			compTitle: this.props.user.compTitle,
			compAdd: this.props.user.compAdd,
			compPhn: this.props.user.compPhn,
			website: this.props.user.website,
			pwd: this.props.user.pwd
		}));
		console.log(this.state);
	}

	render() {
		
		return(
			<>
				<Container>
					<Row>
						<Col>
							<Form>
								<h3>Update Company Details</h3>
								<Form.Group as={Row}>
									<Form.Label className="align-self-center" as={Col} md={3}>Company ID</Form.Label>
									<Col md={4}>
										<Form.Control style={{cursor: 'not-allowed'}} placeholder={this.state._id} readOnly />
									</Col>
									<Col md={1} /> 
									<Col md={4}>
										<Form.Control style={{cursor: 'not-allowed'}} placeholder={this.state.compID} readOnly />
									</Col>
								</Form.Group>
								<Form.Group as={Row}>
									<Form.Label className="align-self-center" as={Col} md={3}>Name</Form.Label>
									<Col md={9}>
										<Form.Control name="compName" type="text" value={this.state.compName} onChange={this.handleChange} />
									</Col>
								</Form.Group>
								<Form.Group as={Row}>
									<Form.Label className="align-self-center" as={Col} md={3}>Title</Form.Label>
              		<Col md={9}>
										<Form.Control name="compTitle" type="text" value={this.state.compTitle} onChange={this.handleChange} />
									</Col>
								</Form.Group>
								<Form.Group as={Row}>
									<Form.Label className="align-self-center" as={Col} md={3}>Email</Form.Label>
              		<Col md={9}>
										<Form.Control style={{cursor: 'not-allowed'}} placeholder={this.state.compEmail} readOnly />
									</Col>
								</Form.Group>
								<Form.Group as={Row}>
									<Form.Label className="align-self-center" as={Col} md={3}>Address</Form.Label>
              		<Col md={9}>
										<Form.Control name="compAdd" type="text" value={this.state.compAdd} onChange={this.handleChange} />
									</Col>
								</Form.Group>
								<Form.Group as={Row}>
									<Form.Label className="align-self-center" as={Col} md={3}>Phone No.</Form.Label>
              		<Col md={9}>
										<Form.Control name="compPhn" type="tel" value={this.state.compPhn} onChange={this.handleChange} />
									</Col>
								</Form.Group>
								<Form.Group as={Row}>
									<Form.Label className="align-self-center" as={Col} md={3}>Website</Form.Label>
              		<Col md={9}>
										<Form.Control name="website" type="url" value={this.state.website} onChange={this.handleChange} />
									</Col>
								</Form.Group>
								<Form.Group className="text-right">
									<Button variant="danger" className="mr-2" onClick={this.handleReset}>Cancel</Button>
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

export default UpdateCompany;