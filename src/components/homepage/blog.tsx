import PrismicDOM from 'prismic-dom';
import { Document } from 'prismic-javascript/types/documents';

import { Blog } from '@/styles/components/blog';

interface BlogProps {
  posts: Document[];
}

export default function BlogComponent ({ posts }: BlogProps) {
  return (
    <Blog id="blog">
        <h2>BLOG</h2>

        {posts.map(post => (
          <p key={post.id}>{PrismicDOM.RichText.asText(post.data.title)}</p>
        ))}
      </Blog>
  );
}