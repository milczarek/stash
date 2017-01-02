'use strict';

const React = require('react');
const ReactDOM = require('react-dom')

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("App.componentDidMount()")
    }

    render() {
        return (
            <div>
                <h1>My test App asd</h1>
            </div>
    )
    }
}



ReactDOM.render(<App />, document.getElementById('react'));
