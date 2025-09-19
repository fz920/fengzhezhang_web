import {FC, memo} from 'react';

import {Publication} from '../../../data/dataDef';

const PublicationItem: FC<{publication: Publication}> = memo(({publication}) => {
  const {title, authors, venue, year, url} = publication;

  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="text-sm font-medium italic sm:text-base">{authors}</span>
        </div>
        <span className="text-sm text-neutral-500 sm:text-base">
          {venue} • {year}
        </span>
      </div>
      {url && (
        <p className="prose prose-sm text-neutral-600 sm:prose-base">
          <a
            className="text-blue-600 hover:text-blue-800 underline"
            href={url}
            rel="noopener noreferrer"
            target="_blank"
          >
            View Publication
          </a>
        </p>
      )}
    </div>
  );
});

PublicationItem.displayName = 'PublicationItem';
export default PublicationItem;