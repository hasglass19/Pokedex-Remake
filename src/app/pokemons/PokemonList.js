import React from 'react'
async function getMons() {
    const res=await fetch('https://pokeapi.co/api/v2/pokemon')

    const data=await res.json()
    return data.results
}

export default async function PokemonList() {
    const mons = await getMons()
  return (
    <>{mons.map((mon)=>(
        <div key={mon.id}>
            <table>
                <tr>
                    <th>Index: </th>
                    <th>Name: </th>
                </tr>
                <tr>
                    <td>{mon.id}</td>
                    <td>{mon.name}</td>
                </tr>
            </table>
        </div>
    ))}</>
  )
}
