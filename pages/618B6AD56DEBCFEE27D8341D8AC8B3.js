import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Qr from "../public/images/618B6AD56DEBCFEE27D8341D8AC8B3.svg";

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Reto 42</title>
        <meta name="description" content="Reto 42" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <h1 className={styles.title}>
          6/8
        </h1>
        <Qr style={{ height: 350 }} />
      </main>

      <footer className={styles.footer}>
        Hecho con mucho amor por un grupo de estudiantes
      </footer>
    </div>
  )
}
