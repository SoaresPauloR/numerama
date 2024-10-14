'use client';

import React, { useState } from 'react';

type Collection = {
  index: number;
  number: number;
  row: number;
  col: number;
  status: boolean;
  clicked: boolean;
};

export const Game = () => {
  const [clicked, setClicked] = useState<Collection | null>(null);

  const [numRows, setNumRows] = useState<number>(3);
  const [lastIndex, setLastIndex] = useState<number>(27);

  const [collection, setCollection] = useState<Array<Collection>>([
    { index: 1, number: 1, row: 1, col: 1, status: true, clicked: false },
    { index: 2, number: 2, row: 1, col: 2, status: true, clicked: false },
    { index: 3, number: 3, row: 1, col: 3, status: true, clicked: false },
    { index: 4, number: 4, row: 1, col: 4, status: true, clicked: false },
    { index: 5, number: 5, row: 1, col: 5, status: true, clicked: false },
    { index: 6, number: 6, row: 1, col: 6, status: true, clicked: false },
    { index: 7, number: 7, row: 1, col: 7, status: true, clicked: false },
    { index: 8, number: 8, row: 1, col: 8, status: true, clicked: false },
    { index: 9, number: 9, row: 1, col: 9, status: true, clicked: false },
    { index: 10, number: 1, row: 2, col: 1, status: true, clicked: false },
    { index: 11, number: 1, row: 2, col: 2, status: true, clicked: false },
    { index: 12, number: 1, row: 2, col: 3, status: true, clicked: false },
    { index: 13, number: 2, row: 2, col: 4, status: true, clicked: false },
    { index: 14, number: 1, row: 2, col: 5, status: true, clicked: false },
    { index: 15, number: 3, row: 2, col: 6, status: true, clicked: false },
    { index: 16, number: 1, row: 2, col: 7, status: true, clicked: false },
    { index: 17, number: 4, row: 2, col: 8, status: true, clicked: false },
    { index: 18, number: 1, row: 2, col: 9, status: true, clicked: false },
    { index: 19, number: 5, row: 3, col: 1, status: true, clicked: false },
    { index: 20, number: 1, row: 3, col: 2, status: true, clicked: false },
    { index: 21, number: 6, row: 3, col: 3, status: true, clicked: false },
    { index: 22, number: 1, row: 3, col: 4, status: true, clicked: false },
    { index: 23, number: 7, row: 3, col: 5, status: true, clicked: false },
    { index: 24, number: 1, row: 3, col: 6, status: true, clicked: false },
    { index: 25, number: 8, row: 3, col: 7, status: true, clicked: false },
    { index: 26, number: 1, row: 3, col: 8, status: true, clicked: false },
    { index: 27, number: 9, row: 3, col: 9, status: true, clicked: false },
  ]);

  const handleAdd = () => {
    const newCollection = collection.filter((c) => c.status === true);

    const lastNumbers = collection.filter(c => c.row === numRows);

    let newIndex = lastIndex;

    let currentRow = numRows;
    let count = lastNumbers.length;

    const updatedCollection = newCollection.map((e) => {
      count++;
      newIndex++;

      if (count > 9) {
        count = 1;
        currentRow++;
      }

      return { ...e, row: currentRow, col: count, index: newIndex };

    });

    setLastIndex(newIndex);
    setCollection([...collection, ...updatedCollection]);
    setNumRows(currentRow);

    console.log(collection);
  };


  const handleClick = (cell: Collection) => {
    if (clicked && cell.row === clicked.row && cell.col === clicked.col) {
      setClicked(null);

      setCollection(
        collection.map((item) =>
          item.row === cell.row && item.col === cell.col
            ? { ...item, clicked: !item.clicked }
            : item
        )
      );

      return;
    };

    if (clicked) {
      if (clicked.number === cell.number || clicked.number + cell.number === 10) {

        // vertical 
        if (clicked.col === cell.col) {
          if (clicked.row === cell.row + 1 || clicked.row === cell.row - 1) {
            setCollection(
              collection.map((item) => {
                let newItem;

                if (item.row === clicked.row && item.col === clicked.col) {
                  newItem = { ...item, status: false, clicked: false }
                } else if (item.row === cell.row && item.col === cell.col) {
                  newItem = { ...item, status: false, clicked: false }
                } else {
                  newItem = { ...item };
                }

                return newItem;
              }
              )
            );

            setClicked(null);
            return;

          } else {
            if (clicked.row > cell.row) {
              let actived = false;

              for (let i = clicked.row - 1; i > cell.row; i--) {
                collection.forEach((item) => {
                  if (item.col === clicked.col && item.row === i) {
                    if (item.status) {
                      actived = true;
                    }
                  }
                });
              }

              if (actived) {
                setClicked(null);

                setCollection(
                  collection.map((item) => item.clicked === true ? { ...item, clicked: false } : item)
                );

                return
              };


              setCollection(
                collection.map((item) => {
                  let newItem;

                  if (item.row === clicked.row && item.col === clicked.col) {
                    newItem = { ...item, status: false, clicked: false }
                  } else if (item.row === cell.row && item.col === cell.col) {
                    newItem = { ...item, status: false, clicked: false }
                  } else {
                    newItem = { ...item };
                  }

                  return newItem;
                }
                )
              );

              setClicked(null);
              return;

            } else if (clicked.row < cell.row) {
              let actived = false;

              for (let i = clicked.row + 1; i < cell.row; i++) {
                collection.forEach((item) => {
                  if (item.col === clicked.col && item.row === i) {
                    if (item.status) {
                      actived = true;
                    }
                  }
                });
              }

              if (actived) {
                setClicked(null);

                setCollection(
                  collection.map((item) => item.clicked === true ? { ...item, clicked: false } : item)
                );

                return
              };


              setCollection(
                collection.map((item) => {
                  let newItem;

                  if (item.row === clicked.row && item.col === clicked.col) {
                    newItem = { ...item, status: false, clicked: false }
                  } else if (item.row === cell.row && item.col === cell.col) {
                    newItem = { ...item, status: false, clicked: false }
                  } else {
                    newItem = { ...item };
                  }

                  return newItem; 1
                }
                )
              );

              setClicked(null);

              return;
            }
          }
        }

        if (clicked.row === cell.row) {
          if (clicked.col > cell.col) {
            let actived = false;

            for (let i = clicked.col - 1; i > cell.col; i--) {


              collection.forEach((item) => {
                if (item.row === clicked.row && item.col === i) {
                  if (item.status) {

                    actived = true;
                  }
                }
              });
            }

            if (actived) {
              setClicked(null);

              setCollection(
                collection.map((item) => item.clicked === true ? { ...item, clicked: false } : item)
              );

              return
            };


            setCollection(
              collection.map((item) => {
                let newItem;

                if (item.row === clicked.row && item.col === clicked.col) {
                  newItem = { ...item, status: false, clicked: false }
                } else if (item.row === cell.row && item.col === cell.col) {
                  newItem = { ...item, status: false, clicked: false }
                } else {
                  newItem = { ...item };
                }

                return newItem;
              }
              )
            );

            setClicked(null);
            return;
          } else if (clicked.col < cell.col) {
            let actived = false;

            for (let i = clicked.col + 1; i < cell.col; i++) {


              collection.forEach((item) => {
                if (item.row === clicked.row && item.col === i) {
                  if (item.status) {

                    actived = true;
                  }
                }
              });
            }

            if (actived) {
              setClicked(null);

              setCollection(
                collection.map((item) => item.clicked === true ? { ...item, clicked: false } : item)
              );

              return
            };


            setCollection(
              collection.map((item) => {
                let newItem;

                if (item.row === clicked.row && item.col === clicked.col) {
                  newItem = { ...item, status: false, clicked: false }
                } else if (item.row === cell.row && item.col === cell.col) {
                  newItem = { ...item, status: false, clicked: false }
                } else {
                  newItem = { ...item };
                }

                return newItem;
              }
              )
            );

            setClicked(null);
            return;
          }
        } else {
          let start: number, finish: number;


          if (clicked.row > cell.row) {
            start = cell.index;
            finish = clicked.index;
          } else {
            start = clicked.index;
            finish = cell.index;
          }

          let actived = false;

          for (let i = start + 1; i < finish; i++) {
            collection.forEach((item) => {
              if (item.index === i) {
                if (item.status) {
                  actived = true;
                }
              }
            });
          }

          if (actived) {
            setClicked(null);

            setCollection(
              collection.map((item) => item.clicked === true ? { ...item, clicked: false } : item)
            );

            return
          };

          setCollection(
            collection.map((item) => {
              let newItem;

              if (item.row === clicked.row && item.col === clicked.col) {
                newItem = { ...item, status: false, clicked: false }
              } else if (item.row === cell.row && item.col === cell.col) {
                newItem = { ...item, status: false, clicked: false }
              } else {
                newItem = { ...item };
              }

              return newItem;
            }
            )
          );

          setClicked(null);
          return;

        }
      }

      setClicked(null);

      setCollection(
        collection.map((item) => item.clicked === true ? { ...item, clicked: false } : item)
      );

      return;
    };

    setClicked(cell);

    setCollection(
      collection.map((item) =>
        item.row === cell.row && item.col === cell.col
          ? { ...item, clicked: !item.clicked }
          : item
      )
    );
  };

  const renderRows = () => {
    const rows: Array<Array<Collection>> = Array.from({ length: numRows }, () => []);

    collection.forEach((cell) => {
      if (rows[cell.row - 1]) {
        rows[cell.row - 1].push(cell);
      }
    });

    return rows.map((row, i) => (
      <tr key={i}>
        {row.map((cell) => (
          <td
            key={cell.col}
            onClick={() => cell.status ? handleClick(cell) : {}}
            className={`${cell.clicked ? 'clicked' : ''} ${!cell.status ? 'disabled' : ''}`}
          >
            {cell.number}
          </td>
        ))}
      </tr>
    ));
  };


  return (
    <div>
      <button onClick={handleAdd} className='add'>Add</button>
      <table className="game">
        <tbody>
          {renderRows()}
        </tbody>
      </table>
    </div>
  );
};
