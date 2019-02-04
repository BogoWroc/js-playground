import React from 'react';
import SearchBar from "./SearchBar";


class App extends React.Component {

    onSubmit = (value) => {
        console.log(value);
    };

    render() {
        return (
            <div>
                <SearchBar onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

export default App;