import { Component } from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';

class UpdateCustomer extends Component {
  
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
								
							</Form>
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}

export default UpdateCustomer;