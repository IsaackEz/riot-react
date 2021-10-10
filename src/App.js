import './App.css';
import Header from './components/UI/Header';
import ChampionGrid from './components/champions/ChampionGrid';
import Search from './components/UI/Search';
import ChampionDetail from './components/champions/championDetail';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const championsURL =
		'http://ddragon.leagueoflegends.com/cdn/11.20.1/data/en_US/champion.json';

	useEffect(() => {
		const fetchItems = async () => {
			const resultObj = await axios(championsURL);
			const result = Object.keys(resultObj.data.data).map(
				(key) => resultObj.data.data[key]
			);
			setItems(result);
			setIsLoading(false);
		};

		fetchItems();
	}, []);

	return (
		<div className='container'>
			<BrowserRouter>
				<Header />
				<Search />
				<Switch>
					<Route path='/lol/champion/:id' component={ChampionDetail} />
				</Switch>
				<ChampionGrid isLoading={isLoading} items={items} />
			</BrowserRouter>
		</div>
	);
};

export default App;
