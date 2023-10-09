import React, { MouseEvent } from 'react'

import { GetStaticProps } from "next";
import { stripe } from "@/lib/stripe";
import { ButtonSliderContainer, HomeContainer, Product, ShadowContainer, SliderContainer } from "@/styles/pages/home";
import Image from "next/image";

import Head from "next/head";

import Link from "next/link";

import Stripe from "stripe";
import { CartButton } from "@/components/CartButton";
import { useCallback } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

import useEmblaCarousel, {
  EmblaCarouselType
} from 'embla-carousel-react'
import { IProduct } from '@/contexts/CartContext';
import { useCart } from '@/hook/useCart';

interface HomeProps{
  products: IProduct[]
}

export default function Home({ products }: HomeProps) {
  const { addToCart, verifyItemAlreadyExists } = useCart()

  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true)

  const [ emblaRef, emblaApi ] = useEmblaCarousel({
    align: 'start',
    skipSnaps: false,
    dragFree: true,
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])


  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  React.useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  function handleAddToCart(e: MouseEvent<HTMLButtonElement>, product: IProduct) {
    e.preventDefault()
    addToCart(product)
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <div style={{position: 'relative', overflow: 'hidden', width: '100%'}}>
        <ShadowContainer>
          <div></div>
          <div></div>
        </ShadowContainer>
        <HomeContainer>
          <div className="embla" ref={emblaRef}>
            <SliderContainer className="embla__container container">
              {products.map(product => {
                return (
                  <Product key={product.id} className="embla__slide">
                    <Link href={`/product/${product.id}`} prefetch={false} >
                      <Image src={product.imageUrl} width={520} height={480} alt="" />

                      <footer>
                        <div>
                          <strong>{product.name}</strong>
                          <span>{product.price}</span>
                        </div>
                        <div>
                          <CartButton 
                            color="green" 
                            size="large" 
                            onClick={(e) => handleAddToCart(e, product)}
                            disabled={verifyItemAlreadyExists(product.id)}
                          />
                        </div>
                      </footer>
                    </Link>
                  </Product>
                )
              })}
            </SliderContainer>
          </div>
        </HomeContainer>
        <ButtonSliderContainer>
          <button className="embla__prev" disabled={prevBtnDisabled} onClick={scrollPrev}>
            <CaretLeft size={48} />
          </button>
          <button className="embla__next" disabled={nextBtnDisabled} onClick={scrollNext}>
            <CaretRight size={48} />
          </button>
        </ButtonSliderContainer>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount as number / 100 ),
      numberPrice: price.unit_amount as number / 100,
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours
  }
}
