import Cell from './Cell';

type HelperButtonProps = {
  collection: Array<Cell>;
  clicked: Cell | null;
  setClicked: React.Dispatch<React.SetStateAction<Cell | null>>;
  checkNumber: (a: Cell, b: Cell) => boolean;
  setCollectionMiddleware: (collection: Array<Cell>) => void;
};

export default HelperButtonProps;
