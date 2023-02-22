import { VStack } from '@chakra-ui/react';
import { PostHeader } from '../components/PostHeader';

export function Post() {
  return (
    <VStack w={'100vw'} h={'100vh'}>
      <VStack w='80%' spacing={10}>
        <PostHeader></PostHeader>
      </VStack>
    </VStack>
  );
}
