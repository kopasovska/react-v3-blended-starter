// import { fetchPosts } from '@/lib/api';

import PostList from '@/components/PostList/PostList';
import { fetchPosts } from '@/lib/api';
import PostsClient from './Posts.client';

interface PostsPageParams {
  params: Promise<{ slug: string[] }>;
}

export default async function PostsPage({ params }: PostsPageParams) {
  const { slug } = await params;
  const userId = slug[0];

  const data = await fetchPosts({
    searchText: '',
    page: 1,
    ...(userId && userId !== 'All' && { userId }),
  });

  return <PostsClient initialData={data} userId={userId} />;
}
