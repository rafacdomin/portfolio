import PrismicDOM from 'prismic-dom';
import { Document } from 'prismic-javascript/types/documents';

import { Blog, PostComponent, Posts } from '@/styles/components/blog';

interface BlogProps {
  posts: Document[];
}

export default function BlogComponent ({ posts }: BlogProps) {
  return (
    <Blog id="blog">
        <h2>BLOG</h2>

        <Posts>
          {posts.map((post, index) => {
            if(index > 2){
              return null;
            }

            return(
              <PostComponent key={post.id} href={post.data.post_url.url} target="_blank">
                {post.data.image && <img src={post.data.image.url} alt={post.data.image.alt} />}

                <p>{PrismicDOM.RichText.asText(post.data.title)}</p>
              </PostComponent>
            );
          })}
        </Posts>

        <Posts>
          {posts.map((post, index) => {
            if(index < 3){
              return null;
            }

            return(
              <PostComponent key={post.id} href={post.data.post_url.url} target="_blank">
                {post.data.image && <img src={post.data.image.url} alt={post.data.image.alt} />}

                <p>{PrismicDOM.RichText.asText(post.data.title)}</p>
              </PostComponent>
            );
          })}
        </Posts>
      </Blog>
  );
}