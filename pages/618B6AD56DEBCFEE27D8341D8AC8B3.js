import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Qr from "../public/images/7515C3E476AE2C11671DDB9CE6297C.png";

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
        <Image src={Qr} height={350} width={350} />
      </main>

      <footer className={styles.footer}>
        Hecho con mucho amor por un grupo de estudiantes
      </footer>
    </div>
  )
}
