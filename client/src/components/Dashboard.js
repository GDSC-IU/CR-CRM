import React from 'react';
import { Container, Row, Col, Table, Button, OverlayTrigger, Tooltip, Form, Modal } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import Chart from './Chart';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      customers: [],
      compID: this.props.user.compID,
      delModalShow: false,
      msgTitle: '',
      msg: '',
      custId: '',
      msgDate: new Date()
    }

    this.modalHide = this.modalHide.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.send = this.send.bind(this);

  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});
  }

  modalHide () {
    this.setState({
      delModalShow: false
    })
  }

  componentDidMount() {
    this.loadData();
    // console.log(this.state.compID + " " + this.props.user.compID);
  }

  async loadData() {
    // console.log(this.state);
    try {
      const res = await fetch(`http://localhost:8080/profile/${this.state.compID}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      });
      const result = await res.json();
      // console.log(result);
      this.setState({customers: result});
    }
    catch(err) {
      console.log(err);
    }
  }

  send(e) {
    e.preventDefault();
    this.sendMsg();
  }

  async sendMsg() {
    // e.preventDefault();
    const { custId, compID, msgTitle, msg, msgDate } = this.state;
    // console.log('before try catch');
    try {
      const res = await fetch(`http://localhost:8080/profile/${this.state.compID}/sendMsg`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ custId, compID, msgTitle, msg, msgDate }),
      });
      const result = await res.json();
      console.log(result);
      this.setState(() => ({
        msg: '',
        msgTitle: '',
        delModalShow: false
      }));
    }
    catch(err) {
      console.log(err);
    }
  }

  async deleteCustomer(custID) {
    try {
      await fetch(`http://localhost:8080/profile/${this.props.user.compID}/delCust/${custID}`, {
        method: 'DELETE',
        header: {
          'Content-Type': 'application/json'
        },
      });
      // alert('Customer Deleted!!');
      this.loadData();
    }
    catch (err) {
      console.log(err);
    }
  }

  render() {
    let num = 0;
    
    let customers = [];
    try {
      customers = this.state.customers.map((customer) => (
        <tr key={customer.custID}>
          <td>{++num}</td>
          <td>{customer.custName}</td>
          <td>{customer.custUsername}</td>
          <td>{customer.custStatus}</td>
          <td>{customer.custPhn}</td>
          <td>{customer.custEmail}</td>
          <td>
            <OverlayTrigger key="msg-top" placement="top" overlay={
              <Tooltip id={`msg-tooltip-top`}>
                Message
              </Tooltip>
            }>  
              <Button onClick={() => this.setState({delModalShow: true, custId: customer.custID})}>💬</Button>
            </OverlayTrigger>
          </td>
          <td>
            <OverlayTrigger key="edit-top" placement="top" overlay={
              <Tooltip id={`edit-tooltip-top`}>
                Edit
              </Tooltip>
            }>  
              <Button variant="success">🖊️</Button>
            </OverlayTrigger>
          </td>
          <td>
            <OverlayTrigger key="del-top" placement="top" overlay={
              <Tooltip id={`del-tooltip-top`}>
                Delete
              </Tooltip>
            }>  
              <Button variant="danger" onClick={() => this.deleteCustomer(customer.custID)}>🗑️</Button>
            </OverlayTrigger>
          </td>
        </tr>
      ));
    }
    catch (err) {
      console.log(err);
    }

    return(
      <>
        <Modal show={this.state.delModalShow} size="md" centered onHide={this.modalHide}>
          <Modal.Header style={{backgroundColor: "#007bff", color: "white"}} closeButton>
            <Modal.Title>Send Message</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Customer ID</Form.Label>
                <Form.Control value={this.state.custId} style={{cursor: "not-allowed"}} readOnly />
              </Form.Group>
              <Form.Group>
                <Form.Label>Message Title</Form.Label>
              	<Form.Control value={this.state.value} name="msgTitle" onChange={this.handleInputChange} type="text" placeholder="Title" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control name="msg" value={this.state.value} onChange={this.handleInputChange} as="textarea" rows={7} placeholder="Enter Your message..." />
              </Form.Group>
              <Form.Group className="text-right">
                <Button style={{marginRight: '1rem'}} variant="secondary" onClick={this.modalHide}>No</Button>
                <Button variant="success" type="submit" onClick={this.send}><Icon.CursorFill size={23} /></Button>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>

        {this.state.compID === undefined? <Redirect to='/login' />: console.log(this.state)}
      
        <Container>
          <Row>
            <Col>
              <Chart />
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <h4>Total Employees : 1</h4>
            </Col>
            <Col md={4}>
              <h4>Total Customer : {this.state.customers.length}</h4>
            </Col>
            <Col md={4}>
              <h4>Total Messages : 0</h4>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Table striped bordered responsive hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Status</th>
                  <th>Phone No</th>
                  <th>Email</th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {customers}
              </tbody>
            </Table>
          </Row>
          <Row>
            <Col style={{textAlign: "right"}}>
            <a href="/profile/" >View More</a>
            </Col>
          </Row>
          <Row className="mt-5">  
            <Col md={3} className="view text-secondary">
              <h3 className="">2.7K</h3>
              <p className="leading-relaxed">Number of people visited website</p>
            </Col>
            <Col md={3} className="view text-secondary">
              <h3 className="">1.8K</h3>
              <p className="leading-relaxed">Number of satisfied customer</p>
            </Col>
            <Col md={3} className="view text-secondary">
              <h3 className="">35</h3>
              <p className="leading-relaxed">Number of projects running</p>
            </Col>
            <Col md={3} className="view text-secondary">
              <h3 className="">4</h3>
              <p className="leading-relaxed">Awards</p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Dashboard;