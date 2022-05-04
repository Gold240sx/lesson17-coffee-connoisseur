import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <footer>
      <p>Copyright 2022 Michael Martell</p>
    </footer>
  </>
}

export default MyApp
