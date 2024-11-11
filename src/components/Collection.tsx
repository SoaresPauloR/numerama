import setCollectionMiddleware from '@/Middleware/setCollectionMiddleware';
import Cell from '@/types/Cell';
import CollectionType from '@/types/CollectionProps';
import checkMatchs from '@/utils/checkMatchs';
import React from 'react';

const Collection = ({
  collection,
  setCollection,
  setBack,
  numRows,
  clicked,
  setClicked,
}: CollectionType) => {
  // State variable to manage the collection of cells on the game board

  const handleClick = (cell: Cell) => {
    if (!clicked || cell.index === clicked.index) {
      changeClickedState(cell);

      return;
    }

    if (checkMatchs(collection, cell, clicked)) {
      setStatusFalse(cell, clicked);

      isFinish();

      return;
    }

    changeClickedState(cell);
  };

  const isFinish = () => {};

  const changeClickedState = (cell: Cell) => {
    const newCollection = [...collection];

    const itemToUpdate = clicked ? clicked : cell;

    newCollection[itemToUpdate.index] = {
      ...collection[itemToUpdate.index],
    };

    setCollectionMiddleware([...newCollection], setCollection);
    clicked ? setClicked(null) : setClicked(cell);
  };

  const setStatusFalse = (a: Cell, b?: Cell) => {
    const newCollection = [...collection];

    const helper = newCollection.filter((cell) => cell.help === true);

    if (helper.length === 2) {
      newCollection[helper[0].index].help = false;
      newCollection[helper[1].index].help = false;
    } else if (helper.length === 1) {
      newCollection[helper[0].index].help = false;
    }

    newCollection[a.index] = {
      ...collection[a.index],
      status: false,
      help: false,
    };

    if (b) {
      newCollection[b.index] = {
        ...collection[b.index],
        status: false,
        help: false,
      };

      setBack([a, b]);
    }

    setCollectionMiddleware([...newCollection], setCollection);
    setClicked(null);
  };

  const renderRows = () => {
    const rows: Array<Array<Cell>> = Array.from(
      { length: numRows + 1 },
      () => [],
    );

    collection.forEach((cell) => {
      if (rows[cell.row]) {
        rows[cell.row].push(cell);
      }
    });

    return rows
      .filter((item) => item.length !== 0)
      .map((row, i) => (
        <tr key={i}>
          {row.map((cell) => (
            <td
              key={cell.col}
              onClick={() => (cell.status ? handleClick(cell) : {})}
              className={`${cell.index === clicked?.index ? 'clicked ' : ''}${!cell.status ? 'disabled ' : ''}${cell.help ? 'help' : ''}`}
            >
              {cell.number}
            </td>
          ))}
        </tr>
      ));
  };

  return (
    <table className="game">
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

export default Collection;
