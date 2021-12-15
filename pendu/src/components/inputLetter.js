import React from 'react'
import '../App.css'

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const spanCurrentScore = document.getElementById('currentScore');
        let elements = Array.from(document.getElementsByClassName(`letter_${this.state.value}`));
        let currentScore = parseInt(spanCurrentScore.innerHTML);
        
        if (elements.length === 0){
            currentScore--;
            spanCurrentScore.innerHTML = currentScore;
        }

        elements.forEach((element) => {
            element.style.background = "green";
            element.innerHTML = "&nbsp;" + this.state.value + "&nbsp;";
        });
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <label className={`para ${this.props.theme ? "para-dark" : "para-light"}`}>
                    Letter that you choose : 
                </label>
                <br />
                <br />
                <div className="input">
                    <input type="text" value={this.state.value} onChange={this.handleChange} maxLength="1" />
                    <input type="submit" value="Submit" />
                </div>
            </form>
        );
    }
}

export default Input