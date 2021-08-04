import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import ModalVideo from 'react-modal-video'

export default function Home() {
  const [hash, setHash] = useState('');
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();

  const checkHash = function () {
    fetch('/api/verify?hash=' + hash, {
      method: "POST"
    })
      .then(async (response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(JSON.stringify({ status: response.status, body: await response.json() }))
        }
      })
      .then(data => {
        if (typeof data.redirect !== "undefined") {
          router.push(data.redirect, undefined, { shallow: true });
        }
      }).catch((error) => {
        error = JSON.parse(error.message);
				alert(error.body.error);
        setHash("");
      })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Reto 42</title>
        <meta name="description" content="Reto 42" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido al reto de 42 🚀
        </h1>
        { process.browser && <ModalVideo cli channel='youtube' showinfo={0} autoplay controls={0} isOpen={isOpen} videoId="KQjc9Kx_t9I" onClose={() => setOpen(false)} /> }
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-10" onClick={()=> setOpen(true)}>
            Ver pista
        </button>
        <div className={styles.grid}>
          <label htmlFor="hash">Introduce la clave secreta</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Clave" value={hash} onChange={e => setHash(e.target.value)}></input>
        </div>
        <div className={styles.grid}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={checkHash}>
            Ver resultado
          </button>
        </div>
      </main>
      <footer className={styles.footer}>
        Hecho con mucho amor por un grupo de estudiantes
      </footer>
    </div>
  )
}
