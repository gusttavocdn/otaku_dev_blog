import { Heading, VStack } from '@chakra-ui/react';
import { HomeHeader } from '../components/HomeHeader';
import { PostsList } from '../components/PostsList';
import { SearchForm } from '../components/SearchForm';
import { PostsProvider } from '../contexts/PostsContext';

export function Home() {
  return (
    <VStack w={'100vw'} h={'100vh'}>
      <Heading mt={20} mb={10}>
        Otaku Dev
      </Heading>

      <VStack w='80%' spacing={10} mt={20}>
        <HomeHeader />

        <PostsProvider>
          <SearchForm />
          <PostsList />
        </PostsProvider>
      </VStack>
    </VStack>
  );
}
