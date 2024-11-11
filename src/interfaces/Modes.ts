import Mode from '@/interfaces/Mode';
import Cell from '@/types/Cell';

export class Normal implements Mode {
  name;
  collection: Array<Cell>;

  constructor() {
    this.name = 'Normal';
    this.collection = this.generate();
  }

  generate() {
    return [
      { index: 0, number: 1, row: 0, col: 0, status: true, help: false },
      { index: 1, number: 2, row: 0, col: 1, status: true, help: false },
      { index: 2, number: 3, row: 0, col: 2, status: true, help: false },
      { index: 3, number: 4, row: 0, col: 3, status: true, help: false },
      { index: 4, number: 5, row: 0, col: 4, status: true, help: false },
      { index: 5, number: 6, row: 0, col: 5, status: true, help: false },
      { index: 6, number: 7, row: 0, col: 6, status: true, help: false },
      { index: 7, number: 8, row: 0, col: 7, status: true, help: false },
      { index: 8, number: 9, row: 0, col: 8, status: true, help: false },
      { index: 9, number: 1, row: 1, col: 0, status: true, help: false },
      { index: 10, number: 1, row: 1, col: 1, status: true, help: false },
      { index: 11, number: 1, row: 1, col: 2, status: true, help: false },
      { index: 12, number: 2, row: 1, col: 3, status: true, help: false },
      { index: 13, number: 1, row: 1, col: 4, status: true, help: false },
      { index: 14, number: 3, row: 1, col: 5, status: true, help: false },
      { index: 15, number: 1, row: 1, col: 6, status: true, help: false },
      { index: 16, number: 4, row: 1, col: 7, status: true, help: false },
      { index: 17, number: 1, row: 1, col: 8, status: true, help: false },
      { index: 18, number: 5, row: 2, col: 0, status: true, help: false },
      { index: 19, number: 1, row: 2, col: 1, status: true, help: false },
      { index: 20, number: 6, row: 2, col: 2, status: true, help: false },
      { index: 21, number: 1, row: 2, col: 3, status: true, help: false },
      { index: 22, number: 7, row: 2, col: 4, status: true, help: false },
      { index: 23, number: 1, row: 2, col: 5, status: true, help: false },
      { index: 24, number: 8, row: 2, col: 6, status: true, help: false },
      { index: 25, number: 1, row: 2, col: 7, status: true, help: false },
      { index: 26, number: 9, row: 2, col: 8, status: true, help: false },
    ];
  }
}

export class Random implements Mode {
  name;
  collection: Array<Cell>;

  constructor() {
    this.name = 'Random';
    this.collection = this.generate();
  }

  generate() {
    const collection = [] as Array<Cell>;

    let col = 0;

    for (let i = 0; i < 27; i++) {
      const randomNumber = Math.floor(Math.random() * 9) + 1;

      collection.push({
        index: i,
        number: randomNumber,
        row: Math.floor(i / 9),
        col: col,
        status: true,
        help: false,
      });

      if (col === 8) {
        col = 0;
      } else {
        col++;
      }
    }

    return collection;
  }
}

export class Test implements Mode {
  name;
  collection: Array<Cell>;

  constructor() {
    this.name = 'Test';
    this.collection = this.generate();
  }

  generate() {
    const collection = [] as Array<Cell>;

    let col = 0;

    for (let i = 0; i < 6; i++) {
      collection.push({
        index: i,
        number: 1,
        row: Math.floor(i / 9),
        col: col,
        status: true,
        help: false,
      });

      if (col === 8) {
        col = 0;
      } else {
        col++;
      }
    }

    return collection;
  }
}

export const EnumModes = {
  get Normal() {
    return new Normal();
  },
  get Random() {
    return new Random();
  },
  get Test() {
    return new Test();
  },
};

type Modes = Normal | Random | Test;
export default Modes;
