import {FC, memo} from 'react';

import {blogPosts, SectionId} from '../../../data/data';
import Section from '../../Layout/Section';
import BlogPostCard from './BlogPostCard';

const Blog: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Blog}>
      <div className="flex flex-col items-center gap-y-8">
        <div className="flex flex-col items-center gap-y-2">
          <h2 className="text-xl font-bold text-black">Latest Blog Posts</h2>
          <p className="prose prose-sm text-neutral-600 sm:prose-base">
            Thoughts and insights on machine learning, research, and technology
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </Section>
  );
});

Blog.displayName = 'Blog';
export default Blog;