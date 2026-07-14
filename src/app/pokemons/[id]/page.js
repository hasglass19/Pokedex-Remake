import NotFound from "@/app/not-found";
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
    else if(mons.id==10001)
        return(<Link href={"/pokemons/1025"}><button>Previous Pokemon</button></Link>);
    else
        return(<Link href={"/pokemons/"+(mons.id-1)}><button>Previous Pokemon</button></Link>);
}

function NextButton({mons}){
    if (mons.id==10326)
        return(<Link href={"/pokemons/1"}><button>Next Pokemon</button></Link>);
    else if (mons.id==1025)
        return(<Link href={"/pokemons/10001"}><button>Next Pokemon</button></Link>);
    else
        return(<Link href={"/pokemons/"+(mons.id+1)}><button>Next Pokemon</button></Link>);
}

function AbilityCell({mons}){
    return(
        <td>
            {mons.at(0) ? (mons.at(0).is_hidden?"Hidden Ability: ":"") + mons.at(0).ability.name.charAt(0).toUpperCase() + mons.at(0).ability.name.slice(1).replaceAll("-"," ") : "None"}
            <br/><br/>
            {mons.at(1) ? (mons.at(1).is_hidden?"Hidden Ability: ":"") + mons.at(1).ability.name.charAt(0).toUpperCase() + mons.at(1).ability.name.slice(1).replaceAll("-"," ") : ""}
            <br/><br/>
            {mons.at(2) ? (mons.at(2).is_hidden?"Hidden Ability: ":"") + mons.at(2).ability.name.charAt(0).toUpperCase() + mons.at(2).ability.name.slice(1).replaceAll("-"," ") : ""}
        </td>
    );
}

export default async function PokemonDetails({ params }) {
    params = await params;
    if (params.id<1 || (params.id>1025 && params.id<10001) || params.id>10326 || !(parseInt(params.id)))
        return(<NotFound/>)
    const mons = await getMon(params.id);
    var inches=Math.round(((mons.height/3.048)-Math.floor(mons.height/3.048))*12);
    var carry_over=0;
    if (inches==12){
        inches=0;
        carry_over=1;
    }
    return (
        <>
            <table className="pokepages centering"> 
                <tbody>
                    <tr>
                        <td colSpan={7}>
                            <Image className="centering pokepages" src="/KPokedexTop.png" width={100} height={100} alt="Pokedex Top"/>
                        </td>
                    </tr>
                    <tr>
                        <th>Index: </th>
                        <td>{mons.id}</td>
                        <th rowSpan="6"><Image src={mons.sprites.front_default} width={200} height={200} alt="Default Sprite"/></th>
                    </tr>
                    <tr>
                        <th>Name: </th>
                        <td>{mons.name.charAt(0).toUpperCase() + mons.name.slice(1)}</td>
                    </tr>
                    <tr>
                        <th>Types:</th>
                        <TypeCell mons={mons}/>
                    </tr>
                    <tr>
                        <th>Height: </th>
                        <td>{mons.height/10} meters<br/><br/>{Math.floor(mons.height/3.048)+carry_over} feet {inches} inches</td>
                    </tr>
                    <tr>
                        <th>Weight: </th>
                        <td>{mons.weight/10} kilograms<br/><br/>{(mons.weight/4.535922921).toFixed(1)} pounds</td>
                    </tr>
                    <tr>
                        <th>Abilities: </th>
                        <AbilityCell mons={mons.abilities}/>
                    </tr>
                    <tr>
                        <td colSpan={7}>
                        <Image className="centering pokepages" src="/KPokedexBottom.png" width={100} height={100} alt="Pokedex Bottom"/>
                        </td>
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