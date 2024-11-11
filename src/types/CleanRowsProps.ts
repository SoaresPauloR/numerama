import Cell from './Cell';

type CleanRowsProps = {
  collection: Array<Cell>;
  setCollection: React.Dispatch<React.SetStateAction<Array<Cell>>>;
  setClicked: React.Dispatch<React.SetStateAction<Cell | null>>;
  numRows: number;
  setLastIndex: React.Dispatch<React.SetStateAction<number>>;
};

export default CleanRowsProps;
