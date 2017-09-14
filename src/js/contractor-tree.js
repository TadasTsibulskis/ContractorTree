import React, { Component } from 'react';
import '../less/main.css';

import LoadingIcon from './components/loading-icon';
import Button from './components/button';

class ContractorTree extends Component {
	constructor(props) {
		super(props);
		this.state = {
			content: "Hello",
			loading: true
		};
		this.contentChange = this.contentChange.bind(this);
	}

	componentDidMount() {
		this.setState({
			loading: false
		})
	}

	contentChange(newContent) {
		const setContent = newContent ? newContent : <LoadingIcon />
		this.setState({
			content: setContent,
			loading: true
		})
	}

	render() {
		return (
			<div className="main-app">
				<div className="header">
					<Button action={this.contentChange} buttonText="Add Job" />
					<Button buttonText="Jobs" />
					<Button buttonText="Contractors" />
					<Button buttonText="Clients" />
				</div>
				<div className="content">
					{this.state.loading ? <LoadingIcon /> : this.state.content}
				</div>
			</div>
		);
	}
}

export default ContractorTree;
