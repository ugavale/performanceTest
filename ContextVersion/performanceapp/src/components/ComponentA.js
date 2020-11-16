import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class ComponentA extends Component {
	static propTypes = {
		apiStart: PropTypes.func,
		apiStop: PropTypes.func,
		pageLoadTime: PropTypes.func,
	};

	state = {
		display: false,
	};

	async componentDidMount() {
		await this.pause();
		await this.getData();
		this.props.pageLoadTime();
	}

	pause = () => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				this.setState({ display: true });
				resolve();
			}, 2000);
		});
	};

	getData = async () => {
		this.pause();
		this.props.apiStart('getData');
		const promise = axios.get('https://jsonplaceholder.typicode.com/posts');
		const response = await promise;
		this.props.apiStop('getData');
	};

	render() {
		return <h1>Hello World</h1>;
	}
}

export default ComponentA;

// console.log('Display state' + this.state.display);
// return this.state.display ? (
// 	<h1>Hello World</h1>
// ) : (
// 	// <PerformanceProvider applicationName={'ComponenetA'}>
// 	// 	<PerformanceContext.Consumer>
// 	// 		{(api) => {
// 	// 			return <h1>Hello World</h1>;
// 	// 		}}
// 	// 	</PerformanceContext.Consumer>
// 	// </PerformanceProvider>
// 	<h1>Waiting</h1>
// );
