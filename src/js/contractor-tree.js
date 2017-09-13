import React, { Component } from 'react';
import '../less/main.css';

import AddJob from './modules/add-job/add-job';
import Jobs from './modules/jobs/jobs';

class ContractorTree extends Component {
	render() {
		return (
			<div className="main-app">
				<AddJob />
				<Jobs />
      		</div>
		);
	}
}

export default ContractorTree;
