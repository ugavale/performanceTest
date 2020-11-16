import PerformanceProvider, {
	PerformanceContext,
} from './components/PerformanceProvider';
const { default: ComponentB } = require('./components/ComponentB');

function App() {
	return (
		<PerformanceProvider applicationName={'ComponenetA'}>
			<PerformanceContext.Consumer>
				{(api) => {
					const { pageLoadTime, apiStart, apiStop } = api;
					return (
						<ComponentB
							pageLoadTime={pageLoadTime}
							apiStart={apiStart}
							apiStop={apiStop}
						/>
					);
				}}
			</PerformanceContext.Consumer>
		</PerformanceProvider>
	);
}

export default App;
