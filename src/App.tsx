import { ChakraBaseProvider } from '@chakra-ui/react';
import { Home } from './pages/Home';
import { Post } from './pages/Post';
import { theme } from './styles/theme';

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <Post />
    </ChakraBaseProvider>
  );
}

export default App;
