import { SimpleGrid } from '@chakra-ui/react';
import { usePosts } from '../hooks/usePosts';
import { PostCard } from './PostCard';

export function PostsList() {
  const { posts } = usePosts();

  return (
    <SimpleGrid columns={[1, 1, 1, 2]} spacing={5} w='full' maxW='864px'>
      {posts?.map((post, i) => (
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
