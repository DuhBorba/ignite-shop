import { keyframes } from '@stitches/react'
import { styled } from '../../styles'

const rotation = keyframes ({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
})

export const SpinnerLoading = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
  height: 656,

  span: {
    width: 48,
    height: 48,
    borderRadius: '50%',
    display: 'inline-block',
    borderTop: '3px solid $green300',
    borderRight: '3px solid transparent',
    boxSizing: 'border-box',
    animation: `${rotation} 1s linear infinite`,
  }

})