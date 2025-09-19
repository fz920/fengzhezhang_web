import {CalendarIcon, ClockIcon} from '@heroicons/react/24/outline';
import {GetStaticPaths, GetStaticProps} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {FC, memo} from 'react';

import LatexRenderer from '../../components/LaTeX/LatexRenderer';
import Page from '../../components/Layout/Page';
import {blogPosts} from '../../data/data';
import {BlogPost} from '../../data/dataDef';

interface BlogPostPageProps {
  post: BlogPost;
}

const BlogPostPage: FC<BlogPostPageProps> = memo(({post}) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const {title, content, date, readTime, tags, image} = post;

  return (
    <Page
      description={post.excerpt}
      title={`${title} - Fengzhe Zhang`}
    >
      <div className="min-h-screen bg-neutral-50 py-16">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors"
              href="/#blog"
            >
              ← Back to Blog
            </Link>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-neutral-900 mb-4 lg:text-5xl">
              {title}
            </h1>

            <div className="flex items-center gap-x-6 text-neutral-600 mb-4">
              <div className="flex items-center gap-x-2">
                <CalendarIcon className="h-5 w-5" />
                <span>{new Date(date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center gap-x-2">
                <ClockIcon className="h-5 w-5" />
                <span>{readTime}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map(tag => (
                <span
                  className="rounded-full bg-orange-100 px-4 py-2 text-sm text-orange-700 font-medium"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Featured Image */}
          {image && (
            <div className="relative mb-12 h-80 w-full overflow-hidden rounded-lg lg:h-96">
              <Image
                alt={title}
                className="object-cover"
                fill
                src={image}
              />
            </div>
          )}

          {/* Content */}
          <LatexRenderer content={content} />

          {/* Footer */}
          <div className="mt-16 border-t border-neutral-200 pt-8">
            <Link
              className="inline-flex items-center rounded-lg bg-orange-500 px-6 py-3 text-white font-medium transition-colors hover:bg-orange-600"
              href="/#blog"
            >
              ← Back to All Posts
            </Link>
          </div>
        </div>
      </div>
    </Page>
  );
});

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map(post => ({
    params: {id: post.id},
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const post = blogPosts.find(post => post.id === params?.id);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

BlogPostPage.displayName = 'BlogPostPage';
export default BlogPostPage;