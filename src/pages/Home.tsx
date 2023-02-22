import { Flex, Heading, Text, VStack, Input } from '@chakra-ui/react';
import { HomeHeader } from '../components/HomeHeader';
import { SearchForm } from '../components/SearchForm';

export function Home() {
  return (
    <VStack w={'100vw'} h={'100vh'}>
      <HomeHeader />

      <SearchForm />
    </VStack>
  );
}
