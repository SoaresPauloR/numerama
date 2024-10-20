/**
 * The Game component is a functional component that manages a game board.
 * It uses React hooks to manage state and handle user interactions.
 *
 * @remarks
 * The game board is represented as a 2D array of cells, where each cell contains information about its position, number, status, and click state.
 * The component provides functionality to add new rows to the board, handle cell clicks, and update the cell status based on user interactions.
 *
 * @returns - A React functional component that renders the game board and handles user interactions.
 */

'use client';

import React, { useState } from 'react';

type Cell = {
  index: number;
  number: number;
  row: number;
  col: number;
  status: boolean;
  clicked: boolean;
  help: boolean;
};

export const Game = () => {
  // State variables to manage the clicked cell, number of rows, and the last index used for adding new cells
  const [clicked, setClicked] = useState<Cell | null>(null);
  const [numRows, setNumRows] = useState<number>(3);
  const [lastIndex, setLastIndex] = useState<number>(27);
  const [back, setBack] = useState<Array<Cell> | null>(null);

  // State variable to manage the collection of cells on the game board
  const [collection, setCollection] = useState<Array<Cell>>([
    {
      index: 0,
      number: 1,
      row: 0,
      col: 0,
      status: true,
      clicked: false,
      help: false,
    },
    {
      index: 1,
      number: 2,
      row: 0,
      col: 1,
      status: true,
      clicked: false,
      help: false,
    },
    {
      index: 2,
      number: 3,
      row: 0,
      col: 2,
      status: true,
      clicked: false,
      help: false,
    },
    {
      index: 3,
      number: 4,
      row: 0,
      col: 3,
      status: true,
      clicked: false,
      help: false,
    },
    {
      index: 4,
      number: 5,
      row: 0,
      col: 4,
      status: true,
      clicked: false,
      help: false,
    },
    {
      index: 5,
      number: 6,
      row: 0,
      col: 5,
      status: true,
      clicked: false,
      help: false,
    },
    {
      index: 6,
      number: 7,
      row: 0,
      col: 6,
      status: true,
      clicked: false,
      help: false,
    },
    {
      index: 7,
      number: 8,
      row: 0,
      col: 7,
      status: true,
      clicked: false,
      help: false,
    },
    {
      index: 8,
      number: 9,
      row: 0,
      col: 8,
      status: true,
      clicked: false,
      help: false,
    },
    {
      index: 9,
      number: 1,
      row: 1,
      col: 0,
      status: true,
      clicked: false,
      help: false,
    },
    {
      index: 10,
      number: 1,
      row: 1,
      col: 1,
      status: true,
      clicked: false,
      help: false,
    },
    {
      index: 11,
      number: 1,
      row: 1,
      col: 2,
      status: true,
      clicked: false,
      help: false,
    },
    {
      index: 12,
      number: 2,
      row: 1,
      col: 3,
      status: true,
      clicked: false,
      help: false,
    },
    {
      index: 13,
      number: 1,
      row: 1,
      col: 4,
      status: true,
      clicked: false,
      help: false,
    },
    {
      index: 14,
      number: 3,
      row: 1,
      col: 5,
      status: true,
      clicked: false,
      help: false,
    },
    {
      index: 15,
      number: 1,
      row: 1,
      col: 6,
      status: true,
      clicked: false,
      help: false,
    },
    {
      index: 16,
      number: 4,
      row: 1,
      col: 7,
      status: true,
      clicked: false,
      help: false,
    },
    {
      index: 17,
      number: 1,
      row: 1,
      col: 8,
      status: true,
      clicked: false,
      help: false,
    },
    {
      index: 18,
      number: 5,
      row: 2,
      col: 0,
      status: true,
      clicked: false,
      help: false,
    },
    {
      index: 19,
      number: 1,
      row: 2,
      col: 1,
      status: true,
      clicked: false,
      help: false,
    },
    {
      index: 20,
      number: 6,
      row: 2,
      col: 2,
      status: true,
      clicked: false,
      help: false,
    },
    {
      index: 21,
      number: 1,
      row: 2,
      col: 3,
      status: true,
      clicked: false,
      help: false,
    },
    {
      index: 22,
      number: 7,
      row: 2,
      col: 4,
      status: true,
      clicked: false,
      help: false,
    },
    {
      index: 23,
      number: 1,
      row: 2,
      col: 5,
      status: true,
      clicked: false,
      help: false,
    },
    {
      index: 24,
      number: 8,
      row: 2,
      col: 6,
      status: true,
      clicked: false,
      help: false,
    },
    {
      index: 25,
      number: 1,
      row: 2,
      col: 7,
      status: true,
      clicked: false,
      help: false,
    },
    {
      index: 26,
      number: 9,
      row: 2,
      col: 8,
      status: true,
      clicked: false,
      help: false,
    },
  ]);

  // Function to handle adding new rows to the game board
  const handleAdd = async () => {
    const collectionBase = [...collection];

    if (clicked) {
      collectionBase[clicked.index].clicked = false;
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

    setCollection([...collection, ...updatedCollection]);
    setNumRows(currentRow);
  };

  // Function to set the status of a cell to false, disableding the cell on game, and update the clicked state to null
  const setStatusFalse = (a: Cell, b?: Cell) => {
    const newCollection = [...collection];

    newCollection[a.index] = {
      ...collection[a.index],
      status: false,
      clicked: false,
      help: false,
    };

    if (b) {
      newCollection[b.index] = {
        ...collection[b.index],
        status: false,
        clicked: false,
        help: false,
      };

      setBack([a, b]);
    }

    setCollection([...newCollection]);
    setClicked(null);
  };

  // Function to change the clicked state of a cell
  const changeClickedState = (cell: Cell) => {
    const newCollection = [...collection];

    const itemToUpdate = clicked ? clicked : cell;

    newCollection[itemToUpdate.index] = {
      ...collection[itemToUpdate.index],
      clicked: !collection[itemToUpdate.index].clicked,
    };

    setCollection([...newCollection]);
    clicked ? setClicked(null) : setClicked(cell);
  };

  const checkVertical = (a: Cell, b: Cell, step: 1 | -1): boolean => {
    const newCollection = [...collection].filter((c) => {
      if (c.col == a.col && c.status) {
        if (step === -1 && c.index < a.index && c.index > b.index) return true;
        else if (step === 1 && c.index > a.index && c.index < b.index)
          return true;
      }

      return false;
    });

    // console.log(newCollection);

    return newCollection.length ? true : false;
  };

  const checkNumber = (a: Cell, b: Cell): boolean => {
    if (b.number !== a.number && b.number + a.number !== 10) {
      return false;
    }

    if (b.col === a.col) {
      if (checkVertical(b, a, b.row > a.row ? -1 : 1)) {
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

  const helper = () => {
    let help = true;

    collection.forEach((a) => {
      if (help && a.status)
        collection.forEach((b) => {
          if (help && b.status && a.index !== b.index && checkNumber(a, b)) {
            setHelp(a, b);
            help = false;

            return;
          }
        });
    });
  };

  const setHelp = (a: Cell, b: Cell) => {
    const newCollection = [...collection];

    newCollection[a.index] = {
      ...collection[a.index],
      help: true,
    };

    if (b)
      newCollection[b.index] = {
        ...collection[b.index],
        help: true,
      };

    setCollection([...newCollection]);
    setClicked(null);
  };

  // Function to handle cell clicks and update the cell status and clicked state based on user interactions
  const handleClick = (cell: Cell) => {
    if (!clicked || cell.index === clicked.index) {
      changeClickedState(cell);

      return;
    }

    if (checkNumber(cell, clicked)) {
      setStatusFalse(cell, clicked);

      return;
    }

    changeClickedState(cell);
  };

  // Function to render the rows of the game board
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

    return rows.map((row, i) => (
      <tr key={i}>
        {row.map((cell) => (
          <td
            key={cell.col}
            onClick={() => (cell.status ? handleClick(cell) : {})}
            className={`${cell.clicked ? 'clicked ' : ''}${!cell.status ? 'disabled ' : ''}${cell.help ? 'help' : ''}`}
          >
            {cell.number}
          </td>
        ))}
      </tr>
    ));
  };

  const cleanRows = () => {
    return false;
  };
  const backCells = () => {
    if (!back) return;

    const newCollection = [...collection];

    newCollection[back[0].index].status = true;
    newCollection[back[1].index].status = true;

    setCollection(newCollection);
  };

  // Return the game component with the game board and controls
  return (
    <div className="main">
      <div className="buttons">
        <button onClick={handleAdd} className="">
          Add
        </button>
        <button onClick={helper} className="">
          Dica
        </button>
        <button onClick={() => cleanRows()} className="">
          Limpar
        </button>
        <button onClick={() => backCells()} className="">
          Voltar
        </button>
      </div>

      <table className="game">
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
};
