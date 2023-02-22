import { type Post } from '../dtos/Post';
import { api } from '../lib/axios';

export async function getPost(postNumber: string): Promise<Post> {
  const { data } = await api.get(
    `repos/gusttavocdn/otaku_dev_blog/issues/${postNumber}`
  );
  return data;
}
