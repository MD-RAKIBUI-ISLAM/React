import { Component } from 'react';

// Global auth state (simulation)
let isLoggedIn = false;

function withAuthProtection(WrappedComponent) {
    return class extends Component {
        toggleLogin = () => {
            isLoggedIn = !isLoggedIn;
            this.forceUpdate(); // rerender HOC
        };

        render() {
            if (!isLoggedIn) {
                return (
                    <div>
                        <button type="button" onClick={this.toggleLogin}>
                            Login
                        </button>
                        <h2>Access Denied! Please Login First.</h2>
                    </div>
                );
            }

            return (
                <div>
                    <button type="button" onClick={this.toggleLogin}>
                        Logout
                    </button>
                    <WrappedComponent {...this.props} />
                </div>
            );
        }
    };
}

export default withAuthProtection;
