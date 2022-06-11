import '../styles/globals.css'
import '../styles/global.scss'
import {SSRProvider} from '@react-aria/ssr'

function MyApp({ Component, pageProps }) {
  return <SSRProvider>
    <Component {...pageProps} />
  </SSRProvider>
}

export default MyApp
