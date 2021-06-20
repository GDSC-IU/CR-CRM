import React from 'react';
import Sidebar from './sidebar';
// import { ActivatedRoute } from 'react-router-dom';

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
        return (
            <>
                <Sidebar />
                <h1>Redirected to {this.state.user.compName}</h1>
            </>
        );
    };
}

export default Dashboard;