import { Flex, Heading, Input, Text } from '@chakra-ui/react';

export function SearchForm() {
  return (
    <Flex flexDir={'column'} maxW={'864px'} w='100%'>
      <Flex mb={4} justifyContent='space-between'>
        <Heading alignSelf='self-start' as='h2' fontSize='xl'>
          Publicações
        </Heading>
        <Text alignSelf='self-end' fontSize='sm'>
          6 publicações
        </Text>
      </Flex>
      <Input
        borderRadius='6px'
        h='50px'
        px='12px'
        py='16px'
        placeholder='Buscar conteúdo'
        w='100%'
      />
    </Flex>
  );
}
