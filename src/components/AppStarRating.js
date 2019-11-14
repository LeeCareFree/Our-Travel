import React from 'react';
import { IconBase, IconStarFull, IconStarEmpty } from './Icons';

export default () => {
  const seqN = Array(4).fill(null);
  const seqX = Array(1).fill(null);

  return (
    <div>
      {seqN.map((_, n) => (
        <IconBase iconName="full star" iconColor="orangered" key={n}>
          <IconStarFull />
        </IconBase>
      ))}

      {seqX.map((_, x) => (
        <IconBase iconName="empty star" iconColor="orangered" key={x + 5}>
          <IconStarEmpty />
        </IconBase>
      ))}
    </div>
  );
};
