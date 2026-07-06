
    import Image from "next/image";

    async function getMon(id) {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/'+id,{
            next: {
                revalidate: 60
            }
        });
        return res.json();
    }

    export default async function PokemonDetails({ params }) {
        params = await params;
        console.log("PARAMS: ", params);
        const mons = await getMon(params.id);
    return (
        <>{
                <table>
                    <tbody>
                    <tr>
                        <th>Index: </th>
                        <th>Name: </th>
                    </tr>
                    <tr>
                        <td>{mons.id}</td>
                        <td>{mons.name}</td>
                        <td><Image src={mons.sprites.front_default} width={200} height={200} alt="Default Sprite"/></td>
                    </tr>
                    </tbody>    
                </table>
        }</>
    );
    }