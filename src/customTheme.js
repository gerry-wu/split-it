import { theme } from '@chakra-ui/core'

//default theme: https://github.com/chakra-ui/chakra-ui/blob/master/packages/chakra-ui/src/theme/

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: '#1e4e8c',
  },
}

export default customTheme
