import React, { Component } from 'react';
import ComponentA from './ComponentA';
import PropTypes from 'prop-types';

class ComponentB extends Component {
	static propTypes = {
		apiStart: PropTypes.func,
		apiStop: PropTypes.func,
		pageLoadTime: PropTypes.func,
	};

	componentDidMount() {
		//console.log('Component B Componenet Did Mount ');
		//this.props.pageLoadTime();
	}

	render() {
		return (
			<ComponentA
				apiStart={this.props.apiStart}
				apiStop={this.props.apiStop}
				pageLoadTime={this.props.pageLoadTime}
			/>
		);
	}
}

export default ComponentB;
