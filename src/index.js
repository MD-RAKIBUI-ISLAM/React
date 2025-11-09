import React from 'react';
import ReactDOM from 'react-dom/client';

// const index = 0;

// function Clock({ local }) {
//     return (
//         <h1 className="text" tabIndex={index}>
//             <span className="text"> {new Date().toLocaleTimeString(local)} </span>
//             <img src="" alt="" />
//         </h1>
//     );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Clock local="bn-BD" />);

// eslint-disable-next-line react/prefer-stateless-function
class Clock extends React.Component {
    render() {
        const { locale, children } = this.props;
        return (
            <h1 className="heading">
                <span className="text">
                    {' '}
                    {children} {new Date().toLocaleTimeString(locale)}{' '}
                </span>
                <img src="" alt="" />
            </h1>
        );
    }
}

// const ClockComponent = new Clock();
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(ClockComponent.print());
root.render(<Clock locale="bn-BD"> Testing Time: </Clock>);
