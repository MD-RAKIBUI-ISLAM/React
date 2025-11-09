import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Clock extends React.Component {
    state = { date: new Date() };

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        const { locale } = this.props;
        const { date } = this.state;
        return (
            <h1 className="heading">
                <span className="text">{date.toLocaleTimeString(locale)} </span>
                <img src="" alt="" />
            </h1>
        );
    }
}

export default Clock;
