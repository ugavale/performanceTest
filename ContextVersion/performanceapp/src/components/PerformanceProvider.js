import React, { Component } from 'react';
import propTypes from 'prop-types';

export const PerformanceContext = React.createContext();

class PerformanceProvider extends Component {
	static propTypes = {
		children: propTypes.node.isRequired,
		applicationName: propTypes.string.isRequired,
	};

	getEmptyObj = () => {
		const emptyObj = {
			name: '',
			start: 0,
			end: 0,
			diff: 0,
		};
		return emptyObj;
	};

	map = [{}];

	componentDidMount() {
		console.log(
			'Performance Provider componentDidMount application name' +
				this.props.applicationName
		);
		//this.pageLoadTime();
	}

	pageLoadTime = () => {
		//console.log('This is a test');
		//console.log(this.props.applicationName);
		console.log(Date.now() - window?.performance?.timing['loadEventEnd']);
	};

	apiStart = (name) => {
		let apiFound = false;
		this.map.forEach((element) => {
			if (element.name === name) {
				apiFound = true;
			}
		});

		if (!apiFound) {
			let obj = this.getEmptyObj();
			obj.name = name;
			obj.start = Date.now();

			this.map.push(obj);
		}
	};

	apiStop = (name) => {
		let apiFound = false;
		this.map.forEach((element) => {
			if (element.name === name) {
				if (element.diff === 0) {
					apiFound = true;
					element.end = Date.now();
					element.diff = element.end - element.start;
					console.log('API Name ' + element['name'] + '  ' + element['diff']);
				}
			}
		});

		if (!apiFound) {
			console.log('Api Start time not recorded');
		}
	};

	render() {
		return (
			<PerformanceContext.Provider
				value={{
					pageLoadTime: this.pageLoadTime,
					apiStart: this.apiStart,
					apiStop: this.apiStop,
				}}
			>
				{this.props.children}
			</PerformanceContext.Provider>
		);
	}
}

export default PerformanceProvider;
