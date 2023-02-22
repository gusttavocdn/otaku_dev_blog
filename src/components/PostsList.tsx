import { SimpleGrid } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../services/getPosts';
import { PostCard } from './PostCard';

export function PostsList() {
  const { data } = useQuery(['post'], async () => await getPosts());

  if (!data) return null;

  return (
    <SimpleGrid columns={[1, 1, 1, 2]} spacing={5} w='full' maxW='864px'>
      {data.length > 0 &&
        data.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            body={post.body}
            issue={post.number}
          />
        ))}
    </SimpleGrid>
  );
}
