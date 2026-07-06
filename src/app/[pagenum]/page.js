import Link from "next/link";
import styles from "./page.module.css";
async function getMons(id) {
    const res=await fetch('https://pokeapi.co/api/v2/pokemon?offset='+(20*(id-1))+'&limit=20');
    const data= await res.json();
    return data.results;
}


export default async function Pages({ params }) {
  params=await params;
  const mons = await getMons(params.pagenum);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <h1>Welcome to the Pokedex</h1>
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
              </tr>
            </tbody>
          </table>
        </Link>
        ))}
        <Link href={"/"+(parseInt(params.pagenum)-1)}><button>Previous Page</button></Link>
        <Link href={"/"+(parseInt(params.pagenum)+1)}><button>Next Page</button></Link>
      </main>
    </div>
  );
}
