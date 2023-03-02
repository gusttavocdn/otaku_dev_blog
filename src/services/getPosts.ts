import { type Post } from '../dtos/Post';
import { api } from '../lib/axios';

export async function getPosts(searchParams = ''): Promise<Post[]> {
  console.log('searchParams', searchParams);
  const { data } = await api.get(`/search/issues?q${searchParams}=%20repo:gusttavocdn/otaku_dev_blog`);
  return data.items;
}
