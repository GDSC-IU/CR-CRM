import React from 'react';
import { Accordion, Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import { CheckCircle, PencilSquare, Trash } from 'react-bootstrap-icons';

class Messages extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			custID: this.props.custID,
			messages: [],
			msg: '',
			msgModal: false,
			mid: ''
		}

		// this.loadData();
		this.hideModal = this.hideModal.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.send = this.send.bind(this);

	}

	componentDidMount() {
		this.loadData();
	}

	hideModal() {
		this.setState(() => ({
			msgModal: false
		}))
	}

	handleChange(e) {
		const name = e.target.name,
					value = e.target.value;
		this.setState({[name]: value});
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

	async deleteMsg(msgId) {
    try {
      await fetch(`http://localhost:8080/messages/${msgId}`, {
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

	send(e, msgId) {
		e.preventDefault();
		this.editMsg(this.state.mid);
	}

	async editMsg(msgId) {
		const { msg } = this.state;
		try {
			const res = await fetch(`http://localhost:8080/messages/${msgId}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ msg }), 
			});
			const result = await res.json();
			if (result)
				alert('Message Updated Successfully');
			this.hideModal();
			this.loadData();
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
						<span>{msg.msgTitle}</span>
						<span className="float-right">
							<Button onClick={() => this.setState({msgModal: true, mid: msg._id, msg: msg.msg})} className="rounded-circle btn-outline-info px-1 py-0"><PencilSquare size={15} /></Button>
							<Button onClick={() => this.deleteMsg(msg._id)} className="rounded-circle btn-outline-danger px-1 py-0 ml-2"><Trash size={15} /></Button>
						</span>
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
					<Modal size="sm" show={this.state.msgModal} onHide={this.hideModal} centered>
						<Modal.Header style={{backgroundColor: "#007bff", color: "white"}} closeButton>
							<Modal.Title>Update Message</Modal.Title>
						</Modal.Header>
						<Modal.Body className="pb-2">
							<Form>
								<Form.Group className="mb-2">
              	  <Form.Control name="msg" value={this.state.msg} onChange={this.handleChange} as="textarea" rows={5} />
              	</Form.Group>
								<Form.Group className="text-right mb-0">
        	        <Button style={{marginRight: '1rem'}} variant="secondary" onClick={this.hideModal}>&times;</Button>
        	        <Button variant="warning" type="submit" style={{color: '#fff'}} onClick={this.send}><CheckCircle /></Button>
        	      </Form.Group>
							</Form>
						</Modal.Body>
					</Modal>

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