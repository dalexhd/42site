import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

export default function Home() {
	const router = useRouter();

	const getResult = function () {
		fetch('/api/result', {
			method: "GET"
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
			}).catch(error => {
				error = JSON.parse(error.message);
				alert(error.body.error)
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
					Bien!!!
				</h1>

				<p className={styles.description}>
					Parece que esto ya se está acabando...
				</p>

				<div className={styles.grid}>
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={getResult}>
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
