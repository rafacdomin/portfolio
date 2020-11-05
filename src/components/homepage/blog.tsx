import { useMemo } from 'react';
import PrismicDOM from 'prismic-dom';
import { Document } from 'prismic-javascript/types/documents';
import Image from 'next/image';

import ArrayToMatrix from '@/utils/arrayToMatrix';

import { Blog, PostComponent, Posts } from '@/styles/components/blog';

interface BlogProps {
  posts: Document[];
}

export default function BlogComponent ({ posts }: BlogProps) {
  const organizedPosts = useMemo(() => ArrayToMatrix<Document>(posts, 3) ,[posts]);

  return (
    <Blog id="blog">
        <h2>BLOG</h2>

        {organizedPosts.map((postsInLine, index) => ( 
          <Posts key={index}>
            {postsInLine.map(post => {
              return(
                <PostComponent key={post.id} href={post.data.post_url.url} target="_blank">
                  <Image 
                    src={post.data.image.url} 
                    alt={post.data.image.alt} 
                    unsized
                  />

                  <p>{PrismicDOM.RichText.asText(post.data.title)}</p>
                </PostComponent>
              );
            })}
          </Posts>
        ))}
      </Blog>
  );
}