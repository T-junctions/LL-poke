import { useState, useEffect } from 'react'
import axios from 'axios'
import PokeList from './CreateList'


function pokemonSearch({team, setTeam}) {
    const [pokemonList, setPokemonList] = useState([])
    const pokeApiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=1126"
    const [buffering, setBuffering] = useState(true)
    const [searchQuery, setSearchQuery] = useState("")
    const [filteredPokemon, setFilteredPokemon] = useState([])

    let inputQuery = (q) => {
        setSearchQuery(q.toLowerCase());
    };

    let executeQuery = () => {
        return pokemonList.filter(name => name.includes(searchQuery))
    }

    useEffect(() => {
        let cancelToken;
        axios.get(pokeApiUrl, {
            cancelToken: new axios.CancelToken(ct => cancelToken = ct)
        }).then(results => {
            setPokemonList(results.data.results.map(p => p.name))

            setBuffering(false)
        }).catch(e => {
            console.log(e)
        })
    }, [])

    useEffect(() => {
        setFilteredPokemon(executeQuery)
    }, [searchQuery])

    if (buffering) return (<img src="../../loading.gif"></img>)



    return (
        console.log(filteredPokemon != "" ? filteredPokemon.slice(0, 20) : pokemonList.slice(0, 20)),
        <div className="pokemonSearch">
            <input
                name="search"
                type="text"
                value={searchQuery}
                id="search"
                placeholder="Search pokemon"
                onChange={i => inputQuery(i.target.value)} />
            <PokeList pokemon={filteredPokemon != "" ? filteredPokemon.slice(0, 20) : pokemonList.slice(0, 20)} team={team} setTeam={setTeam} />
        </div>

    )
}

export default pokemonSearch