import React from 'react';
import ChampionItem from './ChampionItem';
import { useHistory } from 'react-router-dom';

const ChampionGrid = ({ items, isLoading }) => {
	const history = useHistory();
	return isLoading ? (
		<h1>Loading...</h1>
	) : (
		<div>
			<div></div>
			<div>
				<section className='cards'>
					{items.map((item) => (
						<div
							onClick={() => {
								history.push('/lol/champion/' + item.id);
							}}
						>
							<ChampionItem key={item.key} item={item}></ChampionItem>
						</div>
					))}
				</section>
			</div>
		</div>
	);
};

export default ChampionGrid;
