import axios from 'axios'
import { useEffect, useState } from 'react'

const pokeApiUrl = "https://pokeapi.co/api/v2/pokemon/"

function getPokeImg({ name }) {
    const [imgUrl, setImgUrl] = useState("")

    useEffect(() => {
        axios.get(pokeApiUrl.concat(name)).then(results => {
            setImgUrl(results.data.sprites.front_default)
        })
    })

    return (
        <div>
            <img src={imgUrl} />
        </div>
    )
}

export default getPokeImg