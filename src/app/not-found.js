import styles from "./page.module.css";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className={styles.main}>
        <h1 className="centering pokepages">An error occured. We could not find what you're looking for.</h1>
        <Image className="centering" src="/psyduck_confusion.jpg" width={400} height={500} alt="Confused Psyduck"/>
    </main>
  )
}
