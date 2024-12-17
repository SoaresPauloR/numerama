'use client';

import Cell from '@/types/Cell';
import React, { useEffect, useState } from 'react';
import { HelperButton } from './HelperButton';
import setCollectionMiddleware from '@/Middleware/setCollectionMiddleware';
import Collection from './Collection';
import checkMatch from '@/utils/checkMatch';
import AddButton from './AddButton';
import CleanRowsButton from './CleanRowsButton';
import BackButton from './BackButton';
import GameProps from '@/types/GameProps';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Statistics from '@/types/Statistics';

export const Game = ({ initConf }: GameProps) => {
  const [collection, setCollection] = useState<Array<Cell>>([]);
  const [numRows, setNumRows] = useState<number>(3);
  const [lastIndex, setLastIndex] = useState<number>(27);
  const [back, setBack] = useState<Array<Cell> | null>(null);
  const [clicked, setClicked] = useState<Cell | null>(null);

  const [statisticState, setStatisticState] = useState<boolean>(false);
  const [statistic, setStatistic] = useState<Statistics>({
    number: 0,
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0,
    nine: 0,
    rest: 0,
  });

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const newGame = () => {
      setCollectionMiddleware(initConf.method.collection, setCollection);

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

    setCollection(initConf.method.collection);

    const rows = 3;
    setNumRows(rows);
    setLastIndex(27);

    setLoading(false);
  }, [initConf]);

  const handleStatistic = () => {
    if (statisticState) return setStatisticState(!statisticState);

    const count = {
      number: 0,
      one: 0,
      two: 0,
      three: 0,
      four: 0,
      five: 0,
      six: 0,
      seven: 0,
      eight: 0,
      nine: 0,
      rest: statistic.rest,
    };

    collection.map((cell) => {
      switch (cell.number) {
        case 1:
          if (cell.status) count.one++;
          break;
        case 2:
          if (cell.status) count.two++;
          break;
        case 3:
          if (cell.status) count.three++;
          break;
        case 4:
          if (cell.status) count.four++;
          break;
        case 5:
          if (cell.status) count.five++;
          break;
        case 6:
          if (cell.status) count.six++;
          break;
        case 7:
          if (cell.status) count.seven++;
          break;
        case 8:
          if (cell.status) count.eight++;
          break;
        case 9:
          if (cell.status) count.nine++;
          break;
      }

      if (cell.status) count.number++;
    });

    setStatistic(count);
    setStatisticState(!statisticState);

    console.log(collection);
  };

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
          checkNumber={(a, b) => checkMatch(collection, a, b)}
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

      <footer
        onClick={handleStatistic}
        className={`footer ${statisticState ? 'footerActived' : ''}`}
      >
        <div className="footerTitle">
          <h3>Statistics</h3>
          {statisticState ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </div>

        <ul className="footerList">
          <li className="footerItem">
            <div>Number</div> <div>{statistic.number}</div>
          </li>
          <hr />
          <li className="footerItem">
            <div>One</div> <div>{statistic.one}</div>
          </li>
          <hr />
          <li className="footerItem">
            <div>Two</div> <div>{statistic.two}</div>
          </li>
          <hr />
          <li className="footerItem">
            <div>Three</div> <div>{statistic.three}</div>
          </li>
          <hr />
          <li className="footerItem">
            <div>Four</div> <div>{statistic.four}</div>
          </li>
          <hr />
          <li className="footerItem">
            <div>Five</div> <div>{statistic.five}</div>
          </li>
          <hr />
          <li className="footerItem">
            <div>Six</div> <div>{statistic.six}</div>
          </li>
          <hr />
          <li className="footerItem">
            <div>Seven</div> <div>{statistic.seven}</div>
          </li>
          <hr />
          <li className="footerItem">
            <div>Eight</div> <div>{statistic.eight}</div>
          </li>
          <hr />
          <li className="footerItem">
            <div>Nine</div> <div>{statistic.nine}</div>
          </li>
        </ul>
      </footer>
    </>
  );
};
