async function getMon(id) {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/'+id);
    return await res.json();
}

export default async function PokemonDetails(params) {
    const mons = await getMon(params)
  return (
    <>{
        <div key={mons.id}>
            <table>
                <tbody>
                <tr>
                    <th>Index: </th>
                    <th>Name: </th>
                </tr>
                <tr>
                    <td>{mons}</td>
                    <td>{mons}</td>
                </tr>
                </tbody>    
            </table>
        </div>
    }</>
  );
}