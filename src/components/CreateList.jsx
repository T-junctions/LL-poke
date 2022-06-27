import GetPokeImg from './GetPokeImg'


function createList({ pokemon, team, setTeam }) {

    // let refresh = () => {
    //     window.location.reload()
    // }

    function addButton(p) {
        if (team[p] == null) {
            let newTeam = {...team}
            newTeam[p] = [p, p]
            setTeam(newTeam)
            console.log(team)
            // refresh()
        }
    }

    function removeButton(p) {
        if (team[p] != null) {
            return (
                <button onClick={function () { remove(p) }}> Remove Pokemon </button>
            )
        }
    }

    function remove(p) {
        if (team[p] != null) {
            let newTeam = {...team}
            delete newTeam[p]
            setTeam(newTeam)
            // refresh()
        }
    }

    function renameButton(p) {
        if (team[p] != null) {
            return (
                <div>
                    <form>
                        <input placetype="text" placeholder="pokemone name" onChange ={v => rename(p, v.target.value)} />
                    </form>
                </div>
            )
        }
    }

    function rename(p, v) {
        if (team[p] != null) {
            let newTeam = {...team}
            newTeam[p] = ([v, p])
            setTeam(newTeam)
            // refresh()
        }
    }

    function getPokeImg(p) {
        if (team[p] == null) {
            return (
                <GetPokeImg name={p} />
            )
        } else {
            console.log(team[p][1])
            return (
                <GetPokeImg name={team[p][1]} />
            )
        }
    }

    function getName(p) {
        if (team[p] == null) {
            return (
                <p>{p}</p>
            )
        } else {
            return (
                <div>
                    {team[p][0]}
                </div>
            )
        }
    }

    return (
        <div>
            {pokemon.map(p => (
                <div key={p}>{getName(p)}
                    {getPokeImg(p)}
                    <button onClick={function () { addButton(p) }}>
                        Add Pokemon
                    </button>
                    {removeButton(p)}
                    {renameButton(p)}
                </div>
            ))}
        </div>
    )
}

export default createList