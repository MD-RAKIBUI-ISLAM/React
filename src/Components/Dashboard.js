import { Component } from 'react';

import withAuthProtection from './HOC/withAuthProtection';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <p>This is the dashboard page.</p>
            </div>
        );
    }
}

export default withAuthProtection(Dashboard);
