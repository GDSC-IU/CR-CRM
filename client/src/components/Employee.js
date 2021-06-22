import React, { Component } from 'react';
// import { Switch, Route, Link } from "react-router-dom";
// import Login from './Login';
import { Form, Button, Card } from 'react-bootstrap';

class Employee extends Component {
  
	render() {

		return (
			<>
				<Card>
					<Card.Body>
						<Card.Title>Employee Registration</Card.Title>
						<Form>
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


export default Employee;