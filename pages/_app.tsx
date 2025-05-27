import '../styles/globals.css'

declare global {
  interface Window {
    adoptChangeClasses: any
  }
}

function MyApp({ Component, pageProps }: any) {
  return <Component {...pageProps} />
}

export default MyApp
