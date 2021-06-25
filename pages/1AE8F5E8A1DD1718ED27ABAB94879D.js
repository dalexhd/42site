import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Qr from "../public/images/2CFC9CAB44CFECDC69E9C8F5821D6F.png";

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
          1/4
        </h1>
        <p className="justify-center">Pide a un compañer@ que escaneé este código QR. Recuerda, este proceso se tiene que hacer 4 veces, y con distintas personas.</p>
        <Image src={Qr} height={350} width={350} />
      </main>

      <footer className={styles.footer}>
        Hecho con mucho amor por un grupo de estudiantes
      </footer>
    </div>
  )
}
