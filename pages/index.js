import { useState } from 'react'
const axios = require('axios')

function Home() {

    const [state, setState] = useState([])

    const getTest = (e) => {
        e.preventDefault()
        axios.get('https://api.punkapi.com/v2/beers')
            .then(res => setState(res.data) )
            .catch(err => console.log(err))
    }

    return (
    <div>
        <p>Eu amo minha estrelinha :P</p>
        <button onClick={getTest}>Testando</button>
        {
            state.length >= 1 ? state.map((beer, idx) => {
                return <p key={idx}>{beer.name}</p>
            })
            : ''
        }
    </div>
    )
}

export default Home