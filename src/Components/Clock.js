import React, { useState } from 'react';

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

// import React from 'react'; // Already imported above
// import { useState } from 'react'; // Already imported above

export function Counter() {
    // state: count নামের একটা variable তৈরি হলো
    const [count, setCount] = useState(0);

    // render part
    return (
        <div>
            <h1>Count: {count}</h1>
            <button type="button" onClick={() => setCount(count + 1)}>
                Increase
            </button>
        </div>
    );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Counter />);
// export default Counter;
