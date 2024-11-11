import Cell from '@/types/Cell';

const checkVertical = (
  collection: Array<Cell>,
  a: Cell,
  b: Cell,
  step: 1 | -1,
): boolean => {
  const newCollection = [...collection].filter((c) => {
    if (c.col == a.col && c.status) {
      if (step === -1 && c.index < a.index && c.index > b.index) return true;
      else if (step === 1 && c.index > a.index && c.index < b.index)
        return true;
    }

    return false;
  });

  return newCollection.length ? true : false;
};

export default checkVertical;
