import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: "Max", age: 29},
            {name: "Anu", age: 40},
            {name: "Kate", age: 21}
        ]
    };

    switchNameHandler = (name) => {
        console.log("Was clicked!");
        // DON'T DO THIS: this.state.persons[0].name="Maximilian";
        this.setState({
            persons: [
                {name: name, age: 29},
                {name: "Anu", age: 45},
                {name: "Kate", age: 21}
            ]
        })
    };

    namedChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: "Maximilian", age: 29},
                {name: event.target.value, age: 45},
                {name: "Kate", age: 21}
            ]
        })
    };

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React :)</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <button
                    style={style}
                    onClick={() => this.switchNameHandler("Maximilian")}>Test</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                />
                <Person name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        click={this.switchNameHandler.bind(this, "Max!")}
                        changed={this.namedChangedHandler}>Say hello!
                </Person>
                <Person name={this.state.persons[2].name}
                        age={this.state.persons[2].age}
                />
            </div>
        );
    }
}

export default App;
