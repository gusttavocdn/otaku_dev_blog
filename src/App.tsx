import { ChakraBaseProvider } from '@chakra-ui/react';

import { Routes } from './Routes';
import { theme } from './styles/theme';

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <Routes />
    </ChakraBaseProvider>
  );
}

export default App;
