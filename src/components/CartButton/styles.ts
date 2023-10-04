import { styled } from "@/styles";

export const CartButtonContainer = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  borderRadius: 6,
  position: "relative",
  cursor: 'pointer',

  "&:disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },

  '&:not(:disabled):hover': {
    svg: {
      color: '$gray300',
    }
  },
  
  svg: {
    fontSize: 24,
  },

  variants: {
    color: {
      gray: {
        background: "$gray800",
        color: "$gray500",
        width: "3rem",
        height: "3rem",
      },
      green: {
        background: '$green500',
        color: '$white',

        "&:disabled": {
          opacity: 0.6,
          cursor: "not-allowed",
        },
      
        '&:not(:disabled):hover': {
          background: '$green300',
          svg: {
            color: '$white',
          }
        },
      },
    },
    size: {
      medium: {
        width: "3rem",
        height: "3rem",
        svg: {
          fontSize: 24,
        },
      },
      large: {
        width: "3.5rem",
        height: "3.5rem",
        svg: {
          fontSize: 32,
        },
      }
    }
  },

  defaultVariants: {
    color: "gray",
    size: "medium",
  }
})