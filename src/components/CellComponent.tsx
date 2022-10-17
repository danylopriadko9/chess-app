import React from 'react';
import { Cell } from '../models/Cell';

type CellComponentProps = {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
};

const CellComponent: React.FC<CellComponentProps> = ({
  cell,
  selected,
  click,
}) => {
  return (
    <div
      className={[
        'cell',
        `cell_${cell.color}`,
        selected ? 'selected' : '',
      ].join(' ')}
      onClick={() => click(cell)}
      style={{ backgroundColor: cell.figure && cell.available ? 'green' : '' }}
    >
      {cell.available && !cell.figure && <div className='avalible'></div>}
      {cell.figure?.logo && <img src={cell.figure.logo} />}
    </div>
  );
};

export default CellComponent;
