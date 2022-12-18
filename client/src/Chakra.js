import {
  ChakraProvider,
  ColorModeScript,
  cookieStorageManagerSSR,
  localStorageManager,
} from '@chakra-ui/react';

import theme from './theme';

export function Chakra({ cookies, startAppName }) {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager;

  return (
    <ChakraProvider colorModeManager={colorModeManager} theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />

      {startAppName}
      
    </ChakraProvider>
  );
}


