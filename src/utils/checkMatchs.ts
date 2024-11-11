import Cell from '@/types/Cell';
import checkVertical from './checkVertical';

const checkMatchs = (collection: Array<Cell>, a: Cell, b: Cell): boolean => {
  if (b.number !== a.number && b.number + a.number !== 10) {
    return false;
  }

  if (b.col === a.col) {
    if (checkVertical(collection, b, a, b.row > a.row ? -1 : 1)) {
      return false;
    }

    return true;
  }

  let start: number, finish: number;
  let actived = false;

  if (b.index > a.index) {
    start = a.index;
    finish = b.index;
  } else {
    start = b.index;
    finish = a.index;
  }

  for (let i = start + 1; i < finish; i++) {
    collection.forEach((item) => {
      if (item.index === i) {
        if (item.status) {
          actived = true;
        }
      }
    });
  }

  if (!actived) {
    return true;
  }

  return false;
};

export default checkMatchs;
