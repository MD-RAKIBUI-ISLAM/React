import { Component } from 'react';

import withAuthProtection from './HOC/withAuthProtection';

class Profile extends Component {
    render() {
        return (
            <div>
                <h1>Profile</h1>
                <p>Name: Rakib</p>
                <p>Email: rakib@example.com</p>
            </div>
        );
    }
}

export default withAuthProtection(Profile);
