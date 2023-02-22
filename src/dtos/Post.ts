type Post = {
  id: number;
  url: string;
  title: string;
  body: string;
  number: number;
  created_at: string;
  comments: number;
  user: {
    login: string;
  };
};

export type { Post };
