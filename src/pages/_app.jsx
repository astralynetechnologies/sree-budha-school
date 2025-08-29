import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* This will wrap all pages */}
      <Component {...pageProps} />
    </>
  )
}
