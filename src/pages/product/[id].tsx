import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import { useRouter } from "next/router"

export default function Product(){
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut debitis accusantium, culpa voluptas obcaecati dolores eveniet, ut tenetur aliquam repellat voluptate non tempora, quo esse incidunt amet vitae itaque tempore!</p>
      
        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}