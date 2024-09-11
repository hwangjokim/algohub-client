import { theme } from "@/styles/themes.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const avatarStyle = recipe({
  base: {
    borderRadius: '50%',
    overflow: 'hidden',
  },
  variants: {
    size: {
      mini: {
        width: '2rem',
        height: '2rem'
      },
      small: {
        width: '3.9rem',
        height: '3.9rem'
      },
      medium: {
        width: '8.2rem',
        height: '8.2rem'
      },
      large: {
        width: '12rem',
        height: '12rem'
      }
    },
    isShadow: {
      true: {
        border: `0.5px solid ${theme.color.purple}`,
        boxShadow: `0px 0px 4px 0px ${theme.color.purple}`
      }
    }
  }
})
export const imageStyle = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover'
})