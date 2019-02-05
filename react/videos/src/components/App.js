import React from 'react';
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from '../api/YouTube';


class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    };

    onSubmit = async (value) => {
        const response = await youtube.get('/search', {
            params: {
                q: value
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });

    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    };

    componentDidMount() {
        this.onSubmit('buildings');
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;