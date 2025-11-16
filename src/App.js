import ClockList from './Components/ClockList';
// import Counter from './Components/Counter';

function App() {
    const quantities = [1, 2, 3];
    return (
        <div>
            <ClockList quantities={quantities} />
            {/* <Counter /> */}
        </div>
    );
}

export default App;
