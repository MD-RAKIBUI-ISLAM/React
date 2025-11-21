import { Component } from 'react';

import { convert, toCelcius, toFahrenheit } from '../lib/Converter';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

class Calculator extends Component {
    state = {
        temperature: '98.4',
        scale: 'c'
    };

    handleChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale
        });
    };

    render() {
        const { temperature, scale } = this.state;
        const Celcius = scale === 'f' ? convert(temperature, toCelcius) : temperature;
        const Fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={Celcius}
                    onTemperatureChange={this.handleChange}
                />
                <TemperatureInput
                    scale="f"
                    temperature={Fahrenheit}
                    onTemperatureChange={this.handleChange}
                />
                <BoilingVerdict celcius={parseFloat(temperature)} />
            </div>
        );
    }
}

export default Calculator;
