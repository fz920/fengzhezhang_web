import {CalendarIcon, ClockIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import {FC, memo} from 'react';

import {BlogPost} from '../../../data/dataDef';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: FC<BlogPostCardProps> = memo(({post}) => {
  const {title, excerpt, date, readTime, tags, image, id} = post;

  return (
    <Link className="block" href={`/blog/${id}`}>
      <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-[1.02] cursor-pointer">
        {image && (
          <div className="relative h-56 w-full">
            <Image
              alt={title}
              className="object-cover"
              fill
              src={image}
            />
          </div>
        )}
        <div className="flex flex-col gap-y-4 p-8">
          <div className="flex flex-col gap-y-3">
            <h3 className="text-xl font-bold text-neutral-900 hover:text-orange-600 transition-colors">{title}</h3>
            <p className="text-base text-neutral-600 leading-relaxed">{excerpt}</p>
          </div>

          <div className="flex items-center gap-x-6 text-sm text-neutral-500">
            <div className="flex items-center gap-x-2">
              <CalendarIcon className="h-5 w-5" />
              <span>{new Date(date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</span>
            </div>
            <div className="flex items-center gap-x-2">
              <ClockIcon className="h-5 w-5" />
              <span>{readTime}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map(tag => (
              <span
                className="rounded-full bg-orange-100 px-3 py-2 text-sm text-orange-700 font-medium"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-4 inline-flex items-center text-orange-600 font-medium group">
            <span>Read More</span>
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
});

BlogPostCard.displayName = 'BlogPostCard';
export default BlogPostCard;