import { CartButton } from "../CartButton"

import * as Dialog from '@radix-ui/react-dialog';
import { CartClose, CartContent, CartFinalization, CartProduct, CartProductDetails, CartProductImage, FinalizationDetails } from "./styles";
import { X } from "@phosphor-icons/react";
import Image from "next/image";

import ImageTshirt from '../../assets/tshirt.png'

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
              {/* <p>Parece que seu carrinho está vario :(</p> */}
              <CartProductImage>
                <Image 
                  width={100}
                  height={93}
                  alt=""
                  src={ImageTshirt}
                />
              </CartProductImage>
              <CartProductDetails>
                <p>Produto 1</p>
                <strong>R$ 50,00</strong>
                <button>Remover</button>
              </CartProductDetails>
            </CartProduct>
          </section>

          <CartFinalization>
            <FinalizationDetails>
              <div>
                <span>Quantidade</span>
                <p>2 itens</p>
              </div>
              <div>
                <span>Valor Total</span>
                <p>R$ 100,00</p>
              </div>
            </FinalizationDetails>
            <button>Finalizar compra</button>
          </CartFinalization>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}