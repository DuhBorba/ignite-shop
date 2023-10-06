import { MouseEvent } from "react";

import { CartButton } from "../CartButton"

import * as Dialog from '@radix-ui/react-dialog';
import { CartClose, CartContent, CartFinalization, CartProduct, CartProductDetails, CartProductImage, FinalizationDetails } from "./styles";
import { X } from "@phosphor-icons/react";
import Image from "next/image";

import ImageTshirt from '../../assets/tshirt.png'
import { useCart } from "@/hook/useCart";

export const Cart = () => {
  const { cartItems, removeCartItem, cartTotal } = useCart()
  const cartQuantity = cartItems.length

  const formattedCartTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cartTotal)

  function handleRemoveCartItem(e: MouseEvent<HTMLButtonElement>, productId: string){
    e.preventDefault()
    removeCartItem(productId)
  }

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
            {cartQuantity <= 0 && <p>Parece que seu carrinho está vario :(</p>}

            {cartItems.map(cartItem => (
              <CartProduct 
                key={cartItem.id}
                href={`/product/${cartItem.id}`}
                prefetch={false}
              >
                <CartProductImage>
                  <Image 
                    width={100}
                    height={93}
                    alt=""
                    src={cartItem.imageUrl}
                  />
                </CartProductImage>
                <CartProductDetails>
                  <p>{cartItem.name}</p>
                  <strong>{cartItem.price}</strong>
                  <button onClick={(e) => handleRemoveCartItem(e, cartItem.id)}>
                    Remover
                  </button>
                </CartProductDetails>
              </CartProduct>
            ))}
          </section>

          <CartFinalization>
            <FinalizationDetails>
              <div>
                <span>Quantidade</span>
                {
                  cartQuantity === 1 ? 
                  <p>{cartQuantity} item</p> :
                  <p>{cartQuantity} itens</p>
                }
              </div>
              <div>
                <span>Valor Total</span>
                <p>{formattedCartTotal}</p>
              </div>
            </FinalizationDetails>
            <button>Finalizar compra</button>
          </CartFinalization>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}