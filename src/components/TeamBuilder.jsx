import { useEffect, useState } from 'react'
import PokeList from './CreateList'

function TeamBuilder({team, setTeam}) {
    const [pokemonList, setPokemonList] = useState([])

    useEffect(() => {
        let pokemons = []
        for (let key in team) {
            pokemons.push(team[key][1])
        }
        console.log(pokemons)
        setPokemonList(pokemons)
        
}, [])

return (
    <div>
        <PokeList pokemon = {pokemonList}  team = {team} setTeam = {setTeam} />
    </div>
)
}

export default TeamBuilder