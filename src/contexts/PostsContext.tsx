import { useQuery } from '@tanstack/react-query';
import { createContext, useState, type ReactNode } from 'react';
import { type Post } from '../dtos/Post';
import { getPosts } from '../services/getPosts';

type PostsContextData = {
  posts: Post[] | undefined;
  getFilteredPosts: (searchString: string) => void;
};

export const PostsContext = createContext({} as PostsContextData);

type PostsProviderProps = {
  children: ReactNode;
};

export function PostsProvider({ children }: PostsProviderProps) {
  const [searchString, setSearchString] = useState('');
  const { data } = useQuery(['posts'], async () => await getPosts());

  const searchStringToLowerCase = searchString.toLowerCase();

  const getFilteredPosts = (searchString: string) => {
    setSearchString(searchString);
  };

  const posts = data?.filter(
    (post) =>
      post.title.toLowerCase().includes(searchStringToLowerCase.trim()) ||
      post.body.toLowerCase().includes(searchStringToLowerCase.trim())
  );

  return (
    <PostsContext.Provider value={{ posts, getFilteredPosts }}>
      {children}
    </PostsContext.Provider>
  );
}
