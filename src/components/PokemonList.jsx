import { useState, useEffect } from 'react'
import axios from 'axios'
import PokeList from './CreateList'
import Pagination from './Pagination'

function pokemonSearch({team, setTeam}) {
    const [pokemon, setPokemon] = useState([])
    const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextPage, setNextPage] = useState()
    const [prevPage, setPrevPage] = useState()
    const [buffering, setBuffering] = useState(true)


    useEffect(() => {
        setBuffering(true)

        let cancelToken
        axios.get(currentPage, {
            cancelToken: new axios.CancelToken(ct => cancelToken = ct)
        }).then(results => {
            setPokemon(results.data.results.map(p => p.name))
            setNextPage(results.data.next)
            setPrevPage(results.data.previous)

            setBuffering(false)
        }).catch(e => {
            console.log(e)
        })

        return () => cancelToken()
    }, [currentPage])

    function gotoNextPage() {
        setCurrentPage(nextPage)
    }
    function gotoPrevPage() {
        setCurrentPage(prevPage)
    }

    if (buffering) return (<img src="../../loading.gif"></img>)

    return (
        console.log(pokemon),
        <div className="pokeList">
            <PokeList pokemon={pokemon} team={team} setTeam={setTeam} />
            <Pagination
                gotoNextPage={nextPage ? gotoNextPage : null}
                gotoPrevPage={prevPage ? gotoPrevPage : null} />
        </div>
    )
}

export default pokemonSearch