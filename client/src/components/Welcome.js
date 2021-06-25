import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';

class Welcome extends Component {

	// constructor(props) {
	// 	super(props);
	// }

  render() {
    return(
      <>
				<Jumbotron>
					<blockquote className="blockquote mb-5">
						<h1 className="mb-0" style={{textAlign: "center"}}>Welcome to the world of CR-CRM.</h1>
						<footer className="blockquote-footer text-right">
							<cite>Your business may be small, but your brand can be BIG.</cite>
						</footer>
					</blockquote>
					<p style={{textAlign: "right"}}>
						<Link to={`/profile/${this.props.id}/dashboard`}>Click here</Link> to view your dashboard.
					</p>
				</Jumbotron>
			</>
    );
  }
}

export default Welcome;