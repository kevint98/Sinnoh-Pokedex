import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/pokedex" element={<Pokedex />} />
				<Route path="/pokedex/:name" element={<PokemonDetails />} />
			</Routes>
		</div>
	);
}

export default App;
