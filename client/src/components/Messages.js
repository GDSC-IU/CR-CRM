import React from 'react';
import { Accordion, Card, Col, Container, Row } from 'react-bootstrap';
import {} from 'react-bootstrap-icons';

class Messages extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			custID: this.props.custID,
			messages: []
		}

	}

	componentDidMount() {
		this.loadData();
	}

	async loadData() {
		try {
      const res = await fetch(`http://localhost:8080/messages/${this.state.custID}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      });
      const result = await res.json();
      console.log(result);
      this.setState({messages: result});
    }
    catch(err) {
      console.log(err);
    }
	}

	render() {
		// console.log(this.state.messages.length === 0);
		
		let msgGrid;
		let num=1;
		try {
			msgGrid = this.state.messages.map((msg) => (
				<Card>
					<Accordion.Toggle as={Card.Header} className="py-2" eventKey={num}>
						{msg.msgTitle}
					</Accordion.Toggle>
					<Accordion.Collapse eventKey={num}>
						<Card.Body className="py-1">{msg.msg}</Card.Body>
					</Accordion.Collapse>
					{console.log(++num)}
				</Card>
			));
		}
		catch(err) {
			console.log(err);
		}

		if (this.state.messages.length === 0) {
			return(
				<>
					<Container>
						<Row>
							<Col className="font-italic text-muted text-center">
								No Messages to Display.
							</Col>
						</Row>
					</Container>
				</>
			);
		}
		else
			return(
				<>
					<Container>
						<Row>
							<Col className="px-0">
								<Accordion>
									{msgGrid}
								</Accordion>
							</Col>
						</Row>
					</Container>
				</>
			);
	}
}

export default Messages;