import setCollectionMiddleware from '@/Middleware/setCollectionMiddleware';
import Cell from '@/types/Cell';
import CleanRowsProps from '@/types/CleanRowsProps';
import Image from 'next/image';
import React from 'react';

const CleanRowsButton = ({
  collection,
  setCollection,
  setClicked,
  numRows,
  setLastIndex,
}: CleanRowsProps) => {
  const cleanRows = () => {
    setClicked(null);

    const rows: Array<Array<Cell>> = Array.from(
      { length: numRows + 1 },
      () => [],
    );

    collection.forEach((cell) => {
      if (rows[cell.row]) {
        rows[cell.row].push(cell);
      }
    });

    const toDisable: Array<number> = [];

    rows
      .filter((item) => item.length !== 0)
      .forEach((row) => {
        const numDesabled: Array<number> = [];

        row.forEach((cell) => {
          if (!cell.status) {
            numDesabled.push(cell.index);
          }
        });

        if (numDesabled.length === 9) {
          toDisable.push(...numDesabled);
        }
      });

    const newCollection = collection.filter(
      (cell, index) => !toDisable.includes(index),
    );

    newCollection.map((cell, index) => (cell.index = index));

    setCollectionMiddleware(newCollection, setCollection);
    setLastIndex(newCollection.length);
  };

  return (
    <button onClick={() => cleanRows()} className="">
      <Image src="/src/images/broom.png" width={24} height={24} alt="Plus" />
    </button>
  );
};

export default CleanRowsButton;
