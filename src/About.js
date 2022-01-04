import React from 'react';
import './App.css';

function About() {
	return (
		<div>
			<h1>About Page</h1>
			<p>
				This Web Application is a simple Pokédex of the Pokémon in the Sinnoh
				Region.
			</p>
			<p>
				It is in no way affiliated with Nintendo, Pokemon or any other related
				entities and was designed purely to practice React concepts.
			</p>
			<p>
				The App was built with React and the React Router Library, and fetches
				data from an external API:{' '}
				<a href="https://pokeapi.co/" target="_">
					PokeApi
				</a>
			</p>
		</div>
	);
}

export default About;
