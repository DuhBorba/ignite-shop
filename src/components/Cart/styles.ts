import { styled } from "@/styles";
import * as Dialog from '@radix-ui/react-dialog';

export const CartContent = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  width: '30rem',
  background: '$gray800',
  padding: '3rem',
  paddingTop: '4.5rem',
  boxShadow: '-4px 0px 30px 0px rgba(0, 0, 0, 0.80);',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 10,

  h2: {
    fontWeight: 700,
    fontSize: '$lg',
    color: '$gray100',
    marginBottom: '2rem',
  }
})

export const CartClose = styled(Dialog.Close, {
  background: 'none',
  border: 'none',
  color: '$gray500',
  position: 'absolute',
  top: '1.75rem',
  right: '1.75rem',

  '&:hover': {
    color: '$gray100',
  }
})

export const CartProduct = styled('div', {
  width: '100%',
  height: '5.8125rem',
  display: 'flex',
  alignContent: 'center',
  gap: '1.25rem',
})

export const CartProductImage = styled('div', {
  width: '6.3125rem',
  height: '5.8125rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,

  img: {
    background: 'cover',
  }
})

export const CartProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',

  p: {
    color: '$gray300',
    fontSize: '$md'
  },

  strong: {
    marginTop: 4,
    fontSize: '$md',
    fontWeight: '700',
  },

  button: {
    marginTop: 'auto',
    width: 'max-content',
    background: 'none',
    border: 'none',
    color: '$green500',
    fontSize: '1rem',
    fontWeight: 700,
    
    '&:hover': {
      color: '$green300',
    }
  }
})

export const CartFinalization = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 'auto',

  button: {
    width: '100%',
    background: '$green500',
    color: '$white',
    fontSize: '$md',
    height: '4.3125rem',
    border: 'none',
    borderRadius: 8,
    fontWeight: 700,

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      background: '$green300',
    }
  }
})

export const FinalizationDetails = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  marginBottom: 55,

  div: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    p: {
      fontSize: '$md',
      color: '$gray300',
    },

    '&:last-child': {
      fontWeight: 'bold',

      span: {
        fontSize: '$md',
      },

      p: {
        color: '$gray100',
        fontSize: '$xl',
      }
    }
  }
})