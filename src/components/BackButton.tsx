import setCollectionMiddleware from '@/Middleware/setCollectionMiddleware';
import BackButtonProps from '@/types/BackButtonProps';
import Image from 'next/image';
import React from 'react';

const BackButton = ({ collection, setCollection, back }: BackButtonProps) => {
  const backCells = () => {
    if (!back) return;

    const newCollection = [...collection];

    newCollection[back[0].index].status = true;
    newCollection[back[1].index].status = true;

    setCollectionMiddleware(newCollection, setCollection);
  };

  return (
    <button onClick={() => backCells()} className="">
      <Image src="/src/images/back.png" width={24} height={24} alt="Plus" />
    </button>
  );
};

export default BackButton;
