import logo from '../../assets/black-bishop.png';
import { Cell } from '../Cell';
import { Colors } from '../Colors';

// перечисляем все фигуры
export enum figureName {
  FIGURE = 'Фигура',
  KING = 'Король',
  KNIGHT = 'Конь',
  PAWN = 'Пешка',
  QUEEN = 'Королева',
  ROOK = 'Ладья',
  BISHOP = 'Слон',
}

// создаем класс наследования фигуры
export class Figure {
  color: Colors;
  logo: typeof logo | null;
  cell: Cell;
  name: figureName;
  id: number;

  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null;
    this.name = figureName.FIGURE;
    this.id = Math.random();
  }

  // проверка может ли фигура переместиться на данное поле
  canMove(target: Cell) {
    if (target.figure?.color === this.color) {
      return false;
    }

    if (target.figure?.name === figureName.KING) {
      return false;
    }
    return true;
  }

  // движение фигуры
  moveFigure(target: Cell) {}
}
