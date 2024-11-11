'use client';

import Cell from '@/types/Cell';
import React, { useEffect, useState } from 'react';
import { HelperButton } from './HelperButton';
import setCollectionMiddleware from '@/Middleware/setCollectionMiddleware';
import Collection from './Collection';
import checkMatchs from '@/utils/checkMatchs';
import AddButton from './AddButton';
import CleanRowsButton from './CleanRowsButton';
import BackButton from './BackButton';
import GameProps from '@/types/GameProps';

export const Game = ({ initConf }: GameProps) => {
  const [collection, setCollection] = useState<Array<Cell>>([]);
  const [numRows, setNumRows] = useState<number>(3);
  const [lastIndex, setLastIndex] = useState<number>(27);
  const [back, setBack] = useState<Array<Cell> | null>(null);
  const [clicked, setClicked] = useState<Cell | null>(null);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const newGame = () => {
      setCollectionMiddleware(initConf.methode.generate(), setCollection);

      setNumRows(3);
      setBack(null);
      setClicked(null);
      setLastIndex(27);
    };

    if (initConf.newGame) {
      newGame();

      return;
    }

    const newCollectionString = localStorage.getItem('collection');
    const newCollection = newCollectionString
      ? (JSON.parse(newCollectionString) as Array<Cell>)
      : [];

    if (newCollection.length > 0) {
      setCollection(newCollection);

      const rows = newCollection[newCollection.length - 1].row;

      const lastRow = newCollection.filter((cell) => cell.row === rows);

      setNumRows(rows + (lastRow.length > 8 ? 1 : 0));
      setLastIndex(newCollection.length);

      setLoading(false);

      return;
    }

    setCollection(initConf.methode.generate());

    const rows = 3;
    setNumRows(rows);
    setLastIndex(27);

    setLoading(false);
  }, [initConf]);

  if (loading) return <div className="loading">loading...</div>;

  return (
    <>
      <div className="buttons">
        <AddButton
          collection={collection}
          setCollection={setCollection}
          clicked={clicked}
          setClicked={setClicked}
          numRows={numRows}
          setNumRows={setNumRows}
          lastIndex={lastIndex}
          setLastIndex={setLastIndex}
          setBack={setBack}
        />

        <HelperButton
          collection={collection}
          clicked={clicked}
          setClicked={setClicked}
          checkNumber={(a, b) => checkMatchs(collection, a, b)}
          setCollectionMiddleware={(collection) =>
            setCollectionMiddleware(collection, setCollection)
          }
        />

        <CleanRowsButton
          collection={collection}
          setCollection={setCollection}
          setClicked={setClicked}
          numRows={numRows}
          setLastIndex={setLastIndex}
        />

        <BackButton
          collection={collection}
          setCollection={setCollection}
          back={back}
        />
      </div>

      <Collection
        collection={collection}
        setCollection={setCollection}
        setBack={setBack}
        numRows={numRows}
        clicked={clicked}
        setClicked={setClicked}
      />
    </>
  );
};
