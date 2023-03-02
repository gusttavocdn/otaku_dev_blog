import { Flex, FormControl, Heading, Input, Text } from '@chakra-ui/react';
import { usePosts } from '../hooks/usePosts';

export function SearchForm() {
  const { getFilteredPosts, posts } = usePosts();

  return (
    <Flex flexDir={'column'} maxW={'864px'} w='100%'>
      <Flex mb={4} justifyContent='space-between'>
        <Heading alignSelf='self-start' as='h2' fontSize='xl'>
          Publicações
        </Heading>
        <Text alignSelf='self-end' fontSize='sm'>
          {posts?.length} {posts?.length === 1 ? 'publicação' : 'publicações'}
        </Text>
      </Flex>
      <FormControl>
        <Input
          borderRadius='6px'
          h='50px'
          px='12px'
          py='16px'
          placeholder='Buscar conteúdo'
          w='100%'
          onChange={({ target }) => getFilteredPosts(target.value)}
        />
      </FormControl>
    </Flex>
  );
}
