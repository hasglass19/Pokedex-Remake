import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
export default function Home(){
    return(
    <div className={styles.page}>
        <main className={styles.main}>
            <h1 className="welcome-page">Click on the device to open the Pokedex</h1>
            
            <Link href={"/1"}><Image className="centering" src={"/PokedexDevice.png"} width={681} height={500} alt="Pokedex" /></Link>
        </main>
    </div>);
}