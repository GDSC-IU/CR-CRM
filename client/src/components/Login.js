import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

class Login extends React.Component {



    render() {
        return (
          <div>  
            <Navbar bg="primary" variant="dark">
              <Navbar.Brand href="#home">CR-CRM</Navbar.Brand>
              <Nav className="">
                <Nav.Link href="#home">Sign In</Nav.Link>
                <Nav.Link href="#features">Sign Up</Nav.Link>
              </Nav>
            </Navbar>
            <Form action="/" method="POST">
            <h3>Log In using Company Id</h3>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control name="uname" type="email" value={/*this.state.uname*/} onChange={this.handleInputChange} placeholder="Enter Company Mail Id" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="pwd" type="password" value={/*this.state.pwd*/} onChange={this.handleInputChange} placeholder="Enter password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
                <Button onClick={/*this.handleSubmit*/} variant="dark" type="submit" size="lg" block>
                    Sign In
                </Button>
                <p className="forgot-password text-rigth">
                    Forgot <a href="/">password?</a>
                </p>
                <p className="forgot-password text-right">
                    Don't have an account? <Link to={"/sign-up"}>Sign Up</Link>
                </p>
            </Form>
          </div>
        );
    };
}

export default Login;