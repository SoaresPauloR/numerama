import Cell from '@/types/Cell';

const setCollectionMiddleware = (
  collection: Array<Cell>,
  setCollection: React.Dispatch<React.SetStateAction<Array<Cell>>>,
) => {
  setCollection(collection);

  localStorage.clear();

  localStorage.setItem('collection', JSON.stringify(collection));
};

export default setCollectionMiddleware;
