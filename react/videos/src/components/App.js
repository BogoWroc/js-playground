import React from 'react';
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from '../api/YouTube';


class App extends React.Component {
    state = {
      videos: []
    };

    onSubmit = async (value) => {
        const response = await youtube.get('/search',{
            params: {
                q: value
            }
        });

        this.setState({videos: response.data.items});

    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSubmit}/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

export default App;