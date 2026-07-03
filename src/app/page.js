import Image from "next/image";
import styles from "./page.module.css";
async function getMons() {
    const res=await fetch('https://pokeapi.co/api/v2/pokemon')

    const data=await res.json()
    return data.results
}

export default async function Home() {
  const mons = await getMons()
  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <h1>Welcome to the Pokedex</h1>
          <table>{mons.map((mon)=>(
            <tbody>
              <tr>
                <th>Index Number: </th>
                <th>Name: </th>
              </tr>
              <tr>
                <td>{mon.id}</td>
                <td>{mon.name}</td>
              </tr>
            </tbody>))}
          </table>
      </main>
    </div>
  );
}
