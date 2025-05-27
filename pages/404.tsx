import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Link href={'/'} className={styles.container}>
        Home
      </Link>
    </>
  )
}

export default Home
