export function initPerformanceObject() {
	const getEmptyObj = () => {
		const emptyObj = {
			name: '',
			start: 0,
			end: 0,
			diff: 0,
		};
		return emptyObj;
	};

	let apiMap = [{}];
	let applicationName = '';
	let supplierId = -1;

	const setApplicationName = (name) => {
		applicationName = name;
	};

	const setSupplierId = (id) => {
		supplierId = id;
	};

	const pageLoadTime = () => {
		//console.log('This is a test');
		console.log('Application name ', applicationName);
		//console.log('Date Now' + Date.now());
		//console.log('Performance ', performance);
		//console.log('Load Event End ' + performance?.timing['loadEventEnd']);
		console.log(Date.now() - window?.performance?.timing['loadEventEnd']);
	};

	const apiStart = (name) => {
		let apiFound = false;
		apiMap.forEach((element) => {
			if (element.name === name) {
				apiFound = true;
			}
		});

		if (!apiFound) {
			let obj = getEmptyObj();
			obj.name = name;
			obj.start = Date.now();

			apiMap.push(obj);
		}
	};

	const apiStop = (name) => {
		let apiFound = false;
		apiMap.forEach((element) => {
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

	return {
		apiStart,
		apiStop,
		pageLoadTime,
		setApplicationName,
		setSupplierId,
	};
}
