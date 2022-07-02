import './App.css';
import TopBar from './components/TopBar';
import Banner from './components/Banner';
import StoreListings from './components/StoreListings';

function App() {
	return (
		<div className="App">
			<TopBar />
			<Banner />
			<StoreListings />
		</div>
	);
}

export default App;
