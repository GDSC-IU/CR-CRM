import React from 'react';
import { Container, Row, Col, Navbar, Nav, Modal, Button} from 'react-bootstrap';
import '../style/sidebar.css';
import { Switch, Route, Link } from 'react-router-dom';
import Employee from './Employee';
import Customer from './Customer';
import panda from '../assets/panda.png';
import Dashboard from './Dashboard';
import Welcome from './Welcome';


class Sidebar extends React.Component {

  constructor(props) {
    super (props);

		this.state = {
      user: '',
      compID: this.props.match.params.compID,
      delModalShow: false
    }
    
    this.modalHide = this.modalHide.bind(this);
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
      // console.log(this.state);
    }
    catch (err) {
      console.log(err);
    }    
  }

  modalHide () {
    this.setState({
      delModalShow: false
    })
  }

  async deleteCompany(compID) {
    // this.setState({delModalShow: false});
    try {
      await fetch(`http://localhost:8080/profile/${compID}`, {
        method: 'DELETE',
        header: {'Content-Type': 'application/json'}
      });
      alert('Company Deleted!!');
      this.props.history.push('/register');
    }
    catch (err) {
      console.log(err);
    }
  }

  render() {

    return (
      <>
        <Modal show={this.state.delModalShow} size="lg" centered onHide={this.modalHide}>
          <Modal.Header style={{backgroundColor: "#007bff", color: "white"}} closeButton>
            <Modal.Title>Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              This change can't be reversed.
              <br />
              All your data will be wiped out.
              <br />
              <br />
              <strong>Are you sure you want to delete?</strong>
            </p>
          </Modal.Body>
          <Modal.Footer style={{backgroundColor: "#007bff", color: "white"}}>
            <Button style={{width: "12%"}} variant="secondary" onClick={this.modalHide}>No</Button>
            <Button style={{width: "12%"}} variant="danger" onClick={() => this.deleteCompany(this.state.compID)}>Confirm</Button>
          </Modal.Footer>
        </Modal>

        <Container fluid>
          <Row>
            <Col sm={2} variant="dark" className="bg-primary m-0" id="sidebar-wrapper">
              <Navbar bg="primary" className="flex-column" variant="dark">
								<Nav className="flex-column sidebar" variant="dark">
									<Nav.Item style={{marginBottom: "1rem", textAlign: "center"}}>
										<Link className="navbar-brand space" style={{marginRight: "0px", width: "100%"}} to="/">
                      <img src={panda} alt="Logo" style={{borderRadius: "50%", height: "2rem"}} />
                      <span style={{marginLeft: "3px"}}>CR-CRM</span>
                    </Link>
									</Nav.Item>
									<Nav.Item>
										<Link className="navbar-brand space" to={`/profile/${this.props.match.params.compID}/dashboard`} style={{marginRight: "0px", border: ".5px solid #353935", width: "100%", borderRadius: "3px", padding: "15px 15px"}}>{this.state.user.compName}</Link>
									</Nav.Item>
									<Nav.Item>
										<Link className="nav-item space" to={`/profile/${this.props.match.params.compID}/cust-Reg`}>Add Customer &#9755;</Link>
									</Nav.Item>
									<Nav.Item>
										<Link className="nav-item space" to={`/profile/${this.props.match.params.compID}/emp-Reg`}>Add Employee &#9755;</Link>
									</Nav.Item>
									<Nav.Item>
										<Link className="nav-item space" to="/">Update Details &#9755;</Link>
									</Nav.Item>
									<Nav.Item>
										<Link className="nav-item space" to="/login">Logout  &#9755;</Link>
									</Nav.Item>
									<Nav.Item>
										<Button className="nav-item space" onClick={() => this.setState({delModalShow: true})}>Delete Account  &#9755;</Button>
									</Nav.Item>
								</Nav>
							</Navbar>
            </Col>
            <Col  sm={10} className="inner-form" id="page-content-wrapper">
              <Switch>
                <Route exact path={`/profile/${this.props.match.params.compID}`} render={() => <Welcome id={this.props.match.params.compID} />} />
                <Route path={`/profile/${this.props.match.params.compID}/dashboard`} render={() => <Dashboard user={this.state.user} />} />
                <Route path={`/profile/${this.props.match.params.compID}/cust-Reg`}
                  render={() => <Customer user={this.state.user} />} 
                />
                <Route path={`/profile/${this.props.match.params.compID}/emp-Reg`}
                  render={() => <Employee user={this.state.user} />} 
                />
                {/* <Route path={``} component={} /> */}
              </Switch>
            </Col> 
          </Row>
        </Container>
      </>
    );
  };
}

export default Sidebar;