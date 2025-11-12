import { useState } from 'react';

function Counter() {
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
export default Counter;
