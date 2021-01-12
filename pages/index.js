import { useState } from 'react';
import Head from 'next/head';
const axios = require('axios');

import LayoutWithMenuComponent from '../components/LayoutWithMenuComponent';

export default function Index() {
    
    const getTest = (e) => {
        e.preventDefault()
        axios.get('https://api.punkapi.com/v2/beers')
            .then(res => setState(res.data) )
            .catch(err => console.log(err))
    }
    const list = [];
    return (
        <>
            <Head>
                <title>Página Atual</title>
            </Head>
            <LayoutWithMenuComponent>
                <div>Amo minha estrelinha</div>
            </LayoutWithMenuComponent>
        </>
    );

}

{/* <button onClick={getTest}>Testando</button>
{
    state.length >= 1 ? state.map((beer, idx) => {
        return <p key={idx}>{beer.name}</p>
    })
    : ''
} */}