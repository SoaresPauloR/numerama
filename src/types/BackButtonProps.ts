import Cell from './Cell';

type BackButtonProps = {
  collection: Array<Cell>;
  setCollection: React.Dispatch<React.SetStateAction<Array<Cell>>>;
  back: Array<Cell> | null;
};

export default BackButtonProps;
