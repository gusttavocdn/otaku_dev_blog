import { VStack } from '@chakra-ui/react';
import { HomeHeader } from '../components/HomeHeader';
import { PostsList } from '../components/PostsList';
import { SearchForm } from '../components/SearchForm';

export function Home() {
  return (
    <VStack w={'100vw'} h={'100vh'}>
      <VStack w='80%' spacing={10}>
        <HomeHeader />

        <SearchForm />

        <PostsList />
      </VStack>
    </VStack>
  );
}
