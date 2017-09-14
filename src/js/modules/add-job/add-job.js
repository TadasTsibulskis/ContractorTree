import React, { Component } from 'react';

class AddJob extends Component {
	render() {
        this.props.action();
        return (
            <div></div>
        );
	}
}

export default AddJob;
