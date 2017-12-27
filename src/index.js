import React, { Component } from 'react';

export default class ContractorTree extends Component {
    // this view controls the entire app, clicking a new view will trigger a new api call to fetch the data for that page and
    // then pass it to a component that controls that view with child job components, that component should have a callback
    // prop that can reset the view with a parameter that defines the new view
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
           null
        );
    }
}