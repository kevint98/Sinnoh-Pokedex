import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const navStyle = {
	color: 'white',
};

function Nav() {
	return (
		<nav>
			<h3>My Sinnoh Pokédex</h3>
			<ul className="nav-links">
				<Link style={navStyle} to="/">
					<li>Home</li>
				</Link>
				<Link style={navStyle} to="/about">
					<li>About</li>
				</Link>
				<Link style={navStyle} to="/pokedex">
					<li>Pokédex</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Nav;
