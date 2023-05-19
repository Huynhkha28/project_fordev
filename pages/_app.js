import '@/styles/globals.css'
import '../components/Header/Header.module.scss';
import '../pages/login/index.css'
import Link from 'next/link';
export default function App({ Component, pageProps }) {

  return <Component {...pageProps} />
}
