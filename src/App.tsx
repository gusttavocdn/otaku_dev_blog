import { ChakraBaseProvider } from '@chakra-ui/react';
import { Home } from './pages/Home';
import { theme } from './styles/theme';

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <Home />
    </ChakraBaseProvider>
  );
}

export default App;
