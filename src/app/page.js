import styles from "./page.module.css";
import Link from "next/link";
export default function Home(){
    return(
    <div className={styles.page}>
        <main className={styles.main}>
            <h1 className="welcome-page">Welcome to the Pokedex</h1>
            
            <Link href={"/1"}><button>Enter</button></Link>
        </main>
    </div>);
}