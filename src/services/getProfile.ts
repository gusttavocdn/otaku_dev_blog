import { api } from '../lib/axios';

type User = {
  id: number
  login: string
  avatar_url: string
  html_url: string
  name: string
  public_repos: string
  followers: number
  company: string
  twitter_username: string
  bio: string
};

export async function getProfile(username: string): Promise<User> {
  const { data } = await api.get<User>(`/users/${username}`);
  return data;
}
