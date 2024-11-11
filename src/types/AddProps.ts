import Cell from './Cell';

type AddProps = {
  collection: Array<Cell>;
  setCollection: React.Dispatch<React.SetStateAction<Array<Cell>>>;
  clicked: Cell | null;
  setClicked: React.Dispatch<React.SetStateAction<Cell | null>>;
  numRows: number;
  setNumRows: React.Dispatch<React.SetStateAction<number>>;
  lastIndex: number;
  setLastIndex: React.Dispatch<React.SetStateAction<number>>;
  setBack: React.Dispatch<React.SetStateAction<Array<Cell> | null>>;
};

export default AddProps;
