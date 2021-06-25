import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Qr from "../public/images/1AE8F5E8A1DD1718ED27ABAB94879D.svg";

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
          1/8
        </h1>
        <p className="justify-center">Pide a un compañer@ que escanee este código QR. Recuerda, este proceso se tiene que hacer 8 veces, y con distintas personas.</p>
        <Qr style={{ height: 350 }} />
      </main>

      <footer className={styles.footer}>
        Hecho con mucho amor por un grupo de estudiantes
      </footer>
    </div>
  )
}
