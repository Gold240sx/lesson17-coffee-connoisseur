import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../components/banner'

export default function Home() {
  //console.log("styles", styles)

  const handleOnBannerBtnClick = () => {
    console.log("banner button clicked")
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner buttonText="View nearby stores!" handleOnClick={handleOnBannerBtnClick}/>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
