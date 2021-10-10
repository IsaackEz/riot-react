import React from 'react';

const Search = () => {
	return (
		<section className='search'>
			<form action='/lol'>
				<input
					type='text'
					className='form-control'
					placeholder='Search a champion'
					name='search'
					autoFocus
				/>
			</form>
		</section>
	);
};

export default Search;
