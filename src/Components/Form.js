import { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Form extends Component {
    state = {
        title: 'JavaScript',
        text: 'JavaScript is awesome',
        library: 'react',
        isAwesome: false
    };

    handleChange = (e) => {
        if (e.target.type === 'text') {
            this.setState({
                title: e.target.value
            });
        } else if (e.target.type === 'textarea') {
            this.setState({
                text: e.target.value
            });
        } else if (e.target.type === 'select-one') {
            this.setState({
                library: e.target.value
            });
        } else if (e.target.type === 'checkbox') {
            this.setState({
                isAwesome: e.target.checked
            });
        } else {
            console.log('Nothing');
        }
    };

    submitHandler = (e) => {
        const { title, text, library, isAwesome } = this.state;
        e.preventDefault();
        console.log(title, text, library, isAwesome);
    };

    render() {
        const { title, text, library, isAwesome } = this.state;
        return (
            <div>
                <form action="" onSubmit={this.submitHandler}>
                    <input
                        type="text"
                        placeholder="Enter title"
                        value={title}
                        onChange={this.handleChange}
                    />{' '}
                    <br /> <br />
                    <textarea name="text" id="" value={text} onChange={this.handleChange} />
                    <br /> <br />
                    <select name="" id="" value={library} onChange={this.handleChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                    </select>
                    <br /> <br />
                    <input type="checkbox" checked={isAwesome} onChange={this.handleChange} />
                    <br /> <br />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default Form;
