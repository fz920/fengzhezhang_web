import {FC, memo} from 'react';

import Page from '../../components/Layout/Page';
import BlogPostCard from '../../components/Sections/Blog/BlogPostCard';
import {blogPosts} from '../../data/data';

const BlogIndex: FC = memo(() => {
  return (
    <Page
      description="Machine Learning and AI blog posts by Fengzhe Zhang"
      title="Blog - Fengzhe Zhang"
    >
      <div className="min-h-screen bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-neutral-900 mb-4 lg:text-5xl">
              Blog
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Thoughts and insights on machine learning, research, and technology
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </Page>
  );
});

BlogIndex.displayName = 'BlogIndex';
export default BlogIndex;