import { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

class UpdateCompany extends Component {
  
	constructor(props) {
		super(props);

		this.state = {

		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleChange() {

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
								<Form.Group>
									<Button variant="success">Save Changes</Button>
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