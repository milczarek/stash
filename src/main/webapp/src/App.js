'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Body from './components/Body';

class App extends React.Component {

    render() {
        return (
            <Body/>
        )
    }
}



ReactDOM.render(<App />, document.getElementById('react'));
