import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Head from 'next/head'
import PageHeader from '../components/Navbar'
import Footer from '../components/Footer'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com"  />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Montserrat+Alternates:wght@700&family=Roboto+Mono&display=swap" rel="stylesheet" />
    </Head>
    <PageHeader />
    <Component {...pageProps} />
    <Footer />

    </>
  )
}

export default MyApp
