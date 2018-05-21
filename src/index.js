import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './Components/search-bar';

const API_KEY = 'AIzaSyDCAsX-fCVB0C4-gOutQDGSSJDiK9Syl_U';

YTSearch({key: API_KEY, term: 'surfboards'}, (data) =>{
    console.log(data);
});

const App = function(){
    return (
        <div>
            <SearchBar />
        </div>
    );
};



ReactDOM.render(<App />, document.querySelector('.container'));