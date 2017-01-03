'use strict';

import React from 'react';

export default class Body extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("Body.componentDidMount()")
    }

    render() {
        return (
            <div>
                <h1>
                    This<br/>
                    is<br/>
                    my<br/>
                    test<br/>
                    body!
                    <br/>
                    something is added<br/>
                    lorem ipsum<br/>
                </h1>
            </div>
        )
    }
}