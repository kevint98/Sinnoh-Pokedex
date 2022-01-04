import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Pokedex() {
	const [pokemon, setPokemon] = useState([]);

	useEffect(() => {
		fetchPokemon();
	}, []);

	const fetchPokemon = async () => {
		const data = await fetch('https://pokeapi.co/api/v2/pokedex/5/');

		const pokedex = await data.json();
		console.log(pokedex.pokemon_entries);
		setPokemon(pokedex.pokemon_entries);
	};

	return (
		<div>
			<h1>Pokédex</h1>
			{pokemon.map(mon => (
				<h2 key={mon.entry_number}>
					<Link to={`/pokedex/${mon.pokemon_species.name}`}>
						{(mon.entry_number < 10 && `00${mon.entry_number}`) ||
							(mon.entry_number < 100 && `0${mon.entry_number}`) ||
							mon.entry_number}{' '}
						- {mon.pokemon_species.name.toUpperCase()}
					</Link>
				</h2>
			))}
		</div>
	);
}

export default Pokedex;
