import ReactDOM from 'react-dom/client';

const index = 0;
setInterval(() => {
    const element = (
        <h1 className="text" tabIndex={index}>
            <span className="text">Hello {new Date().toLocaleTimeString()} </span>
            <img src="" alt="" />
        </h1>
    );

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(element);
}, 1000);
