import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ChampionDetail = () => {
	const [champion, setChampion] = useState({
		id: '',
	});
	const params = useParams();
	const champSplashURL = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${params.id}_0.jpg`;
	const champDetailURL = `http://ddragon.leagueoflegends.com/cdn/11.20.1/data/en_US/champion/${params.id}.json`;
	useEffect(() => {
		(async () => {
			const resObj = await axios.get(champDetailURL);
			const res = Object.keys(resObj.data.data).map(
				(key) => resObj.data.data[key]
			);
			setChampion(res[0]);
		})();
	});
	return (
		<div>
			<section>
				<div className='champ'>
					<div className='champ-img'>
						<img className='focus-img' alt='' src={champSplashURL} />
					</div>
				</div>
				<div className='champ-det'>
					<div>
						<h2>{champion.id}</h2> <br />
						<h3>{champion.title}</h3>
						<br />
						<br />
						<p>
							{champion.blurb} <a href='/lol/'>Read more</a>{' '}
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ChampionDetail;
