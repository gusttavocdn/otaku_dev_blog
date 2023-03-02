import { Card, CardHeader, Heading, CardBody, Text } from '@chakra-ui/react';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Link } from './Link';

type Props = {
  title: string;
  body: string;
  issue: number;
  date: string;
};

export function PostCard({ title, body, issue, date }: Props) {
  const formattedDate = formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: ptBR,
  });

  return (
    <Link to={`/posts/${issue}`}>
      <Card
        bg='base.post'
        minH='250px'
        pt={5}
        borderRadius='md'
        borderColor='base.border'
        borderWidth='1.5px'
      >
        <CardHeader
          color='base.title'
          display='flex'
          justifyContent='space-between'
        >
          <Heading fontSize='xl' flex={1}>
            {title}
          </Heading>
          <Text as='span'>{formattedDate}</Text>
        </CardHeader>
        <CardBody color='base.text' pt={2}>
          <Text noOfLines={4}>{body}</Text>
        </CardBody>
      </Card>
    </Link>
  );
}
