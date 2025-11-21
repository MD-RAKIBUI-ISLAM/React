function BoilingVerdict({ celcius = 0 }) {
    if (celcius >= 100) {
        return <p>The water would Boil.</p>;
    }
    return <p>The water would not Boil.</p>;
}

export default BoilingVerdict;
