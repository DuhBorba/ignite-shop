import { Handbag } from "@phosphor-icons/react"
import Image from "next/image"
import Link from "next/link"
import { HeaderContainer } from "./styles"

import logoImg from '../../assets/logo.svg'
import { Cart } from "../Cart"
import { useRouter } from "next/router"

export const Header = () => {
  const { pathname } = useRouter()

  const showCartButton = pathname !== '/success'

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>
    
      {showCartButton && <Cart />}
    </HeaderContainer>
  )
}