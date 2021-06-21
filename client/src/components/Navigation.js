import { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Navigation extends Component {

    render() {
        return (
          <div>
            <Navbar bg="primary" variant="dark">
          		<Container>
            		<Link className="navbar-brand" to={"/"}>CR-CRM</Link>
            		<div className="collapse navbar-collapse">
              		<ul className="navbar-nav ml-auto">
                		<li className="nav-item">
                  			<Link className="nav-link" to={"/login"}>Login</Link>
                		</li>
                		<li className="nav-item">
                  			<Link className="nav-link" to={"/register"}>Register</Link>
                		</li>
              		</ul>
            		</div>
          		</Container>
        		</Navbar>
          </div>
        );
    };
}

export default Navigation;