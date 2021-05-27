import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
	const [state, setState] = useState([]);

	useEffect(() => {
		fetch(`https://api.mangadex.org/manga/`)
			.then(response => response.json())
			.then(json => setState(json.results));
	}, []);

	return (
		<div className='App'>
			<h1 className='App-h1'>MangaDex API Fetch</h1>
			{state ? (
				<div>
					{state.map(item => {
						console.log(item.data, 'is the data');
						return (
							<ul key={item.data.id} className='manga-list'>
								<li className='manga-list-item'>
									{item.data.attributes.title.en}
									{item.data.attributes.links.amz ? (
										<a className='manga-link' href={item.data.attributes.links.amz} target='_blank' rel='noreferrer'>
											See more
										</a>
									) : (
										<a className='manga-link' href={item.data.attributes.links.raw} target='_blank' rel='noreferrer'>
											See more
										</a>
									)}
								</li>
							</ul>
						);
					})}
				</div>
			) : null}
		</div>
	);
}

export default App;
