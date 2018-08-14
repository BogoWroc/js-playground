import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from "../components/Cockpit/Cockpit";

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
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.namedChangedHandler}
                    />

        }

        return (
                <div className={classes.App}>
                    <Cockpit
                        showPersons={this.state.showPersons}
                        persons={this.state.persons}
                        clicked={this.tooglePersonsHandler}
                    />
                    {persons}
                </div>
        );
    }
}

export default App;
