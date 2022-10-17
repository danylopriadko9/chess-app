import { Colors } from '../Colors';
import { Figure, figureName } from './Figure';
import blackLogo from '../../assets/black-bishop.png';
import whiteLogo from '../../assets/white-bishop.png';
import { Cell } from '../Cell';

export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);

    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = figureName.BISHOP;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }

    if (this.cell.isEmptyDiagonal(target)) {
      return true;
    }
    return false;
  }
}
