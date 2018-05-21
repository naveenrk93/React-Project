import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './Components/search-bar';
import VideoList from './Components/video-list';
import VideoDetail from './Components/video-detail';

const API_KEY = 'AIzaSyDCAsX-fCVB0C4-gOutQDGSSJDiK9Syl_U';

class App extends Component
{
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render(){
        return(
            <div>
                <SearchBar />
                <VideoDetail video={ this.state.selectedVideo }/>
                <VideoList
                    onVideoSelect = { selectedVideo => {this.setState({ selectedVideo })} }
                    videos={ this.state.videos }
                />
            </div>
        );
    }
}



ReactDOM.render(<App />, document.querySelector('.container'));