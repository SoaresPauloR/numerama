import Cell from './Cell';

type CollectionType = {
  collection: Array<Cell>;
  setCollection: React.Dispatch<React.SetStateAction<Array<Cell>>>;
  setBack: React.Dispatch<React.SetStateAction<Array<Cell> | null>>;
  numRows: number;
  clicked: Cell | null;
  setClicked: React.Dispatch<React.SetStateAction<Cell | null>>;
};

export default CollectionType;
