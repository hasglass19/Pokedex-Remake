import Image from "next/image";
import styles from "./page.module.css";
async function getMons() {
    const res=await fetch('https://pokeapi.co/api/v2/pokemon')

    const data=await res.json();
    return data.results;
}

function tableRow (idurl){
  idurl=parseInt(idurl);
  if (idurl%1==0)
    return(<div></div>);
}


export default async function Home() {
  const mons = await getMons()
  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <h1>Welcome to the Pokedex</h1>
          {mons.map((mon)=>(<table>
            <tbody>
              <tr>
                <th>Index Number: </th>
                <th>Name: </th>
              </tr>
              <tr>
                <td>{mon.url.substring(34,mon.url.length-1)}</td>
                <td>{mon.name.charAt(0).toUpperCase() + mon.name.slice(1)}</td>
              </tr>
            </tbody>
          </table>))}
      </main>
    </div>
  );
}
