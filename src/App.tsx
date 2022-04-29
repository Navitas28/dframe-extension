import React, {useEffect, useState} from 'react';
import logo from './logo512.png';
import './App.css';

const App = () => {
	const [url, setUrl] = useState<string>('');

	/**
	 * Get current URL
	 */
	useEffect(() => {
		const queryInfo = {active: true, lastFocusedWindow: true};

		chrome.tabs &&
			chrome.tabs.query(queryInfo, (tabs) => {
				const url = tabs[0].url;
				setUrl(url as string);
			});
	}, []);

	function openHref() {
		chrome.tabs.create({active: true, url: 'https://google.com'});
	}

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>URL:</p>
				<p>{url}</p>

				<span onClick={openHref} style={{border: '1px dotted #ccc', cursor: 'pointer', padding: '10px'}}>
					Click Me
				</span>
			</header>
		</div>
	);
};

export default App;
