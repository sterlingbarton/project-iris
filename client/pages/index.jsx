import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  // fetch('/hello')
  // .then(r => r.json())
  // .then(data => console.log(data))
  return (
    <div className={styles.container}>
         <Head>
            <title>IRIS | Home</title>
            <link rel="icon" href="/favicon.ico" /> 
        </Head>

      <main>
      </main>

      <footer>
      </footer>
    </div>
  )
}
