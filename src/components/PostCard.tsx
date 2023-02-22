import { Card, CardHeader, Heading, CardBody, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

type Props = {
  title: string;
  body: string;
  issue: number;
};

export function PostCard({ title, body, issue }: Props) {
  return (
    <Link to={`/posts/${issue}`}>
      <Card bg='base.post' minH='250px' maxW='416px' pt={5}>
        <CardHeader
          color='base.title'
          display='flex'
          justifyContent='space-between'
        >
          <Heading fontSize='xl' flex={1}>
            {title}
          </Heading>
          <Text as='span'>Há 1 dia</Text>
        </CardHeader>
        <CardBody color='base.text' pt={2}>
          <Text noOfLines={4}>{body}</Text>
        </CardBody>
      </Card>
    </Link>
  );
}
