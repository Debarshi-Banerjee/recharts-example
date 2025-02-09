import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.main}>
        Here are some recharts examples
        <ul>
          <li>
            <Link href="/ScatterCharts"><a target="_blank">Scatter Charts</a></Link>
          </li>
          <li>
            <Link href="/HorBarChart"><a target="_blank">Horizental Bar Chart</a></Link>
          </li>
          <li>
            <Link href="/LineChart"><a target="_blank">Line Chart</a></Link>
          </li>
          
          <li>
            <Link href="/BubbleChart"><a target="_blank">Bubble Chart</a></Link>
          </li>
        </ul>
      </main>

      <footer className={styles.footer}>
        Powered by Imaginations
      </footer>
    </div>
  )
}
