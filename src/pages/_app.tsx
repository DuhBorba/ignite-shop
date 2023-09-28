import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'

import logoImg from '../assets/logo.svg'
import { Container, Header } from '@/styles/pages/app'

import Image from 'next/image'
import Link from 'next/link'
import { Handbag } from '@phosphor-icons/react/dist/ssr/Handbag'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>
        <Link href='' className='cart'>
          <Handbag size={24} />
        </Link>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
