import '../css/App.css'
import Start from './Start/'
import TeamBuilder from './TeamBuilder/'
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import PokemonSearch from './PokemonSearch'
import PokemonList from './PokemonList'
import { useState } from 'react'

function App() {
	const [team, setTeam] = useState({})
	const updateTeam = (newTeam) => {
		setTeam(newTeam)
	}
	return (
		<Router>
			<nav>
				<div>
					<header>
						<ul className="nav-link">
							<li>
								<NavLink className="navItem" to="">Start</NavLink>
							</li>
							<li>
								<NavLink className="navItem" to="/TeamBuilder">Team Builder</NavLink>
							</li>
							<li>
								<NavLink className="navItem" to="/PokemonSearch">Pokemon Search</NavLink>
							</li>
							<li>
								<NavLink className="navItem" to="/PokemonList">Pokemon List</NavLink>
							</li>
						</ul>
					</header>
				</div>
			</nav>

			<main>
				<div className="container">
					<Routes>
						<Route path="/PokemonSearch" element={<PokemonSearch team = {team} setTeam = {updateTeam} />} />
						<Route path="/TeamBuilder" element={<TeamBuilder team = {team} setTeam = {updateTeam} />} />
						<Route path="/PokemonList" element={<PokemonList team = {team} setTeam = {updateTeam} />} />
						<Route path="/" element={<Start />} />
					</Routes>
				</div>
			</main>
		</Router>
	)
}

export default App