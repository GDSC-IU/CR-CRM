import React from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';

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
          <td><Button>💬</Button></td>
          <td><Button variant="success">🖊️</Button></td>
          <td><Button variant="danger" onClick={() => this.deleteCustomer(customer.custID)}>🗑️</Button></td>
      </tr>
    ));

    return(
      <>
        <Container>
          <Row>
            <Col md={4}>
              <h4>Total Employees : 30</h4>
            </Col>
            <Col md={4}>
              <h4>Total Customer : {this.state.customers.length}</h4>
            </Col>
            <Col md={4}>
              <h4>Total Messages : 10</h4>
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
          
        </Container>
      </>
    );
  }
}

export default Dashboard;