
import { Inter } from 'next/font/google'
import Link from 'next/link'
import MyPage from './login/mypage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Link href="/login">Login</Link>
      <MyPage />
    

    </>
  )
}

