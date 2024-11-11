import setCollectionMiddleware from '@/Middleware/setCollectionMiddleware';
import AddProps from '@/types/AddProps';
import Image from 'next/image';
import React from 'react';

const AddButton = ({
  collection,
  setCollection,
  clicked,
  setClicked,
  numRows,
  setNumRows,
  lastIndex,
  setLastIndex,
  setBack,
}: AddProps) => {
  const handleAdd = async () => {
    const collectionBase = [...collection];
    if (clicked) {
      setClicked(null);
    }

    const newCollection = collectionBase.filter((c) => c.status === true);

    const lastNumbers = collectionBase.filter((c) => c.row === numRows);

    let newIndex = lastIndex;

    let currentRow = numRows;
    let count = lastNumbers.length;

    const updatedCollection = newCollection.map((e) => {
      const newCell = {
        ...e,
        row: currentRow,
        col: count,
        index: newIndex,
        help: false,
      };

      count++;
      newIndex++;

      if (count > 8) {
        count = 0;
        currentRow++;
      }

      return newCell;
    });

    setLastIndex(newIndex);

    setCollectionMiddleware(
      [...collection, ...updatedCollection],
      setCollection,
    );

    setNumRows(currentRow);
    setBack(null);
  };

  return (
    <button onClick={handleAdd} className="">
      <Image src="/src/images/add.png" width={24} height={24} alt="Plus" />
    </button>
  );
};

export default AddButton;
