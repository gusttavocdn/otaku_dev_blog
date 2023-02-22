import { VStack, Box } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { PostHeader } from '../components/PostHeader';
import { getPost } from '../services/getPost';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export function Post() {
  const params = useParams();

  const { data } = useQuery(
    ['post'],
    async () => await getPost(params.id as string)
  );

  return (
    <VStack w={'100vw'} h={'100vh'}>
      {data?.user && (
        <VStack w='80%' spacing={10}>
          <PostHeader
            title={data.title}
            user={data.user}
            comments={data.comments}
          />
          <Box
            w='80%'
            maxW='864px'
            overflowX='auto'
            whiteSpace='pre-wrap'
            overflow='hiden'
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {data.body}
            </ReactMarkdown>
          </Box>
        </VStack>
      )}
    </VStack>
  );
}
