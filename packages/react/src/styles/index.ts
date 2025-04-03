import { createStitches, defaultThemeMap } from '@stitches/react'

import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@ui-kit/tokens'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },

  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
})
