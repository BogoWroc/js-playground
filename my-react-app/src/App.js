import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {   // state is internal state of component. Word state belongs to React component.
        persons: [
            {id: 'a1', name: "Max", age: 30},
            {id: 'a2', name: "Anu", age: 40},
            {id: 'a3', name: "Kate", age: 21}
        ],
        showPersons: false
    };

    namedChangedHandler = (event, id) => {

        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex] // make a copy of person
        };

        person.name = event.target.value;

        const persons = [...this.state.persons]; // make a copy of array
        persons[personIndex] = person;

        this.setState({
            persons: persons
        })
    };

    tooglePersonsHandler = () => {
        const doseShow = this.state.showPersons;
        this.setState({showPersons: !doseShow})
    };

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    render() {
        const style = {
            backgroundColor: 'green',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {
                        this.state.persons.map(
                            (person, index) => {
                                return <Person
                                    key={person.id}
                                    name={person.name}
                                    age={person.age}
                                    click={() => this.deletePersonHandler(index)}
                                    changed={(event) => this.namedChangedHandler(event, person.id)}
                                />
                            }
                        )
                    }
                </div>
            );

            style.backgroundColor = 'red';
        }

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to React :)</h1>
                    </header>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                    <p className={classes.join(' ')}> This is really working!</p>
                    <button
                        style={style}
                        onClick={this.tooglePersonsHandler}>Toogle Persons
                    </button>
                    {persons}
                </div>
        );
    }
}

export default App;
