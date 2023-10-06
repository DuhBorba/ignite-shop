import { ReactNode, createContext, useState } from "react";

export interface IProduct {
  id: string
  name: string
  imageUrl: string
  price: string
  numberPrice: number
  description: string
  defaultPriceId: string
}

interface CartContextData {
  cartItems: IProduct[]
  cartTotal: number
  addToCart: (product: IProduct) => void
  removeCartItem: (productId: string) => void
  verifyItemAlreadyExists: (productId: string) => boolean
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartItems, setCartItems] = useState<IProduct[]>([])

  const cartTotal = cartItems.reduce((total, item) => total + item.numberPrice, 0)

  function removeCartItem(productId: string){
    setCartItems(state => state.filter(item => item.id !== productId))
  }

  function addToCart(product: IProduct){
    if(!verifyItemAlreadyExists(product.id)){
      setCartItems(state => [...state, product])
    }
  }

  function verifyItemAlreadyExists(productId: string) {
    return cartItems.some(item => item.id === productId)
  }
  
  return (
    <CartContext.Provider value={{ cartItems, cartTotal, addToCart, removeCartItem, verifyItemAlreadyExists }}>
      {children}
    </CartContext.Provider>
  )
}