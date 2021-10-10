import React from 'react';

const championItem = ({ item }) => {
	const champImgURL =
		`http://ddragon.leagueoflegends.com/cdn/11.20.1/img/champion/` +
		item.image.full;

	return (
		<div className='card'>
			<div className='card-inner'>
				<img className='card-img' alt='' src={champImgURL} />
			</div>
		</div>
	);
};

export default championItem;
