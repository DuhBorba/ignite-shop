import { CartButton } from "../CartButton"

import * as Dialog from '@radix-ui/react-dialog';
import { CartClose, CartContent, CartProduct } from "./styles";
import { X } from "@phosphor-icons/react";

export const Cart = () => {
  
  return (
    <Dialog.Root>    
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>
      
      <Dialog.Portal>
        <Dialog.Overlay />
        <CartContent>
          <CartClose>
            <X size={24} weight="bold" />
          </CartClose>
          <Dialog.Title>
            Sacola de compras
          </Dialog.Title>
          <section>
            <CartProduct>
              <p>Parece que seu carrinho está vario :(</p>
            </CartProduct>
          </section>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}