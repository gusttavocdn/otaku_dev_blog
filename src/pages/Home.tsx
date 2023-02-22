import {
  Flex,
  Heading,
  Text,
  VStack,
  Input,
  Card,
  CardHeader,
  CardBody,
  SimpleGrid,
} from '@chakra-ui/react';
import { HomeHeader } from '../components/HomeHeader';
import { PostCard } from '../components/PostCard';
import { SearchForm } from '../components/SearchForm';

export function Home() {
  return (
    <VStack w={'100vw'} h={'100vh'}>
      <VStack w='80%' spacing={10}>
        <HomeHeader />

        <SearchForm />

        <SimpleGrid columns={2} spacing={5} w='80%' maxW='864px'>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </SimpleGrid>
      </VStack>
    </VStack>
  );
}
