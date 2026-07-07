import Image from "next/image";
import Link from "next/link";
async function getMon(id) {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/'+id);
    return res.json();
}

function TypeCell({mons}){
    if(mons.types.at(1))
        return(<td>{mons.types.at(0).type.name.charAt(0).toUpperCase() + mons.types.at(0).type.name.slice(1)}<br/><br/>{mons.types.at(1).type.name.charAt(0).toUpperCase() + mons.types.at(1).type.name.slice(1)}</td>);
    else
        return(<td>{mons.types.at(0).type.name.charAt(0).toUpperCase() + mons.types.at(0).type.name.slice(1)}</td>);
}

function PrevButton({mons}){
    if (mons.id==1)
        return(<Link href={"/pokemons/10326"}><button>Previous Pokemon</button></Link>);
    else
        return(<Link href={"/pokemons/"+(mons.id-1)}><button>Previous Pokemon</button></Link>);
}

function NextButton({mons}){
    if (mons.id==10326)
        return(<Link href={"/pokemons/1"}><button>Next Pokemon</button></Link>);
    else
        return(<Link href={"/pokemons/"+(mons.id+1)}><button>Next Pokemon</button></Link>);
}

export default async function PokemonDetails({ params }) {
    params = await params;
    const mons = await getMon(params.id);
    return (
        <>
            <table className="pokepages centering"> 
                <tbody>
                    <tr>
                        <th>Index: </th>
                        <th>Name: </th>
                        <th>Types:</th>
                    </tr>
                    <tr>
                        <td>{mons.id}</td>
                        <td>{mons.name.charAt(0).toUpperCase() + mons.name.slice(1)}</td>
                        <TypeCell mons={mons}/>
                        
                        <td><Image src={mons.sprites.front_default} width={200} height={200} alt="Default Sprite"/></td>
                    </tr>
                </tbody>    
            </table>
            <footer>
                <PrevButton mons={mons}/>
                <NextButton mons={mons}/>
            </footer>
        </>
    );
}