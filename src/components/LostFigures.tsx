import React from 'react';
import { Colors } from '../models/Colors';
import { Figure } from '../models/figures/Figure';

type Props = {
  title: string;
  figures: Figure[] | null;
};

const LostFigures: React.FC<Props> = ({ title, figures }) => {
  return (
    <div className='lost'>
      <h3>{title}</h3>
      {figures?.map((figure) => (
        <div key={figure.id}>{figure.logo && <img src={figure.logo} />}</div>
      ))}
    </div>
  );
};

export default LostFigures;
