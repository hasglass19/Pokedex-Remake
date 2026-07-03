async function getMon(id) {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/'+id);
    return await res.json
}

export default async function PokemonDetails(params) {
    const mons = await getMon(35)
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
  );
}