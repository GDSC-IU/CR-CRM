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
    // console.log(this.props.user.compID);
    try {
      const res = await fetch(`http://localhost:8080/profile/${this.state.compID}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      });
      const result = await res.json();
      console.log(result);
      this.setState({customers: result});
    }
    catch(err) {
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
          <td><Button>Message</Button></td>
          <td><Button>Edit</Button></td>
          <td><Button>Delete</Button></td>
      </tr>
    ));

    return(
      <>
        <Container>
          <Row>
            <Col md={4}>
              <h4>Number of Employees : 30</h4>
            </Col>
            <Col md={4}>
              <h4>Number of Customer : {this.state.customers.length}</h4>
            </Col>
            <Col md={4}>
              <h4>Number of Messages : 30</h4>
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
                {/* <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>12345</td>
                  <td>abc</td>
                  <td><Button>Message</Button></td>
                  <td><Button>Edit</Button></td>
                  <td><Button>Delete</Button></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>12345</td>
                  <td>abc</td>
                  <td><Button>Message</Button></td>
                  <td><Button>Edit</Button></td>
                  <td><Button>Delete</Button></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                  <td>12345</td>
                  <td>abc</td>
                  <td><Button>Message</Button></td>
                  <td><Button>Edit</Button></td>
                  <td><Button>Delete</Button></td>
                </tr> */}
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