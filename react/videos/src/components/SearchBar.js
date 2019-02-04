import React from 'react';

class SearchBar extends React.Component {

    state = {
        value: ''
    };

    onFormSubmit = (event) => {
      event.preventDefault();
      this.props.onSubmit(this.state.value);
    };

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video    Search</label>
                        <input
                            type="text"
                            value={this.state.value}
                            onChange={e => this.setState({value: e.target.value})}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;