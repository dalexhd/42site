import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import rocketGif from '../public/images/rocket.gif'
import { useRouter } from 'next/router'

export default function Home() {
	const [hash, setHash] = useState('');
	const router = useRouter();

	const checkHash = function () {
		fetch('/api/verify?hash=' + hash, {
			method: "POST"
		})
			.then(response => response.json())
			.then(data => {
				if (typeof data.redirect !== "undefined") {
					router.push(data.redirect, undefined, { shallow: true });
				}
			});
	}

	return (
		<div className={styles.container + " dark:bg-gray-800"}>
			<Head>
				<title>Reto 42</title>
				<meta name="description" content="Reto 42" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h3 className={styles.title + " text-white"}>
					&quot;A diferencia de las cryptos, durante la piscina,<br></br>el mayor beneficio lo obtienes controlando las horas de sueño.&quot;
				</h3>
				<iframe
					className="mt-8 mb-8"
					width="40%"
					height="100"
					scrolling="no"
					frameBorder="no"
					allow="autoplay"
					src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/5424816&amp;auto_play=true"
				>
				</iframe>
				<Image src={rocketGif} alt="Rocket" />
			</main>
			<footer className={styles.footer + " text-white"}>
				Hecho con mucho amor por un grupo de estudiantes
			</footer>
		</div >
	)
}
