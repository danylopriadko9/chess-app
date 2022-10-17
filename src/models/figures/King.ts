import { Colors } from '../Colors';
import { Figure, figureName } from './Figure';
import blackLogo from '../../assets/black-king.png';
import whiteLogo from '../../assets/white-king.png';
import { Cell } from '../Cell';

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);

    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = figureName.KING;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }

    const dx: number[] = [0, 1, -1];

    for (let i = 0; i < dx.length; i++) {
      for (let j = 0; j < dx.length; j++) {
        if (
          target.y === this.cell.y + dx[i] &&
          target.x === this.cell.x + dx[j]
        ) {
          return true;
        }
      }
    }

    // if (
    //   (target.y === this.cell.y ||
    //     target.y === this.cell.y + 1 ||
    //     target.y === this.cell.y - 1) &&
    //   (target.x === this.cell.x ||
    //     target.x === this.cell.x + 1 ||
    //     target.x === this.cell.x - 1)
    // ) {
    //   return true;
    // }

    console.log(this.cell.y, this.cell.x);

    return false;
  }
}
