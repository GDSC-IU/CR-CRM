import React from 'react';
import { Container, Row, Col, Navbar, Nav} from 'react-bootstrap';
import '../style/sidebar.css';
import { Link } from 'react-router-dom';
import Employee from './EmpReg';
import Customer from './CustReg';

class Dashboard extends React.Component {

  constructor(props) {
      super (props);
  
			this.state = {
          user: '',
          compID: this.props.match.params.compID
      }
  
	}

  componentDidMount() {
    this.getUser();
  }

  async getUser() {
    const { compID } = this.state;
    try {
      const res = await fetch(`http://localhost:8080/data-retrieve`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({compID})
      });
      const result = await res.json();
      // console.log(result);
      this.setState({user: result});
      console.log(this.state);
    }
    catch (err) {
      console.log(err);
    }    
  }

  render() {

		const myStyle = {
			height: "5rem",
			width: "100%"
			
		};

    return (
      <>
        <Container fluid>
          <Row>
            <Col sm={2} variant="dark" className="bg-primary m-0" id="sidebar-wrapper">
              <Navbar bg="primary" className="flex-column" variant="dark">
								<Nav className="flex-column sidebar" variant="dark">
									<Nav.Item style={{marginBottom: "1rem", textAlign: "center"}}>
										<Link className="navbar-brand" style={{marginRight: "0px"}} to="/">CR-CRM</Link>
									</Nav.Item>
									<Nav.Item>
										<span className="navbar-brand" style={{marginRight: "0px"}}>{this.state.user.compName}</span>
									</Nav.Item>
									<Nav.Item style={{myStyle}}>
										<Link className="nav-item" style={{color: "white"}} to="/">Add Customer</Link>
									</Nav.Item>
									<Nav.Item style={{myStyle}}>
										<Link className="nav-item" style={{color: "white"}} to="/">Add Employee</Link>
									</Nav.Item>
									<Nav.Item style={{myStyle}}>
										<Link className="nav-item" style={{color: "white"}} to="/">Update Details</Link>
									</Nav.Item>
									<Nav.Item style={{myStyle}}>
										<Link className="nav-item" style={{color: "white"}} to="/">Logout</Link>
									</Nav.Item>
									<Nav.Item style={{myStyle}}>
										<Link className="nav-item" style={{color: "white"}} to="/">Delete Account</Link>
									</Nav.Item>
								</Nav>
							</Navbar>
            </Col>
            <Col  sm={10} id="page-content-wrapper">
              <Customer />
            </Col> 
          </Row>
        </Container>

      </>
    );
  };
}

export default Dashboard;