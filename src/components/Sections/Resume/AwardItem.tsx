import {FC, memo} from 'react';

import {Award} from '../../../data/dataDef';

const AwardItem: FC<{award: Award}> = memo(({award}) => {
  const {title, description, year} = award;

  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-2">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="text-sm text-neutral-500 sm:text-base">{year}</span>
        </div>
        {description && (
          <span className="text-sm text-neutral-600 sm:text-base">
            {description}
          </span>
        )}
      </div>
    </div>
  );
});

AwardItem.displayName = 'AwardItem';
export default AwardItem;