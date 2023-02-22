import { Card, CardHeader, Heading, CardBody, Text } from '@chakra-ui/react';

export function PostCard() {
  return (
    <Card bg='base.post' minH='250px' maxW='416px' pt={5}>
      <CardHeader
        color='base.title'
        display='flex'
        justifyContent='space-between'
      >
        <Heading fontSize='xl' flex={1}>
          JavaScript data types and data structures
        </Heading>
        <Text as='span'>Há 1 dia</Text>
      </CardHeader>
      <CardBody color='base.text' pt={2}>
        Programming langues all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data strcutres. available in...
      </CardBody>
    </Card>
  );
}
