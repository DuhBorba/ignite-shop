import { Handbag } from "@phosphor-icons/react"
import { CartButtonContainer } from "./styles"
import { ComponentProps } from "@stitches/react"

type CartButtonProps = ComponentProps<typeof CartButtonContainer>

export const CartButton = ({...rest}: CartButtonProps) => {
  return (
    <CartButtonContainer {...rest}>
      <Handbag weight="bold" />
    </CartButtonContainer>
  )
}