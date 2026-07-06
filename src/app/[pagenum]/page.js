import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
async function getMons(id) {
    const res=await fetch('https://pokeapi.co/api/v2/pokemon?offset='+(20*(id-1))+'&limit=20');
    const data= await res.json();
    return data.results;
}

function NextButton({pagenum}){
  if (pagenum<68)
    return(<Link href={"/"+(parseInt(pagenum)+1)}><button>Next Page</button></Link>);
}

function PrevButton({pagenum}){
  if(pagenum>1)
    return(<Link href={"/"+(parseInt(pagenum)-1)}><button>Previous Page</button></Link>);
}

export default async function Pages({ params }) {
  params=await params;
  const mons = await getMons(params.pagenum);
  return (
    <div className={`${styles.page} centering`}>
      <main className={styles.main}>
          <h1 className="welcome-page">Welcome to the Pokedex</h1>
          {mons.map((mon)=>(
          <Link href={'/pokemons/'+(mon.url.substring(34))} key={(mons.indexOf(mon)+1+(20*(params.pagenum-1)))}>
            <table className="front-page" key={mons.indexOf(mon)+1}>
            <tbody>
              <tr>
                <th>Index Number: </th>
                <th>Name: </th>
              </tr>
              <tr>
                <td>{mons.indexOf(mon)+1+(20*(params.pagenum-1))}</td>
                <td>{mon.name.charAt(0).toUpperCase() + mon.name.slice(1)}</td>
                <td><Image src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+mon.url.slice(34,-1)+".png"} width={150} height={150} alt="Default Sprite"/></td>
              </tr>
            </tbody>
          </table>
        </Link>
        ))}
        <footer>
        <Link href={"/1"}><button>First Page</button></Link>
        <PrevButton pagenum={params.pagenum}/>
        <NextButton pagenum={params.pagenum}/>
        <Link href={"/68"}><button>Last Page</button></Link>
        </footer>
      </main>
    </div>
  );
}
