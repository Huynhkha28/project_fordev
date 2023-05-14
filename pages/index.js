
import { Inter } from 'next/font/google'
import Link from 'next/link'
//import  from './login/mypage'
import Login from './login/index'
const inter = Inter({ subsets: ['latin'] })
import Header from '/components/Header/Header';
export default function Home() {
  return (
    <>
      
      <Header/>
    </>
  )
}

