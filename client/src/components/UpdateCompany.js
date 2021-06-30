import { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

class UpdateCompany extends Component {
  
	constructor(props) {
		super(props);

		this.state = {
			company: this.props.user
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleChange(e) {
		const name = e.target.name,
					value = e.target.value;
		this.setState({[name]: value});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.updateDetails();
	}

	async updateDetails() {
		const {} = this.state;
		try {
			const res = await fetch(``, {
				method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({}),
			});
			
			const result = await res.json();
			console.log(result);

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
								<h3>Update Company Details</h3>
								<Form.Group>
									
								</Form.Group>
								<Form.Group>
									
								</Form.Group>
								<Form.Group>
									
								</Form.Group>
								<Form.Group>
									
								</Form.Group>
								<Form.Group className="text-right">
									<Button variant="danger" className="mr-2">Cancel</Button>
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