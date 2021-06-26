import React from 'react';
import { Container, Row, Col, Table, Button, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import office from '../assets/office_env.jpg';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      customers: [],
      compID: this.props.user.compID
    }
  }

  componentDidMount() {
    this.loadData();
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

  async deleteCustomer(custID) {
    try {
      await fetch(`http://localhost:8080/profile/${this.props.user.compID}/delCust/${custID}`, {
        method: 'DELETE',
        header: {
          'Content-Type': 'application/json'
        },
      });
      alert('Customer Deleted!!');
      // this.setState({ state: this.state});
      window.location.reload(false);
    }
    catch (err) {
      console.log(err);
    }
  }

  render() {
    let num = 0;
    const customers = this.state.customers.map((customer) => (
        <tr key={customer.custID}>
          <td>{++num}</td>
          <td>{customer.custName}</td>
          <td>{customer.custUsername}</td>
          <td>{customer.custStatus}</td>
          <td>{customer.custPhn}</td>
          <td>{customer.custEmail}</td>
          <td>
            <OverlayTrigger key="top" placement="top" overlay={
              <Tooltip id={`msg-tooltip-top`}>
                Message
              </Tooltip>
            }>  
              <Button>💬</Button>
            </OverlayTrigger>
          </td>
          <td>
            <OverlayTrigger key="top" placement="top" overlay={
              <Tooltip id={`edit-tooltip-top`}>
                Edit
              </Tooltip>
            }>  
              <Button variant="success">🖊️</Button>
            </OverlayTrigger>
          </td>
          <td>
            <OverlayTrigger key="top" placement="top" overlay={
              <Tooltip id={`del-tooltip-top`}>
                Delete
              </Tooltip>
            }>  
              <Button variant="danger" onClick={() => this.deleteCustomer(customer.custID)}>🗑️</Button>
            </OverlayTrigger>
          </td>
      </tr>
    ));

    return(
      <>
        <Container>
          <Row>
            <Col className="main">
              <Image rounded fluid src={office} alt='office-img' />
              <div className="info">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
               took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
               with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
               software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
              </div>
            </Col>
          </Row>
          <Row>

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
            <a href="/" >View More</a>
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