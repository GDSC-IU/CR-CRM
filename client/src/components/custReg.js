import React, { Component } from 'react';
// import { Switch, Route, Link } from "react-router-dom";
import { Form, Button, Card, Col, Row } from 'react-bootstrap';

class Customer extends Component {
  
	constructor(props) {
		super(props);

		this.state = {
			
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleReset = this.handleReset.bind(this);

	}

	handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});
    if (name === 'compEmail')
      this.setState({email: value});
    else if (name === 'compPhn')
      this.setState({phone: value});
    // console.log(`${name}: ${value}`);
  }

	handleSubmit(e) {
		e.preventDefault();
		this.sendData();
	}

	async sendData() {
		const {compName, compTitle, compAdd, compPhn, website, compEmail, status} = this.state;
		try {
			const res = await fetch('http://localhost:8080/comp', {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({compName, compTitle, compAdd, compPhn, website, compEmail, status}),
      });
			const result = await res.json();
			console.log(result);
			alert('Company Registered!');

      const { roleID, firstName, lastName, userName, pwd, email, phone } = this.state;
      const res2 = await fetch('http://localhost:8080/emp', {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({compID: result.compID, roleID, firstName, lastName, userName, pwd, email, phone, status}),
      });
      const result2 = await res2.json();
      console.log(result2);
      alert('Admin Created!!');
      this.setState ({
        compName: '',
        compTitle: '',
        compAdd: '',
        compPhn: '',
        website: '',
        compEmail: '',
        pwd: '',
        email: '',
        phone: ''
      });
		}
		catch(err) {
			console.log(err);
		}
	}

	handleReset() {
		this.setState({

		});
	}

	render() {

		return (
			<>
				<Card className="card">
          <Card.Body className="card-body">
          	<Card.Title>Customer Registration</Card.Title>
            <Form>
              <Form.Group className="row">
                <Form.Label as={Col} md={3}>Full Name</Form.Label>
                <Col md={4}>
                	<Form.Control name="" type="text" placeholder="First Name" />
                </Col>
								<br />
								<Col md={1}></Col>
								<br />
								<Col md={4}>
                	<Form.Control name="" type="text" placeholder="Last Name" />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <label className="col-sm-3 col-form-label">Email</label>
                <div className="col-sm-9">
                	<Form.Control type="email" className="form-control" id="exampleInputEmail2" placeholder="Email" />
                </div>
              </Form.Group>
              <Form.Group className="row">
                <label className="col-sm-3 col-form-label">Mobile</label>
              	<div className="col-sm-9">
              		<Form.Control type="text" className="form-control" id="exampleInputMobile" placeholder="Mobile number" />
              	</div>
              </Form.Group>
              <Form.Group className="row">
                <label className="col-sm-3 col-form-label">Password</label>
                <div className="col-sm-9">
                	<Form.Control type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" />
                </div>
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