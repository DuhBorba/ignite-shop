import { styled } from '..'

export const HomeContainer = styled('main', {
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  minHeight: 656
})

export const SliderContainer = styled('div', {
  display: 'flex',
  gap: '3rem',
  margin: '0 auto',

  '.embla__slide': {
    minWidth: '43.5rem',
  }
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  minHeight: 656,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '1.25rem',
    cursor: 'auto',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: '0.2s ease-in-out',

    strong: {
      display: 'block',
      fontSize: '$lg',
      color: '$gray100',
      marginBottom: '0.25rem'
    },
    
    span: {
      display: 'block',
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300'
    },

    a: {
      textDecoration: 'none',
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1
    }
  }
})

export const ShadowContainer = styled('div', {
  div: {
    height: '100%',
    width: '8.5rem',

    '&:first-child': {
      position: 'absolute',
      top: 0,
      left: 0,
      background: 'linear-gradient(90deg, rgba(18, 18, 20, 0.75) 0%, rgba(18, 18, 20, 0.00) 100%);',
      zIndex: 1,
    },
    '&:last-child': {
      position: 'absolute',
      top: 0,
      right: 0,
      background: 'linear-gradient(90deg, rgba(18, 18, 20, 0.00) 0%, rgba(18, 18, 20, 0.75) 100%);',
      zIndex: 1,
    }
  }
})

export const ButtonSliderContainer = styled('div', {
  button: {
    color: '$gray300',
    height: '100%',
    width: '8.5rem',
    background: 'none',
    border: 'none',

    '&:first-child': {
      position: 'absolute',
      top: '50%',
      left: 0,
      transform: 'translateY(-50%)',
      textAlign: 'left',
      paddingLeft: '1rem',
      zIndex: 2,
    },
    '&:last-child': {
      position: 'absolute',
      top: '50%',
      right: 0,
      transform: 'translateY(-50%)',
      textAlign: 'right',
      paddingRight: '1rem',
      zIndex: 2,
    },

    '&:disabled': {
      opacity: 0,
      cursor: 'auto',
    },

    '&:not(:disabled):hover': {
      color: '$white',
    }
  }
})