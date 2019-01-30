import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const buttonText = 'Click me!';
    const labelName = 'Enter name:';

    const style = {
        backgroundColor: 'blue',
        color: 'white'
    };
    return (
        <div>
            <label className="label" htmlFor="name">{labelName}</label>
            <input id="name" type="text"/>
            <button style={style}>
                {buttonText}
            </button>
        </div>
    )
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);

