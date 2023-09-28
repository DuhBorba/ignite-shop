import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  '.cart': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '3rem',
    height: '3rem',
    background: '$gray800',
    borderRadius: 6,

    '&:hover': {
      svg: {
        color: '$gray300',
      }
    },
    
    svg: {
      color: '$gray500',
    }
  }
})