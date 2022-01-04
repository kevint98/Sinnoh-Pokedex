import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './App.css';

const imgStyles = {
	height: 250,
	width: 250,
};

function PokemonDetails() {
	const { name } = useParams();

	const [pokemon, setPokemon] = useState({
		sprites: {},
		stats: [{}],
	});
	console.log(pokemon);

	useEffect(() => {
		fetchDetails();
	}, []);

	const fetchDetails = async () => {
		const fetchDetails = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${name}/`
		);

		const pokemon = await fetchDetails.json();
		setPokemon(pokemon);
		// console.log(pokemon);
	};

	if (pokemon.stats.length > 2) {
		return (
			<div>
				<h1>{name.toUpperCase()}</h1>
				<img alt={name} src={pokemon.sprites.front_default} style={imgStyles} />
				<h2>Base Stats</h2>
				<p>HP: {pokemon.stats[0].base_stat} </p>
				<p>Attack: {pokemon.stats[1].base_stat} </p>
				<p>Defense: {pokemon.stats[2].base_stat} </p>
				<p>Special Attack: {pokemon.stats[3].base_stat} </p>
				<p>Special Defense: {pokemon.stats[4].base_stat} </p>
				<p>Speed: {pokemon.stats[5].base_stat} </p>
			</div>
		);
	}
	return <div>Loading...</div>;
}

export default PokemonDetails;
